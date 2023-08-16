import Head from "next/head";
import React from "react";
import EditForm from "@/components/editprofile/EditForm";
import Logo from "@/components/navbar/Logo";
import RootLayout from "@/UI/RootLayout/RootLayout";

function EditProfile() {
  return (
    <div className="w-full">
      <Head>
        <title>Edit Profile</title>
      </Head>

      <RootLayout>
        <div className="flex justify-between w-full px-[7.75rem] py-[1.7rem]">
          <div className="bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] rounded-full hover:bg-purple hover:text-white cursor-pointer transition duration-150 items-center justify-center gap-[0.38rem] mt-6 border-[2px] border-solid border-card">
        
            <div className="relative leading-[1.38rem]  self-end font-semibold">
              Save & Exit
            </div>
      
          </div>
        </div>

        <section className="flex flex-col  justify-center gap-6 items-center w-full mb-24 mt-16">
          <div className="relative w-[10.25rem] h-[10.25rem] z-[1]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[10.25rem] h-[10.25rem]"
              alt=""
              src="/svg/vector2.svg"
            />
            <div className="absolute top-[8.13rem] left-[6.94rem] rounded-[17px] bg-purple text-white shadow-[0px_14px_24px_rgba(0,_0,_0,_0.15)] flex flex-col p-[0.63rem] items-start justify-start ">
              <img
                className="relative w-[0.88rem] h-[0.88rem]"
                alt=""
                src="/svg/vector11.svg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <EditForm />
          </div>
        </section>
      </RootLayout>
    </div>
  );
}

export default EditProfile;
