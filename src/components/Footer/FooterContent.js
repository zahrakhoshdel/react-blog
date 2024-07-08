import classes from "./FooterContent.module.css";
import FooterTopSection from "./FooterTopSection";

const FooterContent = () => {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["footer-wrapper"]}>
        <FooterTopSection />
      </div>
      <div className={classes["spacer-large"]}></div>
      <div className={classes["footer-wrapper"]}>FooterBottomSection</div>
    </div>
  );
};

export default FooterContent;
