import NewsTags from "./NewsTags";
import NewsContent from "./NewsContent";

import classes from "./News.module.css";

const News = () => {
  return (
    <div className={classes["news-container"]}>
      <div className={classes["news-wrapper"]}>
        <NewsTags />
        <NewsContent/>
      </div>
    </div>
  );
};

export default News;
