import { newsContentData } from "./newsContentData";
import classes from "./NewsContent.module.css";

const NewsContent = () => {
  return (
    <div className={classes["news-content"]}>
      <div className={classes["content-list"]}>
        {newsContentData.map((ctx, index) => {
          return <h1>{ctx.title}</h1>;
        })}
      </div>
    </div>
  );
};

export default NewsContent;
