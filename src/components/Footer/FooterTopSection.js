import { Fragment } from "react";

import classes from "./FooterTopSection.module.css";
import logo from "../../assets/logo-vgv-white.svg";

const FooterTopSection = () => {
  return (
    <Fragment>
      <div>
        <img className={classes["footer-logo"]} src={logo} />
        <div className={classes["padding-medium"]}></div>
        <div className={classes["hubspot-button"]}>
          <a className={classes["button-link"]}> Let’s Talk </a>
        </div>
      </div>
      <div className={classes["link-wrapper"]}>
        <a href="/">Home</a>
        <a href="/">Services</a>
        <a href="/">Our Work</a>
        <a href="/">Testimonials</a>
        <a href="/">Blog</a>
        <a href="/">About</a>
        <a href="/">VGV.dev</a>
        <a href="/">Careers</a>
        <a href="/">Contact Us</a>
      </div>
    </Fragment>
  );
};

export default FooterTopSection;
