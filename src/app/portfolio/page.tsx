import React from "react";
import TopSec from "./section/TopSec";
import Brands from "./section/Brands";
import PortfolioSec from "./section/PortfolioSec";
import FaqSec from "@/components/FaqSec";
const Portfolio = () => {
  return (
    <>
      <TopSec />
      <Brands />
      <PortfolioSec />
      <section className="section">
        <FaqSec />
      </section>
    </>
  );
};

export default Portfolio;
