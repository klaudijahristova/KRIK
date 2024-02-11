import React from "react";
import Link from "next/link";
import { useActiveSwiper } from "src/services/functions";
import { SwiperSliderProps } from "src/interfaces/OurTeam";

function SwiperSlideComponent({ team }: SwiperSliderProps) {
  const { active, handleNext, handlePrev } = useActiveSwiper(0, team.length);

  return (
    <div className="swiper w-100 h-100">
      <div className="d-flex justify-content-center align-items-center w-100 position-relative h-100">
        {team.map((member, index) => (
          <div
            key={index}
            className={`${index === active ? "activeMember" : ""} ${
              index === (active + 1) % team.length ? "next" : ""
            } ${
              index === (active - 1 + team.length) % team.length ? "prev" : ""
            }`}
          >
            <Link
              href={`/nashiotTim/${member.id}`}
              className="text-decoration-none custom-color-02"
            >
              <div>
                <img
                  src={member.image}
                  alt="Member"
                  className="r-40 member-img"
                />
              </div>
            </Link>
            <div className={`${index === active ? "d-block" : "d-none"}`}>
              <button
                onClick={handlePrev}
                className="m-24 prevBtn custom-bg-color-01 rounded-circle"
              >
                <img
                  src="/images/NashiotTim/prevBtn.svg"
                  alt="Previous Button"
                />
              </button>
              <button
                onClick={handleNext}
                className="m-24 nextBtn custom-bg-color-01 rounded-circle"
              >
                <img src="/images/NashiotTim/nextBtn.svg" alt="Next Button" />
              </button>
            </div>
            <div
              className={`d-flex flex-column justify-content-center  ${
                index === active ? "align-items-center" : ""
              }`}
            >
              <Link
                href={""}
                className="text-decoration-none custom-color-02 member-link"
              >
                <h3
                  className={`mulish m-24 mb-0 ${
                    index === active
                      ? "fs-48 fw-800 lh-64"
                      : "fs-24 fw-700 lh-700"
                  }`}
                >
                  {member.name}
                </h3>
              </Link>
              <p
                className={`mulish m-24 mb-0 ${
                  index === active ? "fs-24 fw-700 lh-40" : "fs-16 fw-600 lh-24"
                }`}
              >
                {member.position}
              </p>
              <div
                className={`m-24 custom-bg-color-05 LB d-flex align-items-center justify-content-between r-30 ${
                  index === active ? "d-block" : "d-none"
                }`}
              >
                <a
                  href={member.profil}
                  className="text-decoration-none fs-24 fw-700 lh-32 linkedInBtn r-30 custom-color-01"
                >
                  LinkedIn
                </a>{" "}
                <span className="custom-color-01 fs-24 fw-700 lh-32">&gt;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SwiperSlideComponent;
