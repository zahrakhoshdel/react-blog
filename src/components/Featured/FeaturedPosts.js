import { postsData } from "../../data/postsData";
import PostItem from "./PostItem";

import classes from "./FeaturedPosts.module.css";

const FeaturedPosts = () => {
  let size = 3;

  return (
    <div>
      {postsData.slice(0, size).map((post, index) => {
        return (
          <div className={classes["collection-item"]}>
            <PostItem post={post} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedPosts;
