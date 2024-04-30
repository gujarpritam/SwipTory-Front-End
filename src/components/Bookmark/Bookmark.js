import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Bookmark.module.css";
import { getBookmarkedStories, getStory } from "../../apis/storyAuth";
import { unSetBookmark } from "../../slices/bookmarkSlice";
import { setStory } from "../../slices/storySlice";
import { setEditPost } from "../../slices/editPostSlice";
import Story from "../Story/Story";
import AddStory from "../AddStory/AddStory";
import edit from "../../assets/icons/edit.jpg";

function Bookmark() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const storyState = useSelector((state) => state.story);
  const editPostState = useSelector((state) => state.editPost);

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

  const fetchStory = async (id) => {
    const result = await getStory({ id: id });
    console.log("result", result);
    // setPostDetails(result);
    dispatch(setEditPost(result));
  };

  useEffect(() => {
    fetchBookmarkStories();
  }, []);

  console.log("storyDetails", storyDetails);

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

                {userState.value === item["username"] ? (
                  <button
                    className={styles.button}
                    onClick={() => fetchStory(item["id"])}
                  >
                    <img src={edit} />
                    Edit
                  </button>
                ) : (
                  <span></span>
                )}

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
      {editPostState?.value !== null && <AddStory />}
      {storyState.value !== null && <Story />}
    </div>
  );
}

export default Bookmark;
