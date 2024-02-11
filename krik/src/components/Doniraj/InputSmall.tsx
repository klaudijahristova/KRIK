import React from "react";

function InputSmall() {
  return (
    <div className="col-12 InputSmall">
      <div className="row">
        <div className="col-6">
          <input
            type="number"
            placeholder="MM/YY"
            className="inputDate r-30 w-100"
          />
        </div>
        <div className="col-6">
          <input
            type="number"
            placeholder="CCV"
            className="inputDate r-30 w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default InputSmall;
