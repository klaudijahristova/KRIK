import React from "react";
import { MoneyBtnProps } from "src/interfaces/DonatePage";
import useToggle from "src/services/useToggle";

function MoneyBtn({ id, content }: MoneyBtnProps) {
  const [active, toggleActive] = useToggle(false);

  return (
    <div id={id} className="col-3 Montserrat fs-16 fw-400 lh-24">
      <span
        className={`moneyBtn d-flex justify-content-center align-items-center r-100 ${
          active && "darkBtn"
        }`}
        onClick={toggleActive}
      >
        {content}
      </span>
    </div>
  );
}

export default MoneyBtn;
