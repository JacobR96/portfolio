"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HomePageTop = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="bg-center py-10 flex flex-col sm:flex-row pt-6 justify-center items-center">
      <div className="flex justify-center items-center p-6 opacity-90">
        <Image
          src="https://jacob-portfolio.s3.amazonaws.com/me.jpg"
          width={200}
          height={400}
          className="rounded-xl shadow-2xl"
        />
      </div>
      <div className="py-10 text-center text-white flex flex-col items-center">
        <button
          onClick={toggleDropdown}
          className="mt-4 bg-blue-300 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-all duration-300"
        >
          {isDropdownOpen ? "Hide Details" : "Show Details"}
        </button>
        {isDropdownOpen && (
          <div className="mt-4 p-6 bg-gray-100 rounded-xl shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">
              Additional Info
            </h3>
            <ul className="space-y-2 text-blue-300">
              <li>Tampa, Florida</li>
              <li>804-244-8407</li>
              <li>Jrosswalks@gmail.com</li>
              <li>
                <Link href="https://linkedin.com/in/jacob-ross96">
                  <p className="hover:text-gray-300">LinkedIn</p>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/JacobR96">
                  <p className="hover:text-gray-300">Github</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePageTop;
