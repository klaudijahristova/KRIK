import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dropdownMenu } from "src/data/data";
import { navbar } from "src/data/data";
import useToggle from "src/services/useToggle";

function BottomNavbar() {
  const [isDropdownVisible, toggleDropdown] = useToggle(false);

  return (
    <div className="header-bottom custom-bg-color-02 d-flex align-items-center justify-content-between w-100 navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link href={"/"} className="navbar-brand">
          <Image
            src={"/images/Header/kriklogo1.png"}
            alt="logo"
            width={83}
            height={86}
            className="logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="bottom-nav d-flex mb-0 fs-24 fw-bold text-center p-0 navbar-nav ms-auto">
            <li
              className={`position-relative p-0 zaNas fs-24 fw-bold text-center ${
                isDropdownVisible ? "active" : ""
              }`}
              onClick={toggleDropdown}
            >
              За нас{" "}
              <img
                src="/images/Header/ddm-arrow-black.png"
                alt="arrow"
                className="arrow-icon arrow-black"
              />
              <ul
                className={`fs-16 fw-normal dropdown p-0 text-center position-absolute custom-bg-color-01 ${
                  isDropdownVisible ? "" : "d-none"
                }`}
              >
                <li className="fs-24 fw-bold text-center text-white">
                  За нас{" "}
                  <img
                    src="/images/Header/ddm-arrow-white.png"
                    alt="arrow"
                    className="arrow-icon"
                  />
                </li>
                {dropdownMenu.options.map((navItem, index) => (
                  <li key={index} className="dropdown-navlink">
                    <Link
                      href={`/${dropdownMenu.urls[index]}`}
                      className="text-decoration-none custom-color-02 text-white p-3"
                    >
                      {navItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {navbar.navberMK.map((navItem, index) => (
              <li
                key={index}
                className={` ${
                  index === navbar.navberMK.length - 1
                    ? "  doniraj ms-3 custom-bg-color-01 "
                    : "nav-btn fs-24 fw-bold"
                }`}
              >
                <Link
                  href={`/${navbar.urls[index]}`}
                  className={`text-decoration-none ${
                    index === navbar.navberMK.length - 1
                      ? " fs-16 fw-700 doniraj-link "
                      : "links custom-color-02"
                  }`}
                >
                  {navItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
