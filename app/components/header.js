import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-right text-black-500  pt-0 pl-10 pr-10 pb-0">
      <Link className="p-8 text-lg text-center" href="/">
        Home
      </Link>
      <Link className="p-8 text-lg  text-center" href="/portfolio">
        Portfolio
      </Link>
      <Link className="p-8 text-lg text-right" href="/serv">
        Services
      </Link>
    </div>
  );
};

export default Header;
