import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-teal-100 py-10 flex flex-col sm:flex-row pt-6 justify-center items-center border border-6 border-solid border-white">
        <div className="flex justify-center items-center p-6 opacity-90">
          <Image
            src="https://jacob-portfolio.s3.amazonaws.com/me.jpg"
            width={200}
            height={400}
          />
        </div>
        <div className="bg-teal-100 py-10 text-center">
          <ul className="list-disc list-inside text-left">
            <li className="text-gray-600">Tampa, Florida</li>
            <li className="text-gray-600">804-244-8407</li>
            <li className="text-gray-600">Jrosswalks@gmail.com</li>
            <li className="text-gray-600">
              <Link href="https://linkedin.com/in/jacob-ross96">LinkedIn</Link>
            </li>
            <li className="text-gray-600">
              <Link href="https://github.com/JacobR96">Github</Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="bg-teal-100 py-10 border border-6 border-solid border-white text-center">
          <h2 className="text-black-500 text-4xl p-8 text-gray-600 font-semibold">
            Skills and Frameworks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mx-auto max-w-screen-xl">
            <ul className="list-disc list-inside text-left">
              <li className="text-gray-600">Javascript</li>
              <li className="text-gray-600">Ruby</li>
              <li className="text-gray-600">Mysql</li>
              <li className="text-gray-600">CSS</li>
              <li className="text-gray-600">HTML</li>
              <li className="text-gray-600">Python</li>
              <li className="text-gray-600">FastApi</li>
              <li className="text-gray-600">C#</li>
              <li className="text-gray-600">.Net Core 6</li>
            </ul>

            <ul className="list-disc list-inside text-left">
              <li className="text-gray-600">React</li>
              <li className="text-gray-600">Node.js</li>
              <li className="text-gray-600">Postman</li>
              <li className="text-gray-600">Ruby on Rails</li>
              <li className="text-gray-600">Vue.js</li>
              <li className="text-gray-600">Angular</li>
              <li className="text-gray-600">Typescript</li>
              <li className="text-gray-600">Azure Services</li>
              <li className="text-gray-600">Vitesting</li>
              <li className="text-gray-600">VueTesting Utils</li>
              <li className="text-gray-600">Redux</li>
            </ul>

            <ul className="list-disc list-inside text-left">
              <li className="text-gray-600">Next.js</li>
              <li className="text-gray-600">REST API</li>
              <li className="text-gray-600">
                Databases (MySQL, Postgres, DynamoDB)
              </li>
              <li className="text-gray-600">AWS Services</li>
              <li className="text-gray-600">Jest testing</li>
              <li className="text-gray-600">VScode</li>
              <li className="text-gray-600">Jenkins</li>
              <li className="text-gray-600">Jira</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="py-10 bg-teal-100 text-center">
        <h2 className="text-black-500 text-4xl p-8 text-gray-600 font-semibold">
          Education 🎓
        </h2>
        <section className="bg-teal-100 grid grid-cols-1 sm:grid-cols-2">
          <div className="justify-center sm:pt-16 sm:pl-16 p-16">
            <h3 className="text-xl font-semibold text-gray-600">
              Learn Academy
            </h3>
            <p className="text-gray-500">
              I graduated from Learn Academy on June 2nd, 2023, and am a
              full-stack developer. During my time at Learn Academy, I acquired
              proficiency in JavaScript, Ruby, and Postgres. This full-time boot
              camp, conducted from Monday through Friday, equipped me with the
              fundamental programming skills and the ability to work in a
              development environment.
            </p>
            <h3 className="text-black-500 text-center text-xl p-8 text-gray-600 font-semibold">
              Certifications
            </h3>
            <p className="text-gray-600 text-center">
              AWS Certified Cloud Practitioner
            </p>
            <p className="text-gray-600 text-center">
              AWS Certified Solutions Architect - Associate
            </p>
            <p className="text-gray-600 text-center">CompTia Security+</p>
          </div>

          <div className="grid justify-items-center p-6 opacity-90">
            <Image
              src="https://jacob-portfolio.s3.amazonaws.com/programmer-for.avif"
              width={600}
              height={400}
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
