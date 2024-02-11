import React from "react";
import useToggle from "src/services/useToggle";

function DonateFilterBtn() {
  const [active1, setActive1] = useToggle(true);
  const [active2, setActive2] = useToggle(false);

  return (
    <div className="row DonateFilterBtn">
      <div
        className="col-12 col-lg-6 mulish fs-24 fw-700 lh-40 position-relative text-center xl-content-30"
        onClick={() => {
          setActive1();
          setActive2();
        }}
      >
        Индивидуа
        <span
          className={`${
            active1 ? "v-activeFilter" : ""
          } position-absolute custom-bg-color-05`}
        ></span>
      </div>
      <div
        className="col-12 col-lg-6 mulish fs-24 fw-700 lh-40 position-relative text-center xl-content-30"
        onClick={() => {
          setActive1();
          setActive2();
        }}
      >
        Организација/Претпријатие{" "}
        <span
          className={`${
            active2 ? "v-activeFilter" : ""
          } position-absolute custom-bg-color-05`}
        ></span>
      </div>
      <div className="v-scroll-line custom-bg-color-01"></div>
    </div>
  );
}

export default DonateFilterBtn;
