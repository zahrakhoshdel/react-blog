import { Fragment } from "react";
import MainHeader from "./MainHeader";
import FeaturedSection from "./FeaturedSection";
import NewsSection from "./NewsSection";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";

const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <FeaturedSection />
      <NewsSection />
      <Footer />
      <BackToTopButton/>
    </Fragment>
  );
};

export default Layout;
