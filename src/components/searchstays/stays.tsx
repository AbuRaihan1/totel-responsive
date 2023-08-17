import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../cards/HotelCard";
import React from "react";
import styles from "./stays.module.css";
import Image from "next/image";
export default function Stays() {
  return (
    <div className="">
      <div className="my-6">
        <Carousel autoPlay className="">
          <div className="py-16 space-y-4 mx-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          {/* 2nd carousel  */}
          <div className="py-16 space-y-4 mx-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          {/* 3rd carousel  */}
          <div className="py-16 space-y-4 mx-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </Carousel>
      </div>
      <div>Image will display here</div>
    </div>
  );
}
