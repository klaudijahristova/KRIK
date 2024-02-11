import React, { useState, useRef } from "react";
import { useRangeSlider } from "src/services/functions";

function RangeApplication() {
  const [rangeValue, setRangeValue] = useState<string>("1");
  const rangeRef = useRef<HTMLInputElement>(null);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(event.target.value);
  };

  useRangeSlider(rangeRef, rangeValue);

  return (
    <div className="col-12">
      <input
        type="range"
        min="1"
        max="10"
        className="w-100 range-slider"
        step="1"
        value={rangeValue}
        onChange={handleRangeChange}
        style={{ appearance: "none", width: "100%" }}
        ref={rangeRef}
      />
      <div className="d-flex justify-content-between Montserrat fs-20 fw-400 lh-40">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
    </div>
  );
}

export default RangeApplication;
