import FooterContent from "../Footer/FooterContent";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <div className={classes["footer-padding"]}>
          <FooterContent />
        </div>
      </div>
    </div>
  );
};

export default Footer;
