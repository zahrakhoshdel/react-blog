import classes from "./NewsSection.module.css";
import News from "../News/News";

const NewsSection = () => {
  return (
    <div className={classes["news-section"]}>
      <News />
    </div>
  );
};

export default NewsSection;
