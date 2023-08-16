import OvalSpinner from "@/UI/Spinner/OvalSpinner";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { Toast } from "primereact/toast";
import React from "react";
import { useRef } from "react";

function TokenVerify() {
  const { token } = useRouter().query;
  const router = useRouter();
  const toast = useRef<Toast>(null);

  const {
    data: isVerify,
    isLoading: isVerifying,
    status,
  } = useQuery({
    queryKey: ["tokenVerify", token],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-email/${token}`
      ).then((res) => res.json()),

    onSuccess: (data) => {
    localStorage.setItem("verify-token", token as string)
      if (!data.status) {
        toast.current?.show({
          severity: "error",
          summary: data.data.error,
          detail: "Please re-verify your email",
          life: 3000,
        });
      } else {
        toast.current?.show({
          severity: "success",
          summary: "Verified",
          detail: "Your email is verified",
          life: 3000,
        });
        localStorage.setItem("auth-token", data.data.token);
        localStorage.removeItem("verify-token")
       
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    
    },
    enabled: !!token,
  });

  return (
    <div className="flex flex-col h-screen w-full gap-4 items-center justify-center">
      <Head>
        <title>Email verify</title>
      </Head>
      <Toast ref={toast} />
      <div className="rounded-3xl text-white w-1/4 bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary">
        <div className="relative leading-[1.38rem] font-semibold cursor-pointer">
          {status === "loading"
            ? "Please wait..."
            : isVerify?.status
            ? "Verified"
            : "Not verified"}
        </div>
      </div>
      {!isVerifying && !isVerify?.status && (
        <button
          className="bg-white ring-2 rounded-3xl font-semibold ring-gray-50 px-3 py-2 w-60 text-black"
          onClick={() => router.push("/auth/sendmail")}
        >
          Click here to verify again
        </button>
      )}
      {isVerify?.status && (
        <p className="font-semibold">Redirecting you to home page....</p>
      )}

      <OvalSpinner
        color="#574EFA"
        height={40}
        width={80}
        visible={isVerifying}
      />
    </div>
  );
}

export default TokenVerify;
