import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function TopNavbar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: {
        q: inputRef.current?.value,
      },
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="header-top custom-bg-color-01 custom-color-01 d-flex align-items-center justify-content-between">
      <div className="d-flex">
        <Link
          href="/newsletter"
          className="text-decoration-none text-uppercase custom-color-01 fw-bold newsletter fs-24"
        >
          newsletter
        </Link>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="SEARCH"
            className="header-search custom-bg-color-01 custom-color-01 ps-3"
            name="search"
            ref={inputRef}
          />
        </form>
      </div>

      <ul className="top-nav d-flex mb-0 fw-bold">
        <li>En/Mkd</li>
        <li>
          <Link
            href={"/e-shop"}
            className="text-decoration-none custom-color-01"
            id="eShop"
          >
            E-Shop
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopNavbar;
