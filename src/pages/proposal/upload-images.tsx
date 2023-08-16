import RootLayout from "@/UI/RootLayout/RootLayout";
import { useUploadImages } from "@/hooks/useUploadImages";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function UploadImages() {
  const { selectedImages, handleSelectedImage, handleRemoveImage } =
    useUploadImages();
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
                Upload Images
              </p>
              <p className="text-sm md:text-sm">Choose at least 6 pictures.</p>
            </div>

            <div className=" flex flex-col justify-start gap-[16px]  text-4xl">
              <div className="w-96 mb-4">
                <label
                  htmlFor="selectImage"
                  className="flex items-center justify-center h-full flex-col-reverse cursor-pointer p-7 border-2 border-gray-50 border-dashed mt-4 rounded-lg"
                >
                  <p className="text-tiny font-medium mb-1">
                    <span className="text-purple">Browse Files</span> from your
                    Computer
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
            </div>
            <div className="w-full text-right space-x-3 mt-16">
              <Link href="/proposal/amenities">
              <button className="bg-black w-52 hover:bg-card hover:text-black text-white rounded-3xl px-4 py-2">
                Back
              </button>
              </Link>

              <Link href="/proposal/finish-up"> 
              <button className="bg-purple w-52 hover:bg-light-purple text-white rounded-3xl px-4 py-2">
                Next
              </button>
              </Link>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default UploadImages;
