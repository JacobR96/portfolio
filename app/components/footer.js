import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-center text-center p-4 sm:p-12  py-4 ">
      <div className="pr-2 pl-2 sm:pr-12  sm:pl-12">
        <Link
          href="https://github.com/JacobR96"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </div>
      <div className="pr-2 pl-2 sm:pr-12 sm:pl-12">&copy; Jacob Ross</div>
      <div className="pr-2 pl-2 sm:pr-12 sm:pl-12">
        <Link
          href="https://www.linkedin.com/in/jacob-ross96/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
