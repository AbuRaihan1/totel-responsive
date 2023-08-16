import RootLayout from "@/UI/RootLayout/RootLayout";
import { useUploadImages } from "@/hooks/useUploadImages";
import Head from "next/head";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { Dialog } from "primereact/dialog";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { useState } from "react";
import { AiOutlineLike, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { TbShare3 } from "react-icons/tb";
import Swal from "sweetalert2";

const ClaimServiceFess = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [ingredient, setIngredient] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState(false);

  const { selectedImages, handleSelectedImage, handleRemoveImage } =
    useUploadImages();
  const handleSubmit = () => {
    setVisible(false);
    Swal.fire("Review Submitted", "", "success");
    setIsSubmit(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <section>
      <Head>
        <title>Claim Service Fess</title>
      </Head>
      <RootLayout>
        <div className="my-8 px-32 overflow-y-auto flex flex-col text-gray-700">
          {/* name and address start */}
          <div className="mt-8 flex items-center justify-between">
            <div>
              <h3 className="text-4xl font-bold">Cerulean Tower Tokyu Hotel</h3>
              <p className="font-medium text-gray-50">
                26-1 Sakuragaokacho, Shibuya City, Tokyo 150-8512, Japan
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="border border-gray-50 h-10 w-10 flex items-center justify-center rounded-full">
                {" "}
                <AiOutlineLike size={25} />{" "}
              </p>
              <p className="border border-gray-50 h-10 w-10 flex items-center justify-center rounded-full">
                {" "}
                <TbShare3 size={25} />{" "}
              </p>
            </div>
          </div>
          {/* name and address end */}

          {/* images grid start */}
          <div className="mt-8">
            <div className="flex gap-5">
              <img
                src="https://i.ibb.co/h94r75j/image.png"
                alt=""
                className="w-6/12"
              />
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="https://i.ibb.co/LxNTXZ2/image.png"
                  className=""
                  alt=""
                />
                <img
                  src="https://i.ibb.co/K6tRrxN/image.png"
                  className=""
                  alt=""
                />
                <div className="col-span-2 mt-5">
                  <img src="https://i.ibb.co/MhryDnT/image.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* images grid end */}

          {/* host and room details start */}
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="col-span-2">
              {/* image and name with the view profile btn start */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex">
                    <img
                      src="https://i.ibb.co/k2nyZrJ/image.png"
                      alt=""
                      className="w-16 mr-4"
                    />
                    <div>
                      <div className="flex items-center">
                        <img
                          src="https://i.ibb.co/0mjD2gY/image.png"
                          alt=""
                          className="mr-1 w-4"
                        />
                        <p>Identity verified</p>
                      </div>
                      <h3 className="text-2xl font-medium">Hosted by Ghazal</h3>
                    </div>
                  </div>
                </div>
                <button className="btn rounded-full">View Profile</button>
              </div>
              {/* image and name with the view profile btn end */}

              <div className="mt-4 flex items-center">
                <img
                  src="https://i.ibb.co/Fbtd42b/image.png"
                  alt=""
                  className="w-6 mr-4"
                />
                <p>
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </p>
              </div>

              {/* room details start */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Available rooms</h3>
                <p className="mt-6 text-base font-medium mb-2">
                  2 of 4 Rooms Available
                </p>
                <div className="grid grid-cols-2 h-2">
                  <div className="bg-purple rounded-s-md"></div>
                </div>
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold">Description</h2>
                  <p className="mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className="btn rounded-xl mt-4 mb-8">See More</button>
                  {/* amenities start */}
                  <p className="text-2xl font-semibold">Offered Amenities</p>
                  <div className="grid grid-cols-2 mt-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/SKBFKDQ/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Garden View</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/MskS3pD/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Free Wifi</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/RCpGVYm/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Free Washer</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/GkdbtCZ/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Air Conditioning</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/x6B8ZmW/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Refrigerator</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/QN9GxjJ/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Kitchen</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/MBgWq2D/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Pets Allowed</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/7CVDQcJ/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Dryer</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/NS91j5N/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Security cameras on property</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/T4k1pG5/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Bicycle</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn rounded-full mt-4">
                      Show more amenities
                    </button>
                  </div>
                  {/* amenities end */}
                </div>
              </div>
              {/* room details end */}
            </div>
            <div className="">
              <div className="card rounded-3xl bg-base-100 shadow-xl border border-[#DAE0E6]">
                <div className="card-body">
                  <h3 className="text-2xl font-semibold">
                    $75 <span className="font-normal"> / night</span>{" "}
                  </h3>
                  <div className="mt-5">
                    <div className="btn-group">
                      <button className="btn btn-sm border border-card rounded-s-full btn-active">
                        Hour
                      </button>
                      <button className="btn btn-sm border-card bg-purple text-white hover:text-black border  rounded-e-full">
                        Day
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-5">
                      <div>
                        <label className="mb-2" htmlFor="checkIn">
                          Check-In
                        </label>
                        <Calendar
                          inputId="checkIn"
                          value={checkInDate}
                          onChange={(e: CalendarChangeEvent) =>
                            setCheckInDate(e!.value as Date)
                          }
                          showIcon
                        />
                      </div>
                      <div>
                        <label className="mb-2" htmlFor="checkOut">
                          Check-Out
                        </label>
                        <Calendar
                          inputId="checkOut"
                          value={checkOutDate}
                          onChange={(e: CalendarChangeEvent) =>
                            setCheckOutDate(e!.value as Date)
                          }
                          showIcon
                        />
                      </div>
                    </div>
                    <div className="my-5 flex items-center justify-between">
                      <div>
                        <img
                          src="https://i.ibb.co/kGx7RSB/image.png"
                          className="w-6"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="underline">Clear dates</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-tiny font-medium">Guests</p>
                      <select className="select border border-card focus:outline-none w-full rounded-full mt-3 mb-4  max-w-xs">
                        <option disabled selected>
                          Guests
                        </option>
                        <option>1 guests</option>
                        <option>2 guests</option>
                        <option>3 guests</option>
                        <option>1 guests, 1 infant, 1 pet</option>
                        <option>2 guests, 1 infant, 1 pet</option>
                        <option>3 guests, 1 infant, 1 pet</option>
                      </select>
                    </div>
                    <div>
                      <button
                        onClick={() => setVisible(true)}
                        className="btn btn-block border-card rounded-full mb-4"
                      >
                        {isSubmit ? "Edit Review" : "Submit Review"}
                      </button>
                      <div className="card flex justify-content-center">
                        <Dialog
                          header="Claim Cleaning Fees"
                          visible={visible}
                          style={{ width: "35vw" }}
                          onHide={() => setVisible(false)}
                        >
                          <div className="border border-light-primary my-4"></div>
                          <p className="m-0">
                            This is not sure by uploading the pictures, you will
                            claim the cleaning service fees. It will take up-to
                            14 days to confirm claim.
                          </p>
                          <div>
                            <label
                              htmlFor="selectImage"
                              className="flex items-center justify-center h-full flex-col-reverse cursor-pointer p-7 border-2 border-gray-50 border-dashed mt-4 rounded-lg"
                            >
                              <p className="text-tiny font-medium mb-1">
                                <span className="text-purple">
                                  Browse Files
                                </span>{" "}
                                from your Computer
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
                              {selectedImages
                                .slice(0, 2)
                                .map((imageData, index) => (
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
                            <div className="grid grid-cols-3 gap-4 my-4">
                              {selectedImages
                                .slice(2, 5)
                                .map((imageData, index) => (
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
                              {selectedImages
                                .slice(5, 8)
                                .map((imageData, index) => (
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
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-lg font-semibold">
                                Debit/Credit Card
                              </p>
                            </div>
                            <div>
                              <p className="flex items-center text-purple text-lg font-semibold">
                                Add New Card{" "}
                                <span className="text-lg ml-1 font-semibold">
                                  {" "}
                                  <AiOutlinePlus />{" "}
                                </span>{" "}
                              </p>
                            </div>
                          </div>
                          <div className="mt-7">
                            <div className="flex items-center justify-between mb-11">
                              <div className="">
                                <label
                                  htmlFor="card1"
                                  className="ml-2 flex items-center"
                                >
                                  <img
                                    src="https://i.ibb.co/zrhvJzL/image.png"
                                    alt=""
                                    className="w-7"
                                  />
                                  <span className="text-md font-semibold ml-3">
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
                                <label
                                  htmlFor="card2"
                                  className="ml-2 flex items-center"
                                >
                                  <img
                                    src="https://i.ibb.co/7C9L6SX/image.png"
                                    alt=""
                                    className="w-7"
                                  />
                                  <span className="text-md font-semibold ml-3">
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
                              <p className="text-lg font-semibold mb-7">
                                Payment Methods
                              </p>
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
                                    <span className="text-md font-semibold ml-3">
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
                                  <label
                                    htmlFor="payPal"
                                    className="ml-2 flex items-center"
                                  >
                                    <img
                                      src="https://i.ibb.co/v3Qf7tY/image.png"
                                      alt=""
                                      className="w-7"
                                    />
                                    <span className="text-md font-semibold ml-3">
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
                              <div className="flex items-center">
                                <img
                                  src="https://i.ibb.co/Cvq4Z73/image.png"
                                  alt=""
                                  className="w-9"
                                />
                                <p className="ml-3 text-tiny">
                                  We protect your payment information using
                                  encryption to provide bank-level security.
                                </p>
                              </div>
                            </div>
                            <div className="border border-light-primary my-4"></div>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={handleCancel}
                                className="btn btn-block rounded-full"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={handleSubmit}
                                className="btn btn-block rounded-full bg-purple  hover:bg-purple hover:outline-none text-white"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </Dialog>
                      </div>
                      <button className="btn btn-block border-card rounded-full">
                        Claim Cleaning Fees
                      </button>
                    </div>
                    <p className="text-gray-50 text-center text-tiny mt-4">
                      You will not be charged yet
                    </p>
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
                    <div className="border border-light-primary my-4"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">Total</p>
                      </div>
                      <div>
                        <p className="font-semibold">$513</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <img
                  src="https://i.ibb.co/B3gh62p/image.png"
                  className="mr-2 w-5"
                  alt=""
                />
                <p>Report this listing</p>
              </div>
            </div>
            {/* map start */}
            <div>
              <p className="my-8 text-2xl font-semibold">Where you will be</p>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221064.84269118926!2d-90.04737444823233!3d30.032893740892582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sen!2sin!4v1689183731155!5m2!1sen!2sin"
                  width="1650"
                  height="475"
                  loading="lazy"
                  style={{ borderRadius: "20px" }}
                ></iframe>
              </div>
              <p className="mt-6 mb-4">
                Very dynamic and appreciated district by the people of Bordeaux
                thanks to rue St James and place Fernand Lafargue. Home to many
                historical monuments such as the Grosse Cloche, the Porte de
                Bourgogne and the Porte Cailhau, and cultural sites such as the
                Aquitaine Museum.
              </p>
              <button className="btn rounded-xl mt-4 mb-8">See More</button>
            </div>
            {/* map end */}
          </div>
          {/* host and room details end */}
          {/* reviews start */}
          <div className="mt-8">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/9wjRYgq/image.png"
                className="w-6"
                alt=""
              />
              <div className="flex items-center">
                <h2 className="ml-1 font-bold text-2xl">5.0</h2>
                <img
                  src="https://i.ibb.co/RCFNTzy/image.png"
                  className="w-1 mx-2"
                  alt=""
                />
                <p className="font-medium">12 Reviews</p>
              </div>
            </div>
            <div className="my-8 grid grid-cols-3 gap-8">
              <div className="card">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/rmbSbrq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                </div>
                <div className="mt-6">
                  <p className="mb-6">
                    “Absolutely incredible. This place was definitely a dream!
                    From the entryway, to each floor... stunning”
                  </p>
                  <div>
                    <div className="flex">
                      <img
                        src="https://i.ibb.co/WPW29T8/image.png"
                        alt=""
                        className="w-12 mr-4"
                      />
                      <div>
                        <div className="">
                          <h3 className="font-medium">Dave Jones</h3>
                          <p className="text-[#5F6D7E]">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/rmbSbrq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                </div>
                <div className="mt-6">
                  <p className="mb-6">
                    “Absolutely incredible. This place was definitely a dream!
                    From the entryway, to each floor... stunning”
                  </p>
                  <div>
                    <div className="flex">
                      <img
                        src="https://i.ibb.co/WPW29T8/image.png"
                        alt=""
                        className="w-12 mr-4"
                      />
                      <div>
                        <div className="">
                          <h3 className="font-medium">Dave Jones</h3>
                          <p className="text-[#5F6D7E]">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/rmbSbrq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                </div>
                <div className="mt-6">
                  <p className="mb-6">
                    “Absolutely incredible. This place was definitely a dream!
                    From the entryway, to each floor... stunning”
                  </p>
                  <div>
                    <div className="flex">
                      <img
                        src="https://i.ibb.co/WPW29T8/image.png"
                        alt=""
                        className="w-12 mr-4"
                      />
                      <div>
                        <div className="">
                          <h3 className="font-medium">Dave Jones</h3>
                          <p className="text-[#5F6D7E]">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="btn rounded-full">Show more reviews</button>
            </div>
          </div>
          {/* reviews end */}
        </div>
        {/* near by start */}
        <div className="bg-[#F9F9F9] py-16 px-32">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h1 className="text-4xl font-bold">Nearby hotels</h1>
              <p>
                You can find places and stay with hotels and home-stays ranked
                by travellers. What fun could we have more than having roommate
                with similar interest.
              </p>
            </div>
            <div>
              <button className="btn">Show More</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src="https://i.ibb.co/029MpwB/image.png" alt="" />
              </figure>
              <div className="card-body bg-white rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">Hotel Assenzio</h2>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/MPsBd9T/image.png"
                      className="w-5 mr-1"
                      alt=""
                    />
                    <p>4.2</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <h4 className="text-tiny font-medium">25 Apr 2022</h4>
                  <span className="mx-1 text-tiny font-medium"> - </span>
                  <h4 className="text-tiny font-medium">28 Apr 2022</h4>
                </div>
                <p className="text-tiny text-gray-50">
                  But happy to move in with more than that, I am super easy
                  going and tidy.
                </p>
                <h3 className="font-bold">$32 / Day</h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src="https://i.ibb.co/WxspM9T/image.png" alt="" />
              </figure>
              <div className="card-body bg-white rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">Hotel Assenzio</h2>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/MPsBd9T/image.png"
                      className="w-5 mr-1"
                      alt=""
                    />
                    <p>4.2</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <h4 className="text-tiny font-medium">25 Apr 2022</h4>
                  <span className="mx-1 text-tiny font-medium"> - </span>
                  <h4 className="text-tiny font-medium">28 Apr 2022</h4>
                </div>
                <p className="text-tiny text-gray-50">
                  But happy to move in with more than that, I am super easy
                  going and tidy.
                </p>
                <h3 className="font-bold">$32 / Day</h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src="https://i.ibb.co/6FPkZV3/image.png" alt="" />
              </figure>
              <div className="card-body bg-white rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">Hotel Assenzio</h2>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/MPsBd9T/image.png"
                      className="w-5 mr-1"
                      alt=""
                    />
                    <p>4.2</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <h4 className="text-tiny font-medium">25 Apr 2022</h4>
                  <span className="mx-1 text-tiny font-medium"> - </span>
                  <h4 className="text-tiny font-medium">28 Apr 2022</h4>
                </div>
                <p className="text-tiny text-gray-50">
                  But happy to move in with more than that, I am super easy
                  going and tidy.
                </p>
                <h3 className="font-bold">$32 / Day</h3>
              </div>
            </div>
          </div>
        </div>
        {/* near by end */}
      </RootLayout>
    </section>
  );
};

export default ClaimServiceFess;
