import FeaturedBody from "./FeaturedBody";
import classes from "./PostItem.module.css";

const PostItem = ({ post }) => {
  return (
    <div className={classes.grid}>
      <div className={classes["panel-image"]}>
        <img src={post.image} alt="featured-post-image" />
      </div>
      <FeaturedBody
        title={post.title}
        date={post.date}
        author={post.author}
        avatar={post.avatar}
      />
    </div>
  );
};

export default PostItem;
