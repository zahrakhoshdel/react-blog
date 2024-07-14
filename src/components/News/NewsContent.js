import { postsData } from "../../data/postsData";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

import classes from "./NewsContent.module.css";

const NewsContent = () => {
  return (
    <div className={classes["news-content"]}>
      <div className={classes["content-list"]}>
        {postsData.map((ctx, index) => {
          return (
            <div key={index} className={classes["list-item"]}>
              <div className={classes["div-block"]}>
                <PostHeader image={ctx.image} title={ctx.title} />
                <PostFooter
                  author={ctx.author}
                  avatar={ctx.avatar}
                  newsDate={ctx.date}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsContent;
