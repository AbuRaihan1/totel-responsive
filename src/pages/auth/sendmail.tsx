import OvalSpinner from "@/UI/Spinner/OvalSpinner";
import { useMutation } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";

function SendMail() {
  const router = useRouter();
  useEffect(() => {
    const verifyToken = localStorage.getItem("verify-token");
    if (!verifyToken) {
      router.push("/auth/login");
    }
  }, []);

  const [email, setEmail] = useState("");
  const toast = useRef<Toast>(null);

  const { mutate: sendEmail, isLoading } = useMutation({
    mutationFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.status) {
        toast.current?.show({
          severity: "error",
          summary: "Error!",
          detail:
            "There was a problem in sending email, please try again later!",
          life: 2000,
        });
      } else {
        toast.current?.show({
          severity: "success",
          summary: "Sent",
          detail: "Verification email sent successfully",
          life: 2000,
        });
      }
      localStorage.removeItem("verify-token");
    },
  });

  return (
    <div className="flex flex-col h-screen w-full gap-4 items-center justify-center">
       <Head>
        <title>Send Mail</title>
      </Head>
      <div className="flex flex-col gap-2 ">
        <label htmlFor="email" className="text-gray-50 font-semibold text-sm">
          Email
        </label>
        <InputText
          id="email"
          type="email"
          className="rounded-full w-[23rem]"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex justify-center w-full">
        <button
          disabled={!email || isLoading}
          className="w-96 mt-8  text-white rounded-full bg-black shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary disabled:bg-gray-50/30"
          onClick={() => sendEmail()}
        >
          {isLoading ? (
            <div className="space-x-2 flex items-center">
              <OvalSpinner
                color="#fff"
                height={20}
                width={30}
                visible={isLoading}
              />
              <p className="font-semibold">Sending...</p>
            </div>
          ) : (
            "Send Email"
          )}
        </button>
      </div>
      <Toast ref={toast} />
    </div>
  );
}

export default SendMail;
