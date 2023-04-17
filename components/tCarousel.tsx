"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type dataType = {
  data: string[];
};

function TCarousel({ data }: dataType) {
  const settings = {
    centerMode: true,
    centerSlidePercentage: 80,
    showArrows: true,
    infiniteLoop: true,
    stopOnHover: true,
    autoPlay: true,
    interval: 5000,
    showThumbs: false,
  };

  return (
    <Carousel {...settings}>
      {data.map((v, idx) => (
        <div key={idx} className='w-full h-full px-4'>
          <a href='/' className='block'>
            <img src={"images/" + v} className='h-96 w-full rounded-md'></img>
          </a>
        </div>
      ))}
    </Carousel>
  );
}

export default TCarousel;
