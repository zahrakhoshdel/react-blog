import { Fragment } from "react";
import MainHeader from "./MainHeader";
import FeaturedSection from "./FeaturedSection";
import NewsSection from "./NewsSection";

const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <FeaturedSection />
      <NewsSection />
    </Fragment>
  );
};

export default Layout;
