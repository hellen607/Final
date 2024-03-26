import { Fragment } from "react";
import "./landingPage.css";
import HeroSection from "./heroSection/HeroSection";
import CategorySection from "./categorySection/CategorySection";
import RentSection from "../RentSection/RentSection";
import SaleSection from "../SaleSection/SaleSection";
import Blogs from "../blogs/Blogs";
import "../../Pages/pages.module.css";
const LandingPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <CategorySection />
      <RentSection />
      <SaleSection />
      <Blogs />
    </Fragment>
  );
};

export default LandingPage;
