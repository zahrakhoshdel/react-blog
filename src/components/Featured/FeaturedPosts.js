import { postsData } from "./postsData";
import PostItem from "./PostItem";

import classes from "./FeaturedPosts.module.css";

const FeaturedPosts = () => {
  return (
    <ul>
      {postsData.map((post, index) => {
        return (
          <div className={classes["collection-item"]}>
            <PostItem post={post} key={index} />;
          </div>
        );
      })}
    </ul>
  );
};

export default FeaturedPosts;
