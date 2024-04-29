import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Bookmark.module.css";
import { getBookmarkedStories, getStory } from "../../apis/storyAuth";
import { unSetBookmark } from "../../slices/bookmarkSlice";
import { setStory } from "../../slices/storySlice";
import Story from "../Story/Story";

function Bookmark() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const storyState = useSelector((state) => state.story);

  const [storyDetails, setStoryDetails] = useState([]);

  const fetchBookmarkStories = async () => {
    const user = userState.value;
    if (user === null) {
      return;
    }
    const result = await getBookmarkedStories({ user });
    setStoryDetails(result?.data);
  };

  const fetchStoryPost = async (id) => {
    const result = await getStory({ id: id });
    console.log("result", result);
    // setPostDetails(result);
    dispatch(setStory(result));
  };

  useEffect(() => {
    fetchBookmarkStories();
  }, []);

  return (
    <div className={styles.categoryBox}>
      <h3>Your Bookmarks</h3>
      {storyDetails.length === 0 ? (
        <p className={styles.noStory}>No stories Available</p>
      ) : (
        <div className={styles.storyBox}>
          {storyDetails?.map((item) => {
            return (
              <div className={styles.imgWrapper}>
                <h5>{item["heading"]}</h5>
                <p className={styles.description}>{item["description"]}</p>

                <img
                  onClick={() => fetchStoryPost(item["id"])}
                  src={item["imgUrl"]}
                  className={styles.picture}
                />
              </div>
            );
          })}
        </div>
      )}

      <button
        onClick={() => {
          dispatch(unSetBookmark());
        }}
        className={styles.back}
      >
        Back
      </button>

      {storyState.value !== null && <Story />}
    </div>
  );
}

export default Bookmark;
