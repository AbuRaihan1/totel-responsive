import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from  "../cards/HotelCard"
import React from "react";
import styles from "./stays.module.css";
import Image from "next/image";
export default function Stays() {
  return (
    <div className="">
      <div className="my-6">
        <Carousel autoPlay className="gap-2 ">
          <div className="py-2">
            <div className="flex justify-center gap-3 mx-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex justify-center gap-3 mx-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex justify-center gap-3 mx-6">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div>
            <div className="flex justify-center gap-3 mx-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex justify-center gap-3 mx-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex justify-center gap-3 mx-6">
              <Card />
              <Card />
              <Card />
            </div>
          </div><div>
            <div className="flex justify-center gap-3 mx-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex justify-center gap-3 mx-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex justify-center gap-3 mx-6">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        Image will display here
      </div>
    </div>
  );
}
