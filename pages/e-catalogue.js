import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import catalogue from "@/assets/catalogue";

const Catalogue = () => {
  const { one, two, three, four, five, seven, eight } = catalogue;
  const arr = [one, two, three, four, five, seven, eight];
  return (
    <div className="mt-6 md:mt-48 w-10/12 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 8500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ margin: "0 0 2rem 0" }}
      >
        {arr?.map((slide, index = 0) => (
          <SwiperSlide key={`${index++}`}>
            <div className="w-10/12 mx-auto">

            <Image
              className="w-full"
              src={slide}
              alt="aht catalogue"
              width={1200}
              height={800}
            />
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Catalogue;
