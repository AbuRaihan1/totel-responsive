import RootLayout from "@/UI/RootLayout/RootLayout";
import BottomBar from "@/components/partnerhosting/BottomBar";
import Feature from "@/components/partnerhosting/Feature";
import UpperNavigation from "@/components/partnerhosting/UpperNavigation";
import { useUploadImages } from "@/hooks/useUploadImages";
import Head from "next/head";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React, { useState } from "react";
import { BiCool, BiFootball, BiSwim } from "react-icons/bi";
import { MdOutlineSportsTennis, MdSportsGymnastics } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbFriends } from "react-icons/tb";
import { ImageData } from "typings";

function Intresets() {
  const { selectedImages, handleSelectedImage, handleRemoveImage}=useUploadImages()
  return (
    <div>
      <Head>
        <title>Parnter hosting</title>
      </Head>

      <RootLayout>
        <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-mini text-gray-700 font-text-button-semibold-large md:items-center max-w-[83rem] mx-auto py-5">
          <main className="self-stretch bg-white overflow-hidden flex flex-col py-16 px-[124px] justify-center gap-[32px] md:py-10 md:px-[15px] md:box-border sm:py-10 sm:px-2.5 sm:box-border">
            <UpperNavigation />

            <div className="mb-7">
              <div className=" flex flex-col justify-start gap-[16px]  text-4xl">
                <div className="w-full  leading-[60px] font-semibold md:text-5xl md:flex-1 sm:text-lg mt-6   text-left">
                  Tell about your interests
                </div>
                <div className="relative text-lg tracking-[-0.1px] leading-[26px] inline-block w-[780px] lg:flex-1 md:text-[19px]">
                  You'll add more details later, such as hobbies.
                </div>
              </div>
              <div className="flex flex-col gap-4 my-5">
                <p className="font-semibold flex-1 text-gray-50 text-sm">
                  Interests you have
                </p>

                <div className="flex gap-4 items-center">
                  <Feature text="Exercise GYM" Icon={MdSportsGymnastics} />
                  <Feature text=" LGBT+ friendly" Icon={TbFriends} />
                </div>
                <div className="w-60">
                  <Feature text="Interested in teaming up" Icon={TbFriends} />
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-16">
                <p className="font-semibold flex-1 text-gray-50 text-sm">
                  Interests you are looking for
                </p>

                <div className="flex gap-4 items-center">
                  <Feature text="Friendly person" Icon={MdSportsGymnastics} />
                  <Feature text="Interested in teaming-up" Icon={TbFriends} />
                  <Feature text="Chilling person" Icon={BiCool} />
                </div>
                <div className="flex gap-4 items-center">
                  <Feature text="Footballer" Icon={BiFootball} />
                  <Feature text="Swimmer" Icon={BiSwim} />
                  <Feature text="Sportsman" Icon={MdOutlineSportsTennis} />
                </div>
              </div>

              <div className="ring-1 ring-card w-full " />
            </div>

            <div className="mb-7">
              <div className=" flex flex-col justify-start gap-[16px]  text-4xl">
                <div className="w-full  leading-[60px] font-semibold md:text-5xl md:flex-1 sm:text-lg   text-left">
                  Add your pictures
                </div>
                <div className="relative text-lg tracking-[-0.1px] leading-[26px] inline-block w-[780px] lg:flex-1 md:text-[19px]">
                  You'll need 5 photos to get started. You can add more or make
                  changes later. Choose at least 5 photos.
                </div>
                <div className="w-96 mb-4">
                  <label
                    htmlFor="selectImage"
                    className="flex items-center justify-center h-full flex-col-reverse cursor-pointer p-7 border-2 border-gray-50 border-dashed mt-4 rounded-lg"
                  >
                    <p className="text-tiny font-medium mb-1">
                      <span className="text-purple">Browse Files</span> from
                      your Computer
                    </p>
                    <h2 className="text-center mt-4 text-xl font-medium">
                      Drop your Images Here
                    </h2>
                    <figure>
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/Qd9VtQ2/image.png"
                        alt=""
                        className="w-10"
                      />
                    </figure>
                  </label>
                  <input
                    onChange={handleSelectedImage}
                    type="file"
                    id="selectImage"
                    className="hidden invisible"
                    multiple
                  />
                  <div className="grid grid-cols-2 gap-4 my-4">
                    {selectedImages.slice(0, 2).map((imageData, index) => (
                      <div key={index} className="relative">
                        <img
                          src={imageData.url}
                          alt={`Selected Image ${index}`}
                          className="w-full rounded-lg"
                        />
                        <button
                          onClick={() => handleRemoveImage(index)}
                          className="absolute bg-white top-2 right-2 bg-red-500 text-black flex items-center justify-center h-10 w-10 rounded-full"
                        >
                          <RxCross2 />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 my-4">
                    {selectedImages.slice(2, 5).map((imageData, index) => (
                      <div key={index} className="relative">
                        <img
                          src={imageData.url}
                          alt={`Selected Image ${index}`}
                          className="w-full rounded-lg"
                        />
                        <button
                          onClick={() => handleRemoveImage(index)}
                          className="absolute bg-white top-2 right-2 bg-red-500 text-black flex items-center justify-center h-14 w-14 rounded-full"
                        >
                          <RxCross2 />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedImages.slice(5, 8).map((imageData, index) => (
                      <div key={index} className="relative">
                        <img
                          src={imageData.url}
                          alt={`Selected Image ${index}`}
                          className="w-full rounded-lg"
                        />
                        <button
                          onClick={() => handleRemoveImage(index)}
                          className="absolute bg-white top-2 right-2 bg-red-500 text-black flex items-center justify-center h-14 w-14 rounded-full"
                        >
                          <RxCross2 />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ring-1 ring-card w-full " />
              </div>
            </div>

            <div className="mb-7">
              <div className=" flex flex-col justify-start gap-[16px]  text-4xl">
                <div className="w-full  leading-[60px] font-semibold md:text-5xl md:flex-1 sm:text-lg   text-left">
                  Let's give a title & description!
                </div>
                <div className="relative text-lg tracking-[-0.1px] leading-[26px] inline-block w-[780px] lg:flex-1 md:text-[19px]">
                  Short titles work best. Have fun with it – you can always
                  change it later.
                </div>

                <div className="flex flex-col items-start justify-start gap-[1rem]   md:flex-col sm:flex-col">
                  <div className="rounded-lg bg-system-background-light-primary  overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem]  lg:self-stretch  lg:flex-row md:flex-row sm:flex-row">
                    <InputText
                      id="title"
                      placeholder="Enter title"
                      type="text"
                      className="w-[35.44rem]"
                    />
                  </div>

                  <div className="rounded-lg overflow-hidden shrink-0 flex flex-row pt-[0.75rem] px-[1rem] pb-[2.19rem] items-start justify-start gap-[0.5rem] lg:self-stretch  md:flex-row sm:flex-row">
                    <InputTextarea
                      placeholder="You'll have a great time by staying with me."
                      className="resize-none"
                      rows={5}
                      cols={72}
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>

          <BottomBar back="/partner-hosting/standout" next="/partner-hosting/finish-up" />
        </div>
      </RootLayout>
    </div>
  );
}

export default Intresets;
