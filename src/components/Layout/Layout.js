import { Fragment } from "react";
import MainHeader from "./MainHeader";
import FeaturedSection from "./FeaturedSection";
import NewsSection from "./NewsSection";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <FeaturedSection />
      <NewsSection />
      <Footer />
    </Fragment>
  );
};

export default Layout;
