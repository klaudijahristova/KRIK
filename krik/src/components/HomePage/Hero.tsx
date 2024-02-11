import Link from "next/link";
import React from "react";
import { HeroProps } from "src/interfaces/HomePageInterfaces";

function Hero({ title, subtitle, content }: HeroProps) {
  return (
    <div className="hero w-100 text-center d-flex flex-column align-items-center">
      <h1 className="hero-title fs-56 lh-72 fw-800 mulish">{title}</h1>
      <h3 className="fs-32 fw-700 lh-48 mulish hero-subtitle">{subtitle}</h3>
      <p className="fs-20 lh-40 hero-content mb-0 Montserrat">{content}</p>
      <div className="custom-bg-color-03 r-30 hero-btn d-flex align-items-center justify-content-center">
        <Link
          href={"/zaNas"}
          className="text-decoration-none custom-color-02 fs-24 fw-700 lh-32 hero-link mulish pointer"
        >
          Повеќе за нас
        </Link>
      </div>
    </div>
  );
}

export default Hero;
