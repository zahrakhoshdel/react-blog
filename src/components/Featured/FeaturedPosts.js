import { postsData } from "./postsData";
import classes from "./FeaturedPosts.module.css";

const FeaturedPosts = () => {
  return (
    <ul>
      {postsData.map((post, index) => {
        console.log(post);
        return (
          <div className={classes["collection-item"]}>
            <h1>{post.title}</h1>
          </div>
        );
      })}
    </ul>
  );
};

export default FeaturedPosts;
