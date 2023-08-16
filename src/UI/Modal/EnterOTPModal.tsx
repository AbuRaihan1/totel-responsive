import React, { useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import OvalSpinner from "../Spinner/OvalSpinner";
import { Toast } from "primereact/toast";

interface EnterOTPModal {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  mobile?: string;
}

function EnterOTPModal({ visible, setVisible, mobile }: EnterOTPModal) {
  const [otp, setOtp] = useState<number>();
  const toast = useRef<Toast>(null);
  const [expireSession, setExpireSession] = useState(false);

  const { mutate: verifyOTP, isLoading } = useMutation({
    mutationFn: () =>
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-otp`, {
          otp: otp!.toString(),
        })
        .then((res) => res.data),
    onSuccess: (data) => {
      if (data.status) {
        toast.current?.show({
          severity: "success",
          summary: "Verified",
          detail: "Your phone is verified",
          life: 2000,
        });
        localStorage.setItem("auth-token", data.data.token);

        setTimeout(() => {
          setVisible(false);
          window.location.href = "/";
        }, 3000);
      }
    },

    onError: (error: any) => {
      setExpireSession(true);
      toast.current?.show({
        severity: "error",
        summary: "Error!",
        detail: error.response.data.data.error,
        life: 2000,
      });
    },
  });

  const { mutate: sendOTP, isLoading: isSending } = useMutation({
    mutationFn: () =>
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/send-otp`, {
          mobile: mobile,
        })
        .then((res) => res.data),
    onSuccess: (data) => {
      if (data.status) {
        toast.current?.show({
          severity: "success",
          summary: "Sent",
          detail: "OTP sent successfully",
          life: 2000,
        });
      }
    },
    onError: (error: any) => {
      setOtp(undefined);
      toast.current?.show({
        severity: "error",
        summary: "Error!",
        detail: "Your session has expired, please try again",
        life: 2000,
      });
    },
  });

  return (
    <Dialog
      visible={visible}
      header="Enter OTP"
      onHide={() => setVisible(false)}
      breakpoints={{ "960px": "75vw", "640px": "100vw" }}
      style={{ width: "34vw" }}
    >
      <div className="flex justify-center flex-col gap-2 items-center">
        <div className="flex flex-col gap-2 justify-center">
          <label
            htmlFor="number"
            className="text-gray-50 font-semibold text-sm"
          >
            Please verify your OTP
          </label>
          <InputNumber
            id="number"
            useGrouping={false}
            maxLength={6}
            className="rounded-full w-[23rem]"
            onChange={(e) => setOtp(e.value as number)}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center w-full items-center">
          <button
            disabled={
              isLoading || !otp || otp.toString().length < 5 || expireSession
            }
            className="w-96 mt-8  text-white rounded-full bg-black shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary disabled:bg-gray-50/30"
            onClick={() => verifyOTP()}
          >
            {isLoading ? (
              <div className="space-x-2 flex items-center">
                <OvalSpinner
                  color="#fff"
                  height={20}
                  width={30}
                  visible={isLoading}
                />
                <p className="font-semibold">Verifying...</p>
              </div>
            ) : (
              "Verify OTP"
            )}
          </button>

          {expireSession && (
            <button
              disabled={isSending || !mobile}
              className="w-96 mt-8  text-white rounded-full bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary disabled:bg-gray-50/30"
              onClick={() => {
                setExpireSession(false);
                sendOTP();
              }}
            >
              {isSending ? (
                <div className="space-x-2 flex items-center">
                  <OvalSpinner
                    color="#fff"
                    height={20}
                    width={30}
                    visible={isSending}
                  />
                  <p className="font-semibold">Sending...</p>
                </div>
              ) : (
                "Send again"
              )}
            </button>
          )}
        </div>
      </div>

      <Toast ref={toast} />
    </Dialog>
  );
}

export default EnterOTPModal;
