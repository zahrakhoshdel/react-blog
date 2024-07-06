import classes from "./PostHeader.module.css";

const PostHeader = ({ image, title }) => {
  return (
    <div className={classes.post}>
      <a>
        <img src={image} className={classes.image} />
        <h3>{title}</h3>
        <div className={classes["spacer-small"]}></div>
      </a>
    </div>
  );
};

export default PostHeader;
