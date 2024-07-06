import classes from "./PostHeader.module.css";

const PostHeader = ({ image, title }) => {
  return (
    <a className={classes.post}>
      <img src={image} className={classes.image} />
      <h3>{title}</h3>
      <div className={classes["spacer-small"]}></div>
    </a>
  );
};

export default PostHeader;
