import classes from "./PostFooter.module.css";

const PostFooter = ({ author, avatar, newsDate }) => {
  return (
    <div>
      <div className={classes["author-block"]}>
        <a>
          <img className={classes["authot-image"]} src={avatar} />
          <div className={classes["author-text"]}>{author}</div>
        </a>
      </div>
      <div className={classes["spacer-tiny"]}></div>
      <div className={classes["text-small"]}>{newsDate}</div>
    </div>
  );
};

export default PostFooter;
