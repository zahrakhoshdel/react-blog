import { Fragment } from "react";

import classes from "./FooterBottomSection.module.css";

import x from "../../assets/svg-image-x.svg";
import github from "../../assets/svg-image-github.svg";
import linkedin from "../../assets/svg-image-linkedin.svg";
import instagram from "../../assets/svg-image-instagram.svg";
import medium from "../../assets/svg-image-medium.svg";
import rss from "../../assets/svg-image-rss.svg";

const FooterBottomSection = () => {
  return (
    <Fragment>
      <div>
        <div>© Very Good Ventures LLC • All Rights Reserved</div>
        <div className={classes.copyright}>
          <div>
            <a href="/">Privacy Policy</a>
          </div>
          <div>•</div>
          <div>
            <a href="/">Cookie Policy</a>
          </div>
        </div>
      </div>
      <div className={classes.social}>
        <a href="/">
          <div className={classes["social-icon"]}>
            <img src={x} alt="x-icon" />
          </div>
        </a>
        <a href="/">
          <div className={classes["social-icon"]}>
            <img src={github} alt="github-icon" />
          </div>
        </a>
        <a href="/">
          <div className={classes["social-icon"]}>
            <img src={linkedin} alt="linkedin-icon" />
          </div>
        </a>
        <a href="/">
          <div className={classes["social-icon"]}>
            <img src={instagram} alt="instagram-icon" />
          </div>
        </a>
        <a href="/">
          <div className={classes["social-icon"]}>
            <img src={medium} alt="medium-icon" />
          </div>
        </a>
        <a href="/">
          <div className={classes["social-icon"]}>
            <img src={rss} alt="rss-icon" />
          </div>
        </a>
      </div>
    </Fragment>
  );
};

export default FooterBottomSection;
