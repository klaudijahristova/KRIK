import Link from "next/link";
import React from "react";

function PridruziSe() {
  return (
    <div className="pridruziSe custom-bg-color-01 r-40 custom-color-01">
      <h3 className="fs-32 lh-48 fw-bold t-title">Стани Волонтер</h3>
      <p className="fs-16 lh-24 t-content">
        Сакаш Да Работиш Со Млади Лица? Оваа Можност Е Токму За Тебе.
      </p>
      <Link
        href={"/prijava"}
        className="fs-24 lh-32 fw-700 text-decoration-none custom-color-01 t-link"
      >
        Придружи Ни Се
      </Link>
    </div>
  );
}

export default PridruziSe;
