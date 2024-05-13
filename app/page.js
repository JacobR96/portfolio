import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePageTop from "./components/HomePage/top";
import HomePageMiddle from "./components/HomePage/middle";
export default function Home() {
  return (
    <>
      <Header />
      <HomePageTop />
      <HomePageMiddle />
      <Footer />
    </>
  );
}
