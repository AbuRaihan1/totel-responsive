import Container from "@/components/Container";
import Image from "next/image";

import everyone from "/public/Images/everyone.png";
import kukraHairGirl from "/public/Images/kukra-hair-girl.png";
import mensmile from "/public/Images/men-smile.png";
import { useState } from "react";
const index = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
  };

  const people = [
    {
      tag: "Everyone",
      img: everyone,
    },
    {
      tag: "Men",
      img: mensmile,
    },
    {
      tag: "Women",
      img: kukraHairGirl,
    },
  ];

  const buttonData = [
    { name: "Bristol", label: "Bristol" },
    { name: "London", label: "London" },
    { name: "Virginia", label: "Virginia" },
    { name: "Los Angeles", label: "Los Angeles" },
    { name: "New York", label: "New York" },
    { name: "Michigan", label: "Michigan" },
    { name: "San Francisco", label: "San Francisco" },
    { name: "Seattle", label: "Seattle" },
  ];

  const buttonStyle = {
    color: "#4F4F4F",
    fontFamily: "SF Pro Text, sans-serif",
    fontSize: "20px",
    fontWeight: 600,
    borderRadius: "200px",
    padding: "13px 36px",
    transition: "background-color 0.3s ease",
    background: "#F5F5FF",
  };

  const selectedStyle = {
    fontFamily: "SF Pro Text, sans-serif",
    fontSize: "20px",
    fontWeight: 600,
    borderRadius: "200px",
    padding: "13px 36px",
    transition: "background-color 0.3s ease",
    background: "#574EFA",
    color: "white",
  };
  return (
    <div>
      <Container>
        <div className="py-5 pb-12">
          {/* i'm looking for, title */}
          <div>
            <h2 className="text-[52px] font-[600] font-inter">
              I am looking for
            </h2>
            <p className="text-[18px] font-[400]">
              Lorem ipsum dolor amet, consectetur adipiscing elit
            </p>
          </div>
          {/* i am looking for, images */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-14">
            {people?.map((person, idx) => {
              return (
                <div className="relative" key={idx}>
                  <Image
                    width={400}
                    height={0}
                    src={person.img}
                    alt="amar"
                    className="w-full h-[200px] rounded-3xl"
                  />
                  <p className="text-white text-[20px] absolute bottom-5 left-6">
                    {person.tag}
                  </p>
                </div>
              );
            })}
          </div>

          {/* i am looking for destination */}
          <div>
            <h2 className="font-sans font-[700] mt-14 text-3xl">
              Select your destination
            </h2>
            <p className="text-[#B0B0B0] text-[20px] font-medium">
              Suggested destinations
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-9">
            {/* <button style={buttonStyle}>Bristol</button>
          <button style={buttonStyle}>London</button>
          <button style={buttonStyle}>New York</button>
          <button style={buttonStyle}>Los Angeles</button>
          <button style={buttonStyle}>San Francisco</button>
          <button style={buttonStyle}>Seattle</button> */}

            {buttonData.map((button) => (
              <button
                key={button.name}
                style={
                  selectedButton === button.name
                    ? { ...selectedStyle }
                    : buttonStyle
                }
                onClick={() => handleButtonClick(button.name)}
              >
                {button.label}
              </button>
            ))}
          </div>

          <textarea
            className="h-[120px] bg-[#F8F8FF] lg:w-[895px] w-full mt-9 px-8 py-6 outline-none focus:border-purple border border-card rounded"
            placeholder="Enter your destination"
          ></textarea>

          <div className="flex items-end justify-end">
            <button className="bg-[#574EFA] rounded-full px-9 py-3 text-white text-[20px] font-semibold mt-4">
              Continue
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
