import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center bg-teal-100 text-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-600 mt-4">Portfolio</h1>
        <h2 className="text-lg text-gray-600 p-12 mt-2">
          Here are some of my previous projects & the tools I used to create
          them.
        </h2>
        <section className="flex flex-wrap">
          <div className="w-full sm:w-1/2 p-6">
            <div className="my-6 border border-solid border-gray-500 p-4 h-full">
              <div className="flex items-center justify-center h-60">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/drumkit.jpg"
                  alt="photo"
                  width={400}
                  height={400}
                />
              </div>
              <h2 className="text-lg mt-2 text-gray-600">
                I created this project using JavaScript to manipulate the DOM
                and, on click, play a specific sound. In this project, I used
                JavaScript, CSS, and HTML.
              </h2>

              <h2 className="text-lg mt-2">
                <a
                  href="https://github.com/JacobR96/Drums"
                  className="text-blue-500 hover:underline"
                >
                  Click Here to see the code
                </a>
              </h2>
            </div>
          </div>

          <div className="w-full sm:w-1/2 p-6">
            <div className="my-6 border border-solid border-gray-500 p-4 h-full">
              <div className="flex items-center justify-center h-60">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/tindog.jpg"
                  alt="photo"
                  width={400}
                  height={400}
                />
              </div>
              <h2 className="text-lg mt-2 text-gray-600">
                I created this project with Bootstrap, and it was a test of my
                CSS knowledge. I used CSS and HTML.
              </h2>
              <h2 className="text-lg mt-2">
                <a
                  href="https://github.com/JacobR96/tindog"
                  className="text-blue-500 hover:underline"
                >
                  Click Here to see the code
                </a>
              </h2>
            </div>
          </div>

          <div className="w-full sm:w-1/2 p-6">
            <div className="my-6 border border-solid border-gray-500 p-4 h-full">
              <div className="flex items-center justify-center h-60">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/treasure.jpg"
                  alt="photo"
                  width={400}
                  height={400}
                />
              </div>
              <h2 className="text-lg mt-2 text-gray-600">
                I created this project using JavaScript to manipulate the DOM
                and, on click, flip the card and tell you if you win or lose. In
                this project, I used JavaScript, CSS, and HTML.
              </h2>
              <h2 className="text-lg mt-2">
                <a
                  href="https://github.com/JacobR96/Pirate-game"
                  className="text-blue-500 hover:underline"
                >
                  Click Here to see the code
                </a>
              </h2>
            </div>
          </div>

          <div className="w-full sm:w-1/2 p-6">
            <div className="my-6 border border-solid border-gray-500 p-4 h-full">
              <div className="flex items-center justify-center h-60">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/Screenshot+2023-09-19+at+21.07.07.png"
                  alt="photo"
                  width={400}
                  height={400}
                />
              </div>
              <h2 className="text-lg mt-2 text-gray-600">
                This project is a for a client that I am currently working on.
                It is a full stack application that uses Next.js, Node, and
                Postgres.
              </h2>
              <h2 className="text-lg mt-2">
                <Link
                  href="https://nailsbykyoko.com"
                  className="text-blue-500 hover:underline"
                >
                  Click Here to see the site
                </Link>
              </h2>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Portfolio;
