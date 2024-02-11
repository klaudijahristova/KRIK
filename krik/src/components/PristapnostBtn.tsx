import React from "react";
interface PristapnostBtnProps {
  onClick: () => void;
}
const PristapnostBtn: React.FC<PristapnostBtnProps> = ({ onClick }) => {
  return (
    <div
      className="fs-24 fw-700 mulish lh-32 custom-bg-color-05 custom-color-01 position-absolute pristapnostBtn d-flex justify-content-center align-items-center fixed"
      onClick={onClick}
    >
      Пристапност
    </div>
  );
};

export default PristapnostBtn;
