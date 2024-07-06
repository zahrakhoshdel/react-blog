import { newsContentData } from "./newsContentData";
import PostHeader from "./PostHeader";

import classes from "./NewsContent.module.css";

const NewsContent = () => {
  return (
    <div className={classes["news-content"]}>
      <div className={classes["content-list"]}>
        {newsContentData.map((ctx, index) => {
          return (
            <div key={index} className={classes["list-item"]}>
              <div className={classes["div-block"]}>
                <PostHeader image={ctx.image} title={ctx.title} />
                <h3>post footer</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsContent;
