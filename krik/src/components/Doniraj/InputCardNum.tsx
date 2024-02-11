import React from "react";

function InputCardNum() {
  return (
    <div
      className="col-12 d-flex flex-column inputWrapper"
      style={{ position: "relative" }}
    >
      <label
        htmlFor="brNaKarticka"
        className="mulish fs-16 fw-600 aplicationLabel lh-24 xl-content-26"
      >
        Број на картичка*
      </label>
      <input
        type="number"
        id="brNaKarticka"
        placeholder="****   ****   ****   **** "
        className="inputAplication r-30 position-relative"
      />
      <div className="d-flex position-absolute cardIcons">
        <img
          src="/images/doniraj/MastercardIcon.svg"
          alt="Mastercard Icon"
          className="master"
        />
        <img
          src="/images/doniraj/VisaIcon.svg"
          alt="Visa Icon"
          className="visa"
        />
        <img
          src="/images/doniraj/DiscoverIcon.svg"
          alt="Discover Icon"
          className="discover"
        />
      </div>
    </div>
  );
}

export default InputCardNum;
