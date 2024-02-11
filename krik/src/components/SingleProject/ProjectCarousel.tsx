import React from "react";
import { ProjectCarouselComponentProps } from "src/interfaces/Projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useSwiperControls } from "src/services/functions";
import "swiper/css/navigation";

function ProjectCarousel({ carosel }: ProjectCarouselComponentProps) {
  const { swiper, setSwiper, handlePrev, handleNext } = useSwiperControls();

  return (
    <div className="position-relative r-40">
      <Swiper
        className="projectCarousel r-40 w-100"
        loop={true}
        onSwiper={(swiper) => setSwiper(swiper)}
        navigation={{
          prevEl: ".prevArrow",
          nextEl: ".nextArrow",
        }}
      >
        {carosel.map((el) => (
          <SwiperSlide key={el.img}>
            <div
              className="imgInCarousel r-40 position-relative"
              style={{ backgroundImage: `url(${el.img})` }}
            >
              <div
                className="prevArrow rounded-circle d-flex justify-content-center align-items-center position-absolute custom-color-01 custom-bg-color-01"
                onClick={handlePrev}
              >
                <MdOutlineArrowBackIos size={30} />
              </div>
              <div
                className="nextArrow rounded-circle d-flex justify-content-center align-items-center position-absolute custom-color-01 custom-bg-color-01"
                onClick={handleNext}
              >
                <MdOutlineArrowForwardIos size={30} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectCarousel;
