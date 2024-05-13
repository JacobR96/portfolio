"use client";
import React, { useState } from "react";

const HomePageMiddle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const skills = [
    {
      category: "Languages",
      items: ["JavaScipt", "Ruby", "Sql", "CSS", "Pyton", "C#"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "FastApi",
        ".Net Core 6",
        "React",
        "Node.js",
        "Postman",
        "Ruby on Rails",
        "Vue.js",
        "Angular",
        "Typescript",
        "Azure Services",
        "Vitesting",
        "VueTesting Utils",
        "Redux",
        "Next.js",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Next.js",
        "REST API",
        "Databases (MySQL, Postgres, DynamoDB)",
        "AWS Services",
        "Jest testing",
        "VScode",
        "Jenkins",
        "Jira",
      ],
    },
  ];
  return (
    <section>
      <div className=" py-10 text-center">
        <h2 className="text-black-500 text-4xl p-8 text-gray-600 font-semibold">
          Skills and Frameworks
        </h2>
        <button
          onClick={toggleDropDown}
          className="bg-blue-300 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          {isOpen ? "Hide Skills" : "Show Skills"}
        </button>
        {isOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto max-w-screen-xl mt-4">
            {skills.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {skillCategory.category}
                </h3>
                <ul className="space-y-2">
                  {skillCategory.items.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full inline-block"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePageMiddle;
