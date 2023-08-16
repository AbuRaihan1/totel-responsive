import Head from "next/head";
import Link from "next/link";
import React, { useRef, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import styles from "@/styles/login.module.css";
import Input from "@/UI/Input/Input";
import { Toast } from "primereact/toast";
import OvalSpinner from "@/UI/Spinner/OvalSpinner";
import Image from "next/image";
import EnterOTPModal from "@/UI/Modal/EnterOTPModal";

type AuthenticateUser = {
  mobile?: string;
  first_name: string;
  email?: string;
  last_name: string;
  password: string;
  dob: Date;
  gender: string;
};

export default function Signup() {
  const [authMethod, setAuthMethod] = useState("custom_phone");
  
  const toast = useRef<Toast>(null);
  const [authenticateUser, setAuthenticateUser] = useState<AuthenticateUser>({
    mobile: "",
    first_name: "",
    email: "",
    last_name: "",
    password: "",
    dob: new Date(),
    gender: "",
  });

  const [otpModal, setOtpModal] = useState(false);

  const genderOptions = [
    {
      name: "Male",
      value: "male",
    },
    {
      name: "Female",
      value: "female",
    },
    {
      name: "Other",
      value: "other",
    },
  ];

  const { mutate: submitMutate, isLoading } = useMutation({
    mutationFn: (formData: AuthenticateUser) => {
      return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, {
        ...formData,
        method: authMethod,
      });
    },
    onSuccess: (data) => {
      if (data.data.data === "OTP sent") {
        setOtpModal(true);
      }
      toast.current?.show({
        severity: "success",
        summary: data.data.data,
        detail: data.data.data,
        life: 2000,
      });
    },
    onError: (error: any) => {
      toast.current?.show({
        severity: "error",
        summary: "Error!",
        detail: error.response.data.data.error,
        life: 2000,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (authenticateUser.first_name.length < 3) {
      toast.current?.show({
        severity: "error",
        summary: "Error!",
        detail: "First name should be atleast 3 characters",
        life: 2000,
      });
      return;
    }
    if (authenticateUser.last_name.length < 3) {
      toast.current?.show({
        severity: "error",
        summary: "Error!",
        detail: "Last name should be atleast 3 characters",
        life: 2000,
      });
      return;
    }

    submitMutate(authenticateUser);
  };

  const googleLogin = () => {
    window.open(process.env.NEXT_PUBLIC_GOOGLE_AUTH, "_self");
  };

  const facebookLogin = () => {
    window.open(process.env.NEXT_PUBLIC_FACEBOOK_AUTH, "_self");
  };

  const checkDisabled = (user: AuthenticateUser) => {
    if (isLoading) return true;
    if (authMethod === "custom_phone") {
      const newObj = { ...user };
      delete newObj.email;
      return Object.values(newObj).some(
        (val) => val === "" || val === undefined
      );
    } else {
      const newObj = { ...user };
      delete newObj.mobile;
      return Object.values(newObj).some((val) => val === "");
    }
  };

  return (
    <div>
      <Head>
        <title>Totel - Signup</title>
      </Head>
      <div className="flex gap-10 justify-center md:items-start items-center flex-col md:flex-row md:p-0 px-5  w-1512 h-1117.09 ">
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
          <div className="flex flex-col justify-center w-full  sm:px-6 lg:px-8">
            <div className="sm:mx-auto  sm:max-w-md">
              <div className="px-8 py-8 w-full  shadow sm:rounded-lg sm:px-10">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <div className="align-middle sm:mx-auto sm:w-full sm:max-w-md ">
                      <div className="">
                        <Image
                          className="cursor-pointer md:block"
                          src="/Images/totel.png"
                          height="100"
                          width="100"
                          alt="Logo"
                        />
                      </div>

                      <div>
                        {authMethod === "custom_phone" ? (
                          <h2 className="mt-6 text-2xl font-bold text-gray-900">
                            Let's Start with Phone
                          </h2>
                        ) : (
                          <h2 className="mt-6 text-2xl font-bold text-gray-900">
                            Let's Start with Email
                          </h2>
                        )}
                        <div className="flex gap-1 mb-3 text-sm">
                          <div>Already have an account?</div>
                          <Link
                            href="/auth/login"
                            className="ml-2 text-purple  "
                          >
                            Signin
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 w-full">
                      <div className="mt-1">
                        {authMethod === "custom_phone" ? (
                          <div className="flex flex-col gap-2">
                            <label className="text-xs">Phone Number</label>
                            <PhoneInput
                              placeholder="Enter phone number"
                              value={authenticateUser.mobile as string}
                              onChange={(e) =>
                                setAuthenticateUser({
                                  ...authenticateUser,
                                  mobile: e as string,
                                })
                              }
                            />
                          </div>
                        ) : (
                          <Input
                            id="email"
                            name="Email"
                            onChange={(e) =>
                              setAuthenticateUser({
                                ...authenticateUser,
                                email: e.target.value,
                              })
                            }
                            type="text"
                            value={authenticateUser.email as string}
                            placeholder="Enter your email address"
                          />
                        )}
                      </div>
                      <div className="mt-1">
                        <Input
                          value={authenticateUser.first_name}
                          id="first_name"
                          name="First Name"
                          onChange={(e) =>
                            setAuthenticateUser({
                              ...authenticateUser,
                              first_name: e.target.value,
                            })
                          }
                          type="text"
                          placeholder="John"
                        />
                      </div>
                      <div className="mt-1">
                        <Input
                          value={authenticateUser.last_name}
                          id="last_name"
                          name="Last Name"
                          onChange={(e) =>
                            setAuthenticateUser({
                              ...authenticateUser,
                              last_name: e.target.value,
                            })
                          }
                          type="text"
                          placeholder="Doe"
                        />
                      </div>

                      <div className="card justify-content-center mt-1 flex flex-col gap-2">
                        <label htmlFor="cal_date" className="text-xs">
                          Date of Birth
                        </label>
                        <Calendar
                          value={authenticateUser.dob}
                          className="w-full"
                          id="cal_date"
                          minDate={new Date("1940-01-01")}
                          maxDate={new Date()}
                          onChange={(e) =>
                            setAuthenticateUser({
                              ...authenticateUser,
                              dob: e.value as Date,
                            })
                          }
                          dateFormat="yy-mm-dd"
                          showIcon
                        />
                      </div>

                      <div className="mt-1 flex flex-col gap-2">
                        <label htmlFor="gender" className="text-xs">
                          Gender
                        </label>
                        <Dropdown
                          value={authenticateUser.gender}
                          id="gender"
                          onChange={(e) =>
                            setAuthenticateUser({
                              ...authenticateUser,
                              gender: e.value,
                            })
                          }
                          options={genderOptions}
                          optionLabel="name"
                          placeholder="Select Gender"
                          className="w-full"
                        />
                      </div>
                      <div className="mt-1">
                        <Input
                          value={authenticateUser.password}
                          id="password"
                          name="Password"
                          onChange={(e) =>
                            setAuthenticateUser({
                              ...authenticateUser,
                              password: e.target.value,
                            })
                          }
                          type="password"
                          placeholder="********"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Other Auth Methods */}
                  <div>
                    <button
                      type="submit"
                      disabled={checkDisabled(authenticateUser)}
                      className="auth-button bg-purple disabled:bg-gray-50/30"
                    >
                      {isLoading ? (
                        <div className="space-x-2 flex items-center">
                          <OvalSpinner
                            color="#fff"
                            height={20}
                            width={30}
                            visible={isLoading}
                          />
                          <p className="font-semibold">Please wait...</p>
                        </div>
                      ) : (
                        "Continue"
                      )}
                    </button>

                    {authMethod === "custom_phone" ? (
                      <h5
                        className="text-center text-purple mt-3 text-[0.9rem] cursor-pointer"
                        onClick={() => setAuthMethod("custom_email")}
                      >
                        Signup with Email
                      </h5>
                    ) : (
                      <h5
                        className="text-center text-purple mt-3 text-[0.9rem] cursor-pointer"
                        onClick={() => setAuthMethod("custom_phone")}
                      >
                        Signup with Phone
                      </h5>
                    )}

                    <h5 className="flex justify-center my-3">or</h5>
                    <div className="space-y-2">
                      <button type="button" className="auth-button bg-black">
                        <div className={styles.apple}>
                          <AiFillApple size={25} />
                          <h6>Continue with Apple</h6>
                        </div>
                      </button>
                      <button
                        type="button"
                        className="auth-button text-black bg-white"
                        onClick={googleLogin}
                      >
                        <div className={styles.apple}>
                          <FcGoogle size={25} />
                          <h6>Continue with Google</h6>
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Toast ref={toast} />
        <EnterOTPModal
          visible={otpModal}
          setVisible={setOtpModal}
          mobile={authenticateUser.mobile}
        />
      </div>
    </div>
  );
}
