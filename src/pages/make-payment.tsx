import Link from "next/link";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const makePayment = () => {
  const [ingredient, setIngredient] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <section>
      <div className="flex items-center justify-between py-4 px-32">
        <Link href="/">
          <img
            src="https://i.ibb.co/NrGXcWy/image.png"
            className="w-24"
            alt=""
          />
        </Link>
        <button className="btn rounded-full btn-sm">Save & Exit</button>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[95vh]">
        <div className="w-8/12">
          <h2 className="text-5xl font-semibold">How would you like to pay?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore.
          </p>
          <div className="card w-6/12 mt-10 mb-6 lg:card-side bg-base-100 shadow">
            <figure>
              <img
                src="https://i.ibb.co/B3mL5G7/image.png"
                className="ml-2 rounded-md w-36"
                alt="Album"
              />
            </figure>
            <div className="p-4">
              <h2 className="card-title">Billing Details</h2>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p>$75 x 7 nights</p>
                  </div>
                  <div>
                    <p>$525</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p>Cleaning fees</p>
                  </div>
                  <div>
                    <p>$20</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p>Weekly discount</p>
                  </div>
                  <div>
                    <p className="text-[#10B981]">-$28</p>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-start">
                <button className="btn rounded-full btn-xs mt-2">
                  Show More
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <img
              src="https://i.ibb.co/Cvq4Z73/image.png"
              alt=""
              className="w-9"
            />
            <p className="ml-3 text-tiny">
              We protect your payment information using encryption to provide
              bank-level security.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Debit/Credit Card</p>
              </div>
              <div>
                <p
                  onClick={() => setVisible(true)}
                  className="flex cursor-pointer items-center text-purple text-lg font-semibold"
                >
                  Add New Card{" "}
                  <span className="text-lg ml-1 font-semibold">
                    {" "}
                    <AiOutlinePlus />{" "}
                  </span>{" "}
                </p>
                <Dialog
                  header="Add New Card"
                  visible={visible}
                  onHide={() => setVisible(false)}
                  style={{ width: "30vw" }}
                  breakpoints={{ "960px": "75vw", "641px": "100vw" }}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://i.ibb.co/mDQMSsH/image.png"
                        className="w-20"
                        alt=""
                      />
                      <img
                        src="https://i.ibb.co/g4jwDSc/image.png"
                        className="w-20"
                        alt=""
                      />
                      <img
                        src="https://i.ibb.co/d2JB3Sf/image.png"
                        className="w-20"
                        alt=""
                      />
                    </div>
                    <div className="mt-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="nameOnCard" className="font-medium">
                            Name on Card
                          </label>
                          <InputText
                            id="nameOnCard"
                            placeholder="eg.-John Due"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="expiry" className="font-medium">
                            Expiry
                          </label>
                          <InputText id="expiry" placeholder="06/2028" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="nameOnCard" className="font-medium">
                            Card Number
                          </label>
                          <InputText
                            id="nameOnCard"
                            placeholder="1234 1234 1234 1234"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="expiry" className="font-medium">
                            CVV
                          </label>
                          <InputText id="expiry" placeholder="***" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center my-4">
                      <img
                        src="https://i.ibb.co/Cvq4Z73/image.png"
                        alt=""
                        className="w-9"
                      />
                      <p className="ml-3 text-tiny">
                        We protect your payment information using encryption to
                        provide bank-level security.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="btn rounded-full ">Cancel</button>
                      <button className="btn !bg-purple !text-white rounded-full">
                        Add New Card
                      </button>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-11">
                <div className="">
                  <label htmlFor="card1" className="ml-2 flex items-center">
                    <img
                      src="https://i.ibb.co/zrhvJzL/image.png"
                      alt=""
                      className="w-7"
                    />
                    <span className="text-sm font-semibold ml-3">
                      **** **** **** 2930
                    </span>
                  </label>
                </div>
                <div>
                  <RadioButton
                    inputId="card1"
                    name="card1"
                    value="card1"
                    onChange={(e: RadioButtonChangeEvent) =>
                      setIngredient(e.value)
                    }
                    checked={ingredient === "card1"}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-8">
                <div className="">
                  <label htmlFor="card2" className="ml-2 flex items-center">
                    <img
                      src="https://i.ibb.co/7C9L6SX/image.png"
                      alt=""
                      className="w-7"
                    />
                    <span className="text-sm font-semibold ml-3">
                      **** **** **** 3423
                    </span>
                  </label>
                </div>
                <div>
                  <RadioButton
                    inputId="card2"
                    name="card2"
                    value="card2"
                    onChange={(e: RadioButtonChangeEvent) =>
                      setIngredient(e.value)
                    }
                    checked={ingredient === "card2"}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="text-lg font-semibold mb-7">Payment Methods</p>
                <div className="flex items-center justify-between mb-11">
                  <div className="">
                    <label
                      htmlFor="googlePay"
                      className="ml-2 flex items-center"
                    >
                      <img
                        src="https://i.ibb.co/w79kxvn/image.png"
                        alt=""
                        className="w-7"
                      />
                      <span className="text-sm font-semibold ml-3">
                        Google Pay
                      </span>
                    </label>
                  </div>
                  <div>
                    <RadioButton
                      inputId="googlePay"
                      name="googlePay"
                      value="googlePay"
                      onChange={(e: RadioButtonChangeEvent) =>
                        setIngredient(e.value)
                      }
                      checked={ingredient === "googlePay"}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-8">
                  <div className="">
                    <label htmlFor="payPal" className="ml-2 flex items-center">
                      <img
                        src="https://i.ibb.co/v3Qf7tY/image.png"
                        alt=""
                        className="w-7"
                      />
                      <span className="text-sm font-semibold ml-3">
                        Pay Pal
                      </span>
                    </label>
                  </div>
                  <div>
                    <RadioButton
                      inputId="payPal"
                      name="payPal"
                      value="payPal"
                      onChange={(e: RadioButtonChangeEvent) =>
                        setIngredient(e.value)
                      }
                      checked={ingredient === "payPal"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-4 px-32 bg-[#FCFCFD]">
        <button className="btn rounded-full btn-sm">Back</button>
        <button className="btn !bg-purple btn-sm !text-white rounded-full">
          Pay $72.00
        </button>
      </div>
    </section>
  );
};

export default makePayment;
