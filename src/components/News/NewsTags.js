import { newsTagData } from "./newsTagData";
import classes from "./NewsTags.module.css";

const NewsTags = () => {
  return (
    <div className={classes["news-stick"]}>
      <div className={classes["news-tags"]}>
        <div className={classes["tags-list"]}>
          {newsTagData.map((tag, index) => {
            console.log(index === 0);
            return (
              <div key={index} className={classes["tag-button"]}>
                <div
                  className={`${classes["tag-button"]} ${
                    index === 0 ? classes["first-tag"] : classes.tags
                  }`}
                >
                  <a href="/">
                    <button>{tag.title}</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsTags;
