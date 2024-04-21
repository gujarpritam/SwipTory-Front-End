import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Post.module.css";
import allPicture from "../../assets/images/all.png";
import foodPicture from "../../assets/images/food.png";
import healthPicture from "../../assets/images/health.png";
import travelPicture from "../../assets/images/travel.png";
import moviesPicture from "../../assets/images/movies.jpg";
import educationPicture from "../../assets/images/education.jpg";
import edit from "../../assets/icons/edit.jpg";
import { getAllStories } from "../../apis/storyAuth";

function Post() {
  const userState = useSelector((state) => state.user);

  const [storyDetails, setStoryDetails] = useState([]);
  const [itemCategory, setItemCategory] = useState("");
  let arr;

  console.log("storyDetails", storyDetails);
  console.log("itemCategory", itemCategory);
  // console.log("Cat", storyDetails?.data);
  // console.log("all", storyDetails?.foodData);

  const fetchAllStories = async (data) => {
    const user = userState.value;
    console.log(user);
    const result = await getAllStories({ user, category: data });

    // console.log("result.data", result);
    if (result?.data) {
    }
    setStoryDetails(result?.data);
    setItemCategory(result?.category);
  };

  // if (
  //   loginState.value === 0 ||
  //   registerState.value === 0 ||
  //   storyPost.value === 0
  // ) {
  //   fetchAllStories("All");
  // }

  useEffect(() => {
    fetchAllStories("All");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <div className={styles.imgBox} onClick={() => fetchAllStories("All")}>
          <h3 classname={styles.categoryHead}>All</h3>
          <img src={allPicture} className={styles.image} />
        </div>

        <div className={styles.imgBox} onClick={() => fetchAllStories("Food")}>
          <h3 className={styles.categoryHead}>Food</h3>
          <img src={foodPicture} className={styles.image} />
        </div>

        <div
          className={styles.imgBox}
          onClick={() => fetchAllStories("Health and Fitness")}
        >
          <h3 className={styles.categoryHead}>Health</h3>
          <img src={healthPicture} className={styles.image} />
        </div>
        <div
          className={styles.imgBox}
          onClick={() => fetchAllStories("Travel")}
        >
          <h3 className={styles.categoryHead}>Travel</h3>
          <img src={travelPicture} className={styles.image} />
        </div>

        <div
          className={styles.imgBox}
          onClick={() => fetchAllStories("Movies")}
        >
          <h3 className={styles.categoryHead}>Movies</h3>
          <img src={moviesPicture} className={styles.image} />
        </div>
        <div
          className={styles.imgBox}
          onClick={() => fetchAllStories("Education")}
        >
          <h3 className={styles.categoryHead}>Education</h3>
          <img src={educationPicture} className={styles.image} />
        </div>
      </div>

      <div className={styles.subContainer}>
        {itemCategory ? (
          <div className={styles.categoryBox}>
            <h3>Top Stories about {itemCategory}</h3>
            {storyDetails.length === 0 ? (
              <p className={styles.noStory}>No stories Available</p>
            ) : (
              <div className={styles.storyBox}>
                {storyDetails?.map((item) => {
                  return (
                    <div className={styles.imgWrapper}>
                      <h5>{item["heading"]}</h5>
                      <p className={styles.description}>
                        {item["description"]}
                      </p>

                      <img src={item["imgUrl"]} className={styles.picture} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div>
            {storyDetails[5]?.length !== 0 ? (
              <div className={styles.categoryBox}>
                <h3>Your Stories</h3>
                <div className={styles.storyBox}>
                  {storyDetails[5]?.map((item) => {
                    return (
                      <div className={styles.imgWrapper}>
                        <h5>{item["heading"]}</h5>
                        <p className={styles.description}>
                          {item["description"]}
                        </p>
                        <button className={styles.button}>
                          <img src={edit} />
                          Edit
                        </button>
                        <img src={item["imgUrl"]} className={styles.picture} />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p></p>
            )}

            <div className={styles.categoryBox}>
              <h3>Top Stories about Food</h3>
              {storyDetails[0]?.length !== 0 ? (
                <div className={styles.storyBox}>
                  {storyDetails[0]?.map((item) => {
                    return (
                      <div className={styles.imgWrapper}>
                        <h5>{item["heading"]}</h5>
                        <p className={styles.description}>
                          {item["description"]}
                        </p>
                        <img src={item["imgUrl"]} className={styles.picture} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className={styles.noStory}>No stories Available</p>
              )}
            </div>

            <div className={styles.categoryBox}>
              <h3>Top Stories about Health and Fitness</h3>
              {storyDetails[1]?.length !== 0 ? (
                <div className={styles.storyBox}>
                  {storyDetails[1]?.map((item) => {
                    return (
                      <div className={styles.imgWrapper}>
                        <h5>{item["heading"]}</h5>
                        <p className={styles.description}>
                          {item["description"]}
                        </p>
                        <img src={item["imgUrl"]} className={styles.picture} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className={styles.noStory}>No stories Available</p>
              )}
            </div>

            <div className={styles.categoryBox}>
              <h3>Top Stories about Travel</h3>
              {storyDetails[2]?.length !== 0 ? (
                <div className={styles.storyBox}>
                  {storyDetails[2]?.map((item) => {
                    return (
                      <div className={styles.imgWrapper}>
                        <h5>{item["heading"]}</h5>
                        <p className={styles.description}>
                          {item["description"]}
                        </p>
                        <img src={item["imgUrl"]} className={styles.picture} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className={styles.noStory}>No stories Available</p>
              )}
            </div>

            <div className={styles.categoryBox}>
              <h3>Top Stories about Movies</h3>
              {storyDetails[3]?.length !== 0 ? (
                <div className={styles.storyBox}>
                  {storyDetails[3]?.map((item) => {
                    return (
                      <div className={styles.imgWrapper}>
                        <h5>{item["heading"]}</h5>
                        <p className={styles.description}>
                          {item["description"]}
                        </p>
                        <img src={item["imgUrl"]} className={styles.picture} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className={styles.noStory}>No stories Available</p>
              )}
            </div>

            <div className={styles.categoryBox}>
              <h3>Top Stories about Education</h3>
              {storyDetails[4]?.length !== 0 ? (
                <div className={styles.storyBox}>
                  {storyDetails[4]?.map((item) => {
                    return (
                      <div className={styles.imgWrapper}>
                        <h5>{item["heading"]}</h5>
                        <p className={styles.description}>
                          {item["description"]}
                        </p>
                        <img src={item["imgUrl"]} className={styles.picture} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className={styles.noStory}>No stories Available</p>
              )}
            </div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
