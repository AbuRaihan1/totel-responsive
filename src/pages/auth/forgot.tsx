import React, { useState } from "react";
import Head from "next/head";

import Logo from "@/components/navbar/Logo";
import styles from "@/styles/login.module.css";

import Input from "@/UI/Input/Input";

export default function Login() {
  const [authMethod, setAuthMethod] = useState("custom_phone");
  const [resetCredentials, setResetCredentials] = useState({
    mobile: "",
    email: "",
    method: authMethod,
  });

  return (
    <div>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <div className="flex  justify-center md:items-start items-center flex-col md:flex-row md:p-0 px-5  w-1512 h-1117.09 ">
        <div className={styles.left}>
          <div className={styles.lefttext1}>
            Shared living space,
            <br /> find places and Join
            <br /> with them today.
          </div>
          <div className={styles.lefttext2}>
            What fun could we have more than having roommate
            <br /> with similar interest. You can find places and stay
            <br /> with hotels and home-stays ranked by travellers.
          </div>
        </div>
        <div className={styles.card}>
          <div className="flex flex-col justify-center bg-gray-100 sm:px-6 lg:px-8">
            <div>
              <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <div className="align-middle sm:mx-auto sm:w-full sm:max-w-md ">
                      <div className="">
                        <Logo />
                      </div>

                      <div>
                        <h2 className="mt-6 text-2xl font-bold text-gray-900">
                          Forgot password?
                        </h2>
                      </div>
                    </div>
                    <div className="space-y-3 w-full">
                      {authMethod === "custom_phone" ? (
                        <Input
                          id="digit"
                          name="Mobile Number"
                          onChange={(e) =>
                            setResetCredentials({
                              ...resetCredentials,
                              mobile: e.target.value,
                            })
                          }
                          type="text"
                          value={resetCredentials.mobile}
                          placeholder="Enter your mobile number"
                        />
                      ) : (
                        <Input
                          id="email"
                          name="Email"
                          onChange={(e) =>
                            setResetCredentials({
                              ...resetCredentials,
                              email: e.target.value,
                            })
                          }
                          type="text"
                          value={resetCredentials.email}
                          placeholder="Enter your email address"
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="auth-button bg-purple">
                      {authMethod === "custom_phone"
                        ? "Send OTP"
                        : "Send Email"}
                    </button>

                    {authMethod === "custom_phone" ? (
                      <h5
                        className="text-center text-purple mt-3 text-[0.9rem] cursor-pointer"
                        onClick={() => setAuthMethod("custom_email")}
                      >
                        Verify using Email
                      </h5>
                    ) : (
                      <h5
                        className="text-center text-purple mt-3 text-[0.9rem] cursor-pointer"
                        onClick={() => setAuthMethod("custom_phone")}
                      >
                        Verify using Mobile
                      </h5>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
