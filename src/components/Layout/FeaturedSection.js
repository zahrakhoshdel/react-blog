import FeaturedPosts from "../Featured/FeaturedPosts";
import classes from "./FeaturedSection.module.css";

const FeaturedSection = () => {
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div>
          <h1>A Very Good Blog</h1>
        </div>
        <div className={classes["heading-2"]}>
          <h4>Featured Stories</h4>
        </div>
        <FeaturedPosts />
      </div>
    </div>
  );
};

export default FeaturedSection;
