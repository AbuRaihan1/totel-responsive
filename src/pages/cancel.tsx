import Head from "next/head";
import React from "react";
import RootLayout from "@/UI/RootLayout/RootLayout";
import RefundCard from "@/components/order/RefundCard";
import RefundForm from "@/components/order/RefundForm";

function Cancel() {
  return (
    <div>
      <Head>
        <title>Cancel</title>
      </Head>
      <RootLayout>
        <div className="px-[7.75rem] py-[3rem] flex flex-col gap-[30px] lg:flex-row">
          <div className="order-2 lg:w-3/5 lg:order-1">
            <RefundForm />
          </div>
          <div className="order-1 w-full max-w-lg lg:w-2/5 lg:order-2">
            <RefundCard />
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default Cancel;
