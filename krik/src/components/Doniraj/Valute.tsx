import React from "react";

function Valute() {
  return (
    <div className="col-3">
      <select className="w-100 r-40 valuteSelect Montserrat fs-16 fw-400 lh-24">
        <option value="">Промени валута</option>
        <option value="">денар</option>
        <option value="">евро</option>
        <option value="">долар</option>
      </select>
    </div>
  );
}

export default Valute;
