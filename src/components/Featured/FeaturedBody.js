import classes from "./FeaturedBody.module.css";

const FeatureBody = ({ title, date, author, avatar }) => {
  return (
    <div className={classes["blog-body"]}>
      <div className={classes["panel-title"]}>
        <a href="/">
          <h3>{title}</h3>
        </a>
      </div>
      <div className={classes["panel-footer"]}>
        <div className={classes["panel-meta-text"]}>
          <div className={classes.text}>{date}</div>
          <a href="/">
            <div className={classes.author}>{author}</div>
          </a>
        </div>
        <div className={classes.block}>
          <a href="/">
            <img
              className={classes.avatar}
              src={avatar}
              alt="post-author-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureBody;
