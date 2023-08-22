import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

import everyone from "/public/Images/everyone.png";
import mensmile from "/public/Images/men-smile.png";
import kukraHairGirl from "/public/Images/kukra-hair-girl.png";
const index = () => {
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
  return (
    <div>
      <Container>
        <div>
          <h2 className="text-[52px] font-[600] font-inter">
            I am looking for
          </h2>
          <p className="text-[18px] font-[400]">
            Lorem ipsum dolor amet, consectetur adipiscing elit
          </p>
        </div>

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
      </Container>
    </div>
  );
};

export default index;
