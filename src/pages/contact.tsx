import Head from "next/head";
import React from "react";
import RootLayout from "@/UI/RootLayout/RootLayout";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <RootLayout>
        <div className="bg-greyish  overflow-hidden flex flex-col py-[4rem] px-[7.75rem] box-border items-center justify-center text-[3.25rem]   md:flex-col sm:flex-col">
          <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] z-[0]   md:flex-col sm:flex-col">
            <div className="relative tracking-[-0.01em] leading-[3.75rem] font-semibold">
              How can we help you?
            </div>
            <div className="relative text-[1.13rem] tracking-[-0.1px] leading-[1.63rem] inline-block w-[65.51rem]">
              In this step, we will ask you which type of stays you have and if
              guests will book the entire place or just a room. Then let us know
              the location and how many guests can stay.
            </div>
          </div>
        </div>
        <div className="bg-system-background-light-primary flex flex-col  box-border items-center justify-start text-purple   lg:flex-col md:flex-col sm:flex-col">
          <div className="w-full px-[5.5rem] flex flex-col items-start justify-center gap-[1rem]  lg:flex-row md:flex-row sm:flex-col">
            <div className="bg-system-background-light-primary w-full flex flex-row py-[4rem] px-[2rem] box-border items-start justify-center   lg:flex-col md:flex-col sm:flex-col">
              <div className="flex flex-col items-start justify-start gap-[2rem]   md:flex-col sm:flex-col">
                <div className="flex flex-row items-start justify-start   lg:flex-col md:flex-col sm:flex-col">
                  <div className="flex flex-col py-[0rem]   pl-[1rem] box-border items-start justify-center gap-[0.5rem]">
                    <div className="w-[18.81rem] flex flex-col items-start justify-center gap-[1rem] text-[2rem] text-gray-700">
                      <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem]">
                        Let’s Talk With Us
                      </b>
                      <div className="relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 inline-block w-[30rem]">
                        Real adventure and travels encompass engaging in
                        thrilling and immersive experiences that take you
                        beyond.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[3rem] text-[0.94rem] text-gray-25">
                  <div className="flex flex-col items-start justify-start gap-[1rem]   md:flex-col sm:flex-col">
                    <div className="rounded-lg bg-system-background-light-primary  overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem]  lg:self-stretch  lg:flex-row md:flex-row sm:flex-row">
                      <InputText
                        id="lastName"
                        placeholder="Your Name"
                        type="text"
                        className="w-[35.44rem]"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem] b lg:self-stretch  md:flex-row sm:flex-row">
                      <InputText
                        id="phone"
                        type="digit"
                        placeholder="Phone"
                        className="w-[35.44rem]"
                      />
                    </div>
                    <div className="rounded-lg  overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem] lg:self-stretch  md:flex-row sm:flex-row">
                      <InputText
                        id="emailAddress"
                        type="email"
                        placeholder="Email Address"
                        className="w-[35.44rem]"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shrink-0 flex flex-row pt-[0.75rem] px-[1rem] pb-[2.19rem] items-start justify-start gap-[0.5rem] lg:self-stretch  md:flex-row sm:flex-row">
                      <InputTextarea
                        placeholder="Your message here"
                        className="w-full resize-none"
                        rows={5}
                        cols={20}
                      />
                    </div>
                  </div>
                  <div className="rounded-3xl text-white bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.3rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary">
                    <div className="relative leading-[1.38rem] font-semibold cursor-pointer">
                      Send Message
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start py-16  lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch sm:flex-col sm:flex-[unset] sm:self-stretch">
              <div className="flex flex-col items-start justify-start gap-[4rem]   md:flex-col sm:flex-col">
                <div className="w-[30rem] flex flex-row items-center justify-start   lg:flex-col md:flex-col sm:flex-col">
                  <div className="w-[30rem] flex flex-col py-[0rem] pr-[14.44rem] pl-[0rem] box-border items-start justify-center gap-[0.5rem]">
                    <div className="w-[18.81rem] flex flex-col items-start justify-center gap-[1rem] text-[2rem] text-gray-700">
                      <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem]">
                        Contact With Us
                      </b>
                      <div className="relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 inline-block w-[27rem]">
                        Real adventure and travels encompass engaging in
                        thrilling and immersive experiences that take you
                        beyond.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4rem] text-[1.38rem] text-gray-700   md:flex-col sm:flex-col">
                  <div className="flex flex-row items-center justify-start gap-[1rem]   md:flex-row sm:flex-row">
                    <div className="rounded-lg bg-system-background-light-primary w-[3.19rem] h-[3.19rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <img
                        className="relative w-[1.87rem] h-[2.1rem]"
                        alt=""
                        src="/svg/union121.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                      <div className="relative font-semibold">Address</div>
                      <div className="relative text-[1rem] text-gray-50 inline-block w-[19.31rem]">
                        No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[1rem]   lg:flex-row md:flex-row sm:flex-row">
                    <div className="rounded-lg bg-system-background-light-primary w-[3.19rem] h-[3.19rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <img
                        className="relative w-[1.91rem] h-[1.65rem]"
                        alt=""
                        src="/svg/union1213.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                      <div className="relative font-semibold">Email</div>
                      <div className="relative text-[1rem] text-gray-50">
                        support@total.com
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[1rem]   lg:flex-row md:flex-row sm:flex-row">
                    <div className="rounded-lg bg-system-background-light-primary w-[3.19rem] h-[3.19rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                      <img
                        className="relative w-[2.06rem] h-[2.06rem]"
                        alt=""
                        src="/svg/vector21.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                      <div className="relative font-semibold">Phone</div>
                      <div className="relative text-[1rem] text-gray-50">
                        +(0000) 123 456789
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[94.5rem] h-[30rem] overflow-hidden shrink-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221064.84269118926!2d-90.04737444823233!3d30.032893740892582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sen!2sin!4v1689183731155!5m2!1sen!2sin"
            width="1620"
            height="475"
            loading="lazy"
          ></iframe>
        </div>
      </RootLayout>
    </div>
  );
}

export default Contact;
