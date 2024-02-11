import React from "react";

function DonateInput() {
  return (
    <div className="d-flex flex-column">
      <label htmlFor="drugIznos Montserrat fs-16 fw-400 lh-24 xl-content-18">
        Друг износ:
      </label>
      <input
        type="number"
        id="drugIznos"
        placeholder="Input"
        className="r-30"
      />
    </div>
  );
}

export default DonateInput;
