import React, { useRef } from "react";
import {
  accessibilityIcons,
  accessibilityIconsRed,
  accessibilityIconsGray,
} from "src/data/data";
import { PristapnostProps } from "src/interfaces/HomePageInterfaces";
import { accessibillitySyle } from "src/services/functions";
import { useAccessibility } from "./AccessibilityContext";

const Pristapnost: React.FC<PristapnostProps> = ({ onMouseOut }) => {
  const {
    isOnImage1,
    setIsOnImage1,
    handleClick,
    clickedIndexes,
    isCursorActive,
    isContrastActive,
  } = useAccessibility();
  const { setHoveredIndex, hoveredIndex } = accessibillitySyle();

  const pristapnostRef = useRef<HTMLDivElement>(null);

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      pristapnostRef.current &&
      !pristapnostRef.current.contains(e.relatedTarget as Node)
    ) {
      onMouseOut();
    }
  };

  const isSmallScreen = window.innerWidth < 1550;

  return (
    <div
      className="pristapnost fixed"
      onMouseOut={handleMouseOut}
      ref={pristapnostRef}
    >
      <div className="pristapnost-title custom-bg-color-05 mulish fs-24 fw-700 lh-32 custom-color-01 d-flex justify-content-center align-items-center">
        Пристапност
      </div>
      <div className="accessibility h-100">
        <div className="row justify-content-between">
          <div className="col-9 d-flex p-0">
            {" "}
            <div className="muslish fs-32 fw-700 lh-48 custom-bg-color-06 r-20 xl d-flex align-items-center">
              XL
            </div>
            <div className="muslish fs-32 fw-700 lh-48 widget custom-bg-color-06 r-20 d-flex align-items-center">
              Oversized Widget
            </div>
          </div>
          <div className="col-2 p-0">
            <img
              src={
                isOnImage1
                  ? "/images/accessibility/on.svg"
                  : "/images/accessibility/off.svg"
              }
              alt="toggle1"
              onClick={() => setIsOnImage1((prevIsOnImage) => !prevIsOnImage)}
              className="hover-gray offOn"
            />
          </div>
        </div>
        <div
          className="row accessibility-icons justify-content-between
        "
        >
          {accessibilityIcons.map((icon, i) => (
            <div className={`p-0 ${isSmallScreen ? "col-4" : "col-6"}`} key={i}>
              <img
                src={
                  clickedIndexes.includes(i)
                    ? accessibilityIconsRed[i]
                    : i === hoveredIndex
                    ? accessibilityIconsGray[i]
                    : icon
                }
                alt="icon"
                className={`accessibility-icon accessibility-img ${
                  isCursorActive && i === 0 ? "cursor-pointer" : ""
                } ${isContrastActive && i === 2 ? "contrast" : ""}`}
                onClick={() => handleClick(i)}
                onMouseOver={() => setHoveredIndex(i)}
                onMouseOut={() => setHoveredIndex(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pristapnost;

function reload() {
  throw new Error("Function not implemented.");
}
