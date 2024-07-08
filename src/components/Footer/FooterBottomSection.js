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
            <a>Privacy Policy</a>
          </div>
          <div>•</div>
          <div>
            <a>Cookie Policy</a>
          </div>
        </div>
      </div>
      <div className={classes.social}>
        <a>
          <div className={classes["social-icon"]}>
            <img src={x} />
          </div>
        </a>
        <a>
          <div className={classes["social-icon"]}>
            <img src={github} />
          </div>
        </a>
        <a>
          <div className={classes["social-icon"]}>
            <img src={linkedin} />
          </div>
        </a>
        <a>
          <div className={classes["social-icon"]}>
            <img src={instagram} />
          </div>
        </a>
        <a>
          <div className={classes["social-icon"]}>
            <img src={medium} />
          </div>
        </a>
        <a>
          <div className={classes["social-icon"]}>
            <img src={rss} />
          </div>
        </a>
      </div>
    </Fragment>
  );
};

export default FooterBottomSection;
