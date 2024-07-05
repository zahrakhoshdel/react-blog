import NewsTags from "./NewsTags";

import classes from "./News.module.css";

const News = () => {
  return (
    <div className={classes["news-container"]}>
      <div className={classes["news-wrapper"]}>
        <NewsTags />
        <h1>news</h1>
      </div>
    </div>
  );
};

export default News;
