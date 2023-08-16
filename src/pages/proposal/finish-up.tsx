import RootLayout from "@/UI/RootLayout/RootLayout";
import Head from "next/head";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";

type Props = {};

function FinishUp({}: Props) {
  return (
    <div>
      <Head>
        <title>Proposal</title>
      </Head>

      <RootLayout>
        <div className="max-w-[83rem] py-10 mx-auto space-y-3">
          <div className="space-y-9">
            <div className="space-y-2">
              <p className="text-base md:text-4xl font-semibold">
                Let’s give your house a title
              </p>
              <p className="text-sm md:text-sm">
                Short titles work best. Have fun with it – you can always change
                it later.
              </p>
            </div>

            <div className="space-y-4 w-3/4">
              <div className="flex flex-col gap-2">
                <label htmlFor="title">Title</label>
                <InputText id="title" aria-describedby="description-help" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description">Description</label>
                <InputTextarea
                  className="resize-none"
                  id="description"
                  rows={6}
                  aria-describedby="description-help"
                />
              </div>
            </div>

            <div className="w-full text-right space-x-3 mt-16">
              <Link href="/proposal/upload-images">
                <button className="bg-black w-52 hover:bg-card hover:text-black text-white rounded-3xl px-4 py-2">
                  Back
                </button>
              </Link>
              <Link href="/roomstays">
                <button className="bg-purple w-52 hover:bg-light-purple text-white rounded-3xl px-4 py-2">
                  Submit Proposal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default FinishUp;
