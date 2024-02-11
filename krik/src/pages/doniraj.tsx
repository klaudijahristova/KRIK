import React from "react";
import DonateCard from "src/components/Doniraj/DonateCard";
import DonateFilterBtn from "src/components/Doniraj/DonateFilterBtn";
import DonateForm from "src/components/Doniraj/DonateForm";

function doniraj() {
  return (
    <div className="DonatePage">
      <h2 className="mulish fs-48 fw-800 lh-64 text-center donriraj-title xl-subtitle">
        Донирај!
      </h2>
      <DonateFilterBtn />
      <DonateCard />
      <DonateForm />
    </div>
  );
}

export default doniraj;
