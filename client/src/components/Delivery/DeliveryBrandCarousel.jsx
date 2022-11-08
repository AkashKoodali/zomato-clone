import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper";

import BrandCard from "./BrandCard";

const DeliveryBrandCarousel = () => {
  const categories = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ejbB0B0Uxyyzklpa3iBEMfiFf47OSnPSyQ&usqp=CAU",
      title: "McDonald's",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzBjI8Yv7ysSZYFMaP7N3mOLhnBo3GuNAO3BubLOkI7iNOK8Xd2_xpKZhhvuFxwJxs4M&usqp=CAU",
      title: "KFC",
    },
    {
      image:
        "https://pbs.twimg.com/media/ErJU_R2VkAE-w7Q?format=jpg&name=medium",
      title: "Burger King",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp",
      title: "Subway",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png?output-format=webp",
      title: "Theobroma",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
      title: "Bikanervala Angan",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png?output-format=webp",
      title: "Bikanervala Angan",
    },
   
  ];

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };

  return <>
  <h1 className="text-xl mt-12 mb-5 md:text-3xl md:font-semibold">
  Top brands for you
  </h1>
  <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 ">
    {categories.map((food, index)=> (
        <BrandCard key={index} {...food}/>
    ))}
  </div>
  <div className="hidden lg:block">
    <Swiper {...slideConfig}>
      {categories.map((food, index) => {
        return (
          <SwiperSlide key={index} >
            <BrandCard {...food} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  </div>
  </>;
};

export default DeliveryBrandCarousel;
