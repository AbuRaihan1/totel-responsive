import React, { useEffect } from "react";
import { useRouter } from "next/router";

import OvalSpinner from "@/UI/Spinner/OvalSpinner";

function VerifyWithGoogle() {
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("auth-token", router?.query?.token as string);
    router.push("/");
  }, [router?.query?.token]);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <div className="rounded-3xl text-white  bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary">
        <div className="relative leading-[1.38rem] font-semibold cursor-pointer">
          Please wait...
        </div>
      </div>
      <OvalSpinner height={40} width={80} color="#574EFA" visible={true} />
    </div>
  );
}

export default VerifyWithGoogle;
