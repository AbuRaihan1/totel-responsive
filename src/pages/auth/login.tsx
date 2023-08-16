import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";

import Logo from "@/components/navbar/Logo";
import styles from "@/styles/login.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import Input from "@/UI/Input/Input";
import { useRouter } from "next/router";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Toast } from "primereact/toast";
import OvalSpinner from "@/UI/Spinner/OvalSpinner";


type LoginUser = {
  mobile?: string;
  password: string;
  email?: string;
  rememberMe: boolean;
};

export default function Login() {
  const [authMethod, setAuthMethod] = useState("custom_phone");
  const router = useRouter();
  const toast = useRef<Toast>(null);
  const [loginUser, setLoginUser] = useState<LoginUser>({
    mobile: "",
    password: "",
    email: "",
    rememberMe: false,
  });

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (formData:LoginUser) =>
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
          ...formData,
          method: authMethod,
        })
        .then((res) => res.data),
    onSuccess: (data) => {
      if (data.status) {
        toast.current?.show({
          severity: "success",
          summary: "Logged in",
          detail: "You are logged in",
          life: 2000,
        });

        localStorage.setItem("auth-token", data.data.token);
        setTimeout(()=>{
          router.push("/");

        },1000)
      }
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

  const checkDisabled = (user: LoginUser) => {
    if (isLoading) return true;
    if (authMethod === "custom_phone") {
      const newObj = { ...user };
      delete newObj.email;
      return Object.values(newObj).some((val) => val === "" || val === undefined);
    } else {
      const newObj = { ...user };
      delete newObj.mobile;
      return Object.values(newObj).some((val) => val === "");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(loginUser);
  };

  const googleLogin = () => {
    window.open(process.env.NEXT_PUBLIC_GOOGLE_AUTH, "_self");
  };

  const facebookLogin = () => {
    window.open(process.env.NEXT_PUBLIC_FACEBOOK_AUTH, "_self");
  };

  return (
    <div>
      <Head>
        <title>Totel - Login</title>
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
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <div className="align-middle sm:mx-auto sm:w-full sm:max-w-md ">
                      <div className="">
                        <Logo />
                      </div>

                      <div>
                        <h2 className="mt-6 text-2xl font-bold text-gray-900">
                          Welcome Back!
                        </h2>

                        <div className="flex gap-1 mb-3 text-sm">
                          <div>Dont have an account?</div>
                          <Link
                            href="/auth/signup"
                            className="ml-2 text-purple"
                          >
                            Create one
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {authMethod === "custom_phone" ? (
                        <div className="flex flex-col gap-2">
                          <label className="text-xs">Phone Number</label>
                          <PhoneInput
                            placeholder="Enter phone number"
                            value={loginUser.mobile as string}
                            onChange={(e) =>
                              setLoginUser({
                                ...loginUser,
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
                            setLoginUser({
                              ...loginUser,
                              email: e.target.value,
                            })
                          }
                          type="text"
                          value={loginUser.email as string}
                          placeholder="Enter your email address"
                        />
                      )}
                      <div className="mt-1">
                        <Input
                          id="password"
                          name="Password"
                          onChange={(e) =>
                            setLoginUser({
                              ...loginUser,
                              password: e.target.value,
                            })
                          }
                          type="password"
                          value={loginUser.password}
                          placeholder="********"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-blue-500"
                        checked={loginUser.rememberMe}
                        onChange={(e) =>
                          setLoginUser({
                            ...loginUser,
                            rememberMe: e.target.checked,
                          })
                        }
                      />
                      <label className="block ml-2 text-xs text-gray-900">
                        Keep me logged in
                      </label>
                    </div>

                    <div className="ml-2 cursor-pointer text-xs">
                      <p
                        className="font-medium text-purple-600 hover:text-purple-500"
                        onClick={() => router.push("/auth/forgot")}
                      >
                        Forgot your password?
                      </p>
                    </div>
                  </div>
                  {/* Other Auth Methods */}
                  <div>
                    <button
                    type="submit"
                      className="auth-button bg-purple disabled:bg-gray-50/30"
                      disabled={checkDisabled(loginUser)}
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
                        Login with Email
                      </h5>
                    ) : (
                      <h5
                        className="text-center text-purple mt-3 text-[0.9rem] cursor-pointer"
                        onClick={() => setAuthMethod("custom_phone")}
                      >
                        Login with Phone
                      </h5>
                    )}

                    <h5 className="flex justify-center my-3">or</h5>
                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={facebookLogin}
                        className="auth-button bg-black"
                      >
                        <div className={styles.apple}>
                          <AiFillApple size={25} />
                          <h6>Continue with Apple</h6>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={googleLogin}
                        className="auth-button text-black bg-white"
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
          <Toast ref={toast} />
  
        </div>
      </div>
    </div>
  );
}
