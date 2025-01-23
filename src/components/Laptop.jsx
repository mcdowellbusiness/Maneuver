import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { laptop } from "@/assets";
import { carouselHome } from "@/constants";

const Laptop = () => {
  return (
    <div className="w-max relative">
      <img className="w-[50rem]" src={laptop} alt="laptop" />
      <Carousel
        className="absolute top-[47px] left-[105px] rounded w-[37.6rem]"
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}
        transitionTime={700}
      >
        {carouselHome.map((item) => (
          <img
            key={item.description}
            src={item.image}
            alt={item.description}
            className="h-[20rem] object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Laptop;
