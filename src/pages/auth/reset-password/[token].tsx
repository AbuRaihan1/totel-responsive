import OvalSpinner from "@/UI/Spinner/OvalSpinner";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";

function ResetPassword() {
  const { token } = useRouter().query;
  const router = useRouter();
  const [password, setPassword] = useState("");
  const toast = useRef<Toast>(null);
  useEffect(() => {
    if (token) {
      localStorage.setItem("verify-token", token as string);
    }
  }, []);

  const {
    mutate: resetPassword,
    isLoading,
    data,
  } = useMutation(
    async (data: { password: string; token: string }) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password`,
        {
          password: data.password,
          method: "custom_email",
        },
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      return res.data;
    },

    {
      onSuccess: (data) => {
        if (!data.status) {
          toast.current?.show({
            severity: "error",
            summary: data.data.error,
            detail:
              "There was an error to reset your password. Please try again!",
            life: 3000,
          });
        } else {
          toast.current?.show({
            severity: "success",
            summary: "Verified",
            detail: "Your password is reset, please login",
            life: 3000,
          });

          setTimeout(() => {
            router.push("/auth/login");
          }, 2000);
        }
        localStorage.removeItem("verify-token");
      },
    }
  );

  return (
    <div className="flex flex-col h-screen w-full gap-4 items-center justify-center">
       <Head>
        <title>Reset password</title>
      </Head>
      <Toast ref={toast} />
      <div>
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="password"
            className="text-gray-50 font-semibold text-sm"
          >
            Password
          </label>
          <InputText
            id="password"
            type="password"
            className="rounded-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          disabled={!password || isLoading}
          className="w-full mt-8  text-white rounded-full bg-black shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary disabled:bg-gray-50/30"
          onClick={() =>
            resetPassword({
              password,
              token: token as string,
            })
          }
        >
          {isLoading ? (
            <div className="space-x-3 flex items-center">
              <p className="font-semibold">Please wait...</p>
              <OvalSpinner
                color="#fff"
                height={30}
                width={10}
                visible={isLoading}
              />
            </div>
          ) : (
            "Reset Password"
          )}
        </button>
        {!isLoading && !data?.status && (
          <button
            className="bg-white ring-2 rounded-3xl font-semibold ring-gray-50 px-3 py-2 w-60 my-8 text-black"
            onClick={() => router.push("/auth/sendmail")}
          >
            Click here to verify again
          </button>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
