import React from "react";
import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";

const Services = () => {
  return (
    <>
      <Header />
      <h1 className="text-4xl text-black font-semibold bg-teal-100 p-12 text-center">
        Services
      </h1>
      <section className="bg-teal-100 grid grid-cols-1 sm:grid-cols-2">
        <div className="justify-center sm:pt-16 sm:pl-16 p-16">
          <p className="text-center text-gray-500">
            I offer two distinct services, each uniquely tailored to meet the
            specific needs of my clients. Pricing for these services is
            determined collaboratively, following a comprehensive review of the
            scope and requirements involved, ensuring a fair and customized
            approach.
          </p>
        </div>

        <div className="grid justify-items-center p-6 opacity-90">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXMlMjBtZWV0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            width={600}
            height={400}
          />
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-teal-100">
        <div className="flex justify-center p-6 border border-4 border-solid border-white">
          <div>
            <h1 className="text-center text-xl text-black font-semibold underline underline-offset-1 mb-2">
              Ecommerce
            </h1>
            <p className="text-gray-500 text-center mb-4">
              Our Ecommerce Page is designed for online businesses and includes
              the following features:
            </p>
            <ul className="list-disc list-inside text-left">
              <li className="text-gray-500">Standard pricing</li>
              <li className="text-gray-500">Weekly consulting</li>
              <li className="text-gray-500">
                {" "}
                Payment processing with Stripe and Square
              </li>
              <li className="text-gray-500">Email subscriptions</li>
              <li className="text-gray-500">User-friendly Stripe payments</li>
              <li className="text-gray-500">
                Admin page for managing your store{" "}
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-8">
              Contact For details
            </button>
          </div>
        </div>

        <div className="flex justify-center p-6 border border-4 border-solid border-white">
          <div>
            <h1 className="text-center text-black text-xl font-semibold mb-2 underline underline-offset-1">
              Blog
            </h1>
            <p className="text-gray-500 text-center mb-4">
              Our Blog Page is ideal for sharing your thoughts and insights with
              your audience. It offers the following features:
            </p>
            <ul className="list-disc list-inside text-left">
              <li className="text-gray-500">Standard pricing</li>
              <li className="text-gray-500">Weekly consulting</li>

              <li className="text-gray-500">
                {" "}
                Email subscriptions for marketing
              </li>
              <li className="text-gray-500">User-friendly Stripe payments</li>
              <li className="text-gray-500">Simple and intuitive admin page</li>
              <li className="text-gray-500">Email subscriptions for readers</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-8">
              Contact For details
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
