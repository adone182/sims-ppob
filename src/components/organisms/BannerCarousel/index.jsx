import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { getToken } from "../../../features/auth/authSlice";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 23,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

export const BannerCarousel = () => {
  const token = useSelector(getToken);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    // Mengambil data dari API
    fetch("https://take-home-test-api.nutech-integrasi.com/banner", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 0) {
          setBannerData(data.data);
        } else {
          console.error("Error fetching banners:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="px-20 mb-48">
      <h3 className="text-sm text-gray-600 font-normal mb-5">
        Temukan promo menarik
      </h3>
      <Carousel
        responsive={responsive}
        partialVisible={true}
        arrows={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500}
        containerClass="carousel-container"
      >
        {bannerData.map((item) => (
          <div key={item.banner_name} className="mr-1 md:mr-8">
            <img
              src={item.banner_image}
              alt={item.banner_name}
              className="w-full h-auto shadow-md"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
