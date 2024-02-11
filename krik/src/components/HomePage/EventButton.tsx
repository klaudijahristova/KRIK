import React from "react";
import Link from "next/link";
import {
  EventButtonProps,
  HoverColorsType,
} from "src/interfaces/HomePageInterfaces";
import { useHoverBackgroundColor } from "src/services/functions";

function EventButton({ content, url, color }: EventButtonProps) {
  const hoverColors: HoverColorsType = {
    "custom-bg-color-02": "#FFA71C",
    "custom-bg-color-03": "#AC9EDE",
  };

  const { bgColor, handleMouseOver, handleMouseOut } = useHoverBackgroundColor(
    color,
    hoverColors
  );

  return (
    <>
      <Link
        href={`/${url}`}
        className={`${color} text-decoration-none custom-color-02 eventBtn fs-24 lh-32 r-30 fw-700 d-flex justify-content-center align-items-center mulish text-center`}
        style={{
          transition: "background-color 0.3s",
          backgroundColor: bgColor,
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {content}
      </Link>
    </>
  );
}

export default EventButton;
