import React, { useState, useEffect } from "react";
import classes from "./BackToTopButton.module.css";
import arrowUp from "../../assets/arrow-up.svg";

const BackToTopButton = () => {
  const [showsScrolBtn, setShowScrolBtn] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowScrolBtn(true) : setShowScrolBtn(false);
    };

    window.addEventListener("scroll", handleButtonVisibility);
    return () => {
      window.addEventListener("scroll", handleButtonVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${classes["button-container"]} ${
        showsScrolBtn ? classes.visible : classes.hide
      }`}
      onClick={scrollToTop}
    >
      <a className={classes["button-circle"]} href="/react-blog">
        <img src={arrowUp} alt="arrow-up"/>
      </a>
    </div>
  );
};

export default BackToTopButton;
