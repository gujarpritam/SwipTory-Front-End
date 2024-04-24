import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddStory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { unSetAddStory } from "../../slices/addStorySlice";
import { DEFAULT_SKILLS } from "../../utils/constant";
import { setSlide, unSetSlide } from "../../slices/slideSlice";
import { addPost } from "../../apis/storyAuth";
import { unSetEditPost } from "../../slices/editPostSlice";
import cross from "../../assets/icons/cross.png";

function AddStory() {
  const slideState = useSelector((state) => state.slide);
  const editPostState = useSelector((state) => state.editPost);

  const [slideNumber, setSlideNumber] = useState("slide1");
  const [storyDetails, setStoryDetails] = useState(editPostState.value);
  const [slidesCount, setSlidesCount] = useState([]);
  const userState = useSelector((state) => state.user);
  let prevSlide = null;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("storyDetails", storyDetails);

  const [storyData, setStoryData] = useState({
    category: "" || storyDetails?.category,
    slide1: storyDetails?.slide1 || [],
    slide2: storyDetails?.slide2 || [],
    slide3: storyDetails?.slide3 || [],
    slide4: storyDetails?.slide4 || [],
    slide5: storyDetails?.slide5 || [],
    slide6: storyDetails?.slide6 || [],
    username: userState.value,
  });

  console.log("storyData", storyData);

  const handleCategoryChange = (e) => {
    console.log("event", e);
    setStoryData({ ...storyData, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    if (slideNumber !== null) {
      if (e.target.name === "heading") {
        console.log("handleEvent", e);
        let arr = storyData[slideNumber];
        console.log("arr", arr);
        arr[0] = e.target.value;

        // if (arr[0].trim().length > 0) {
        setStoryData({ ...storyData, [slideNumber]: arr });
        // }
      } else if (e.target.name === "description") {
        console.log("handleEvent", e);
        let arr = storyData[slideNumber];
        console.log("arr", arr);
        arr[1] = e.target.value;

        // if (arr[1].trim().length > 0) {
        setStoryData({ ...storyData, [slideNumber]: arr });
        // }
      } else if (e.target.name === "image") {
        console.log("handleEvent", e);
        let arr = storyData[slideNumber];
        console.log("arr", arr);

        arr[2] = e.target.value;
        // if (arr[2].trim().length > 0) {
        setStoryData({ ...storyData, [slideNumber]: arr });
        // }
      }
    } else {
      document
        .getElementsByClassName(styles.slideSelectionError)[0]
        .setAttribute("style", `display: flex;`);
    }
  };

  const selectSlide = (data) => {
    dispatch(setSlide(slideNumber));
    setSlideNumber(data);
  };

  const closeButton = (event, id) => {
    const filteredButton = slidesCount.filter((item) => {
      return item !== id;
    });
    console.log("filteredButton", filteredButton);
    setStoryData({ ...storyData, [id]: [] });
    console.log("storyData", storyData);
    setSlidesCount([...filteredButton]);
    console.log("slidesCount", slidesCount);
    event.stopPropagation();
  };

  const addSlide = () => {
    let arr = slidesCount;
    if (arr.length === 0) {
      arr.push("slide4");
    } else if (arr.length === 1) {
      arr.push("slide5");
    } else if (arr.length === 2) {
      arr.push("slide6");
    }
    console.log("arrSlideconut", arr);
    setSlidesCount([...arr]);
  };

  useEffect(() => {
    prevSlide = slideState.value;

    console.log("slideNumber", slideNumber);
    console.log("prevslide", prevSlide);
    if (prevSlide == "slide1") {
      document
        .getElementsByClassName(styles.slide)[0]
        .setAttribute("style", `border: none;`);
    } else if (prevSlide == "slide2") {
      document
        .getElementsByClassName(styles.slide)[1]
        .setAttribute("style", `border:none;`);
    } else if (prevSlide === "slide3") {
      document
        .getElementsByClassName(styles.slide)[2]
        .setAttribute("style", `border:none;`);
    } else if (prevSlide === "slide4") {
      document
        .getElementsByClassName(styles.slide)[3]
        .setAttribute("style", `border:none;`);
    } else if (prevSlide === "slide5") {
      document
        .getElementsByClassName(styles.slide)[4]
        .setAttribute("style", `border:none;`);
    } else if (prevSlide === "slide6") {
      document
        .getElementsByClassName(styles.slide)[5]
        .setAttribute("style", `border:none;`);
    }

    if (slideNumber === "slide1") {
      document
        .getElementsByClassName(styles.slide)[0]
        .setAttribute("style", `border: 1px solid #0043a7;`);
    } else if (slideNumber === "slide2") {
      document
        .getElementsByClassName(styles.slide)[1]
        .setAttribute("style", `border: 1px solid #0043a7;`);
    } else if (slideNumber === "slide3") {
      document
        .getElementsByClassName(styles.slide)[2]
        .setAttribute("style", `border: 1px solid #0043a7;`);
    } else if (slideNumber === "slide4") {
      document
        .getElementsByClassName(styles.slide)[3]
        .setAttribute("style", `border: 1px solid #0043a7;`);
    } else if (slideNumber === "slide5") {
      document
        .getElementsByClassName(styles.slide)[4]
        .setAttribute("style", `border: 1px solid #0043a7;`);
    } else if (slideNumber === "slide6") {
      document
        .getElementsByClassName(styles.slide)[5]
        .setAttribute("style", `border: 1px solid #0043a7;`);
    }
  }, [slideNumber]);

  const emptySlideCount = () => {
    let emptySlide = 0;
    if (storyData.slide1.length === 0) {
      emptySlide++;
    }
    if (storyData.slide2.length === 0) {
      emptySlide++;
    }
    if (storyData.slide3.length === 0) {
      emptySlide++;
    }
    if (storyData.slide4.length === 0) {
      emptySlide++;
    }
    if (storyData.slide5.length === 0) {
      emptySlide++;
    }
    if (storyData.slide6.length === 0) {
      emptySlide++;
    }
    return emptySlide;
  };

  const isEmptyField = () => {
    let l1, l2, l3, l4, l5, l6;
    storyData.slide1.forEach((element) => {
      if (element.trim().length === 0) {
        l1 = true;
      }
    });

    storyData.slide2.forEach((element) => {
      if (element.trim().length === 0) {
        l2 = true;
      }
    });

    storyData.slide3.forEach((element) => {
      if (element.trim().length === 0) {
        l3 = true;
      }
    });

    storyData.slide4.forEach((element) => {
      if (element.trim().length === 0) {
        l4 = true;
      }
    });

    storyData.slide5.forEach((element) => {
      if (element.trim().length === 0) {
        l5 = true;
      }
    });

    storyData.slide6.forEach((element) => {
      if (element.trim().length === 0) {
        l6 = true;
      }
    });

    if (l1 || l2 || l3 || l4 || l5 || l6) {
      return true;
    }
    return false;
  };

  const handleSubmit = async () => {
    let blankSlides = emptySlideCount();
    if (blankSlides >= 4) {
      document
        .getElementsByClassName(styles.minSlidesError)[0]
        .setAttribute("style", `display: flex;`);
      return;
    }

    console.log(storyData);

    if (isEmptyField()) {
      document
        .getElementsByClassName(styles.inputError)[0]
        .setAttribute("style", `display: flex;`);
      return;
    }

    // if (
    //   (storyData.slide1.length < 3 && storyData.slide1.length > 0) ||
    //   (storyData.slide2.length < 3 && storyData.slide2.length > 0) ||
    //   (storyData.slide3.length < 3 && storyData.slide3.length > 0) ||
    //   (storyData.slide4.length < 3 && storyData.slide4.length > 0) ||
    //   (storyData.slide5.length < 3 && storyData.slide5.length > 0) ||
    //   (storyData.slide6.length < 3 && storyData.slide6.length > 0)
    // ) {
    //   document
    //     .getElementsByClassName(styles.inputError)[0]
    //     .setAttribute("style", `display: flex;`);
    //   return;
    // }

    const result = await addPost(storyData);
    dispatch(unSetAddStory());
    dispatch(unSetSlide());
    dispatch(unSetEditPost());
    navigate("/");
    // console.log("result on register", result);
    // if (result) {
    //   dispatch(setUser(result));
    // }
  };

  console.log("Slide Num", slideNumber);
  console.log("prev state", prevSlide);
  // console.log("storyData", storyData);
  console.log("slideCount", slidesCount);

  return (
    <div className={styles.container}>
      <div className={styles.addStory}>
        <div className={styles.subContainer}>
          <button
            onClick={() => {
              dispatch(unSetSlide());
              setStoryData({
                category: "",
                slide1: [],
                slide2: [],
                slide3: [],
                slide4: [],
                slide5: [],
                slide6: [],
                username: "",
              });
              dispatch(unSetAddStory());
              dispatch(unSetEditPost());
              dispatch(unSetSlide());
            }}
            className={styles.closeAddStory}
          >
            X
          </button>
          <p className={styles.addSlideWarning}>Add upto 6 slides</p>
          <p className={styles.minSlidesError}>Minimum 3 slides are required</p>
          <p className={styles.slideSelectionError}>Please select a slide</p>
          <div className={styles.slides}>
            <button
              id={styles.slide1}
              className={styles.slide}
              onClick={() => selectSlide("slide1")}
            >
              Slide 1
            </button>

            <button
              onClick={() => selectSlide("slide2")}
              id={styles.slide2}
              className={styles.slide}
            >
              Slide 2
            </button>
            <button
              onClick={() => selectSlide("slide3")}
              id={styles.slide3}
              className={styles.slide}
            >
              Slide 3
            </button>

            {slidesCount.map((item, index) => {
              return (
                <button
                  onClick={() => selectSlide(item)}
                  // id={styles.{}}
                  className={styles.slide}
                >
                  {item === "slide4" && <span>Slide 4</span>}
                  {item === "slide5" && <span>Slide 5</span>}
                  {item === "slide6" && <span>Slide 6</span>}
                  <img
                    onClick={(event) => closeButton(event, item)}
                    src={cross}
                    className={styles.close}
                  />
                </button>
              );
            })}
            {/* <button
              onClick={() => selectSlide("slide5")}
              id={styles.slide5}
              className={styles.slide}
            >
              <img src={cross} className={styles.close} />
              Slide 5
            </button>
            <button
              onClick={() => selectSlide("slide6")}
              id={styles.slide6}
              className={styles.slide}
            >
              <img src={cross} className={styles.close} />
              Slide 6
            </button> */}

            <button onClick={() => addSlide()} className={styles.slide}>
              Add +
            </button>
          </div>
          <div className={styles.storyForm}>
            {slideNumber === "slide1" && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="heading">
                    Heading:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="heading"
                    value={storyData.slide1[0]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Your heading"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    className={styles.input}
                    name="description"
                    value={storyData.slide1[1]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Story Description"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="image">
                    Image:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="image"
                    value={storyData.slide1[2]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Add Image url"
                  />
                </div>
              </>
            )}

            {slideNumber === "slide2" && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="heading">
                    Heading:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="heading"
                    value={storyData.slide2[0]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Your heading"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    className={styles.input}
                    name="description"
                    value={storyData.slide2[1]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Story Description"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="image">
                    Image:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="image"
                    value={storyData.slide2[2]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Add Image url"
                  />
                </div>
              </>
            )}

            {slideNumber === "slide3" && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="heading">
                    Heading:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="heading"
                    value={storyData.slide3[0]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Your heading"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    className={styles.input}
                    name="description"
                    value={storyData.slide3[1]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Story Description"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="image">
                    Image:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="image"
                    value={storyData.slide3[2]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Add Image url"
                  />
                </div>
              </>
            )}

            {slideNumber === "slide4" && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="heading">
                    Heading:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="heading"
                    value={storyData.slide4[0]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Your heading"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    className={styles.input}
                    name="description"
                    value={storyData.slide4[1]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Story Description"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="image">
                    Image:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="image"
                    value={storyData.slide4[2]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Add Image url"
                  />
                </div>
              </>
            )}

            {slideNumber === "slide5" && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="heading">
                    Heading:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="heading"
                    value={storyData.slide5[0]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Your heading"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    className={styles.input}
                    name="description"
                    value={storyData.slide5[1]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Story Description"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="image">
                    Image:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="image"
                    value={storyData.slide5[2]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Add Image url"
                  />
                </div>
              </>
            )}

            {slideNumber === "slide6" && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="heading">
                    Heading:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="heading"
                    value={storyData.slide6[0]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Your heading"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    className={styles.input}
                    name="description"
                    value={storyData.slide6[1]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Story Description"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="image">
                    Image:
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="image"
                    value={storyData.slide6[2]}
                    onChange={(e) => handleChange(e)}
                    placeholder="Add Image url"
                  />
                </div>
              </>
            )}

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="category">
                Category:
              </label>
              <select
                className={styles.select}
                type="text"
                name="category"
                value={storyData.category}
                onChange={(e) => handleCategoryChange(e)}
              >
                <option className={styles.option} disabled selected>
                  Select category
                </option>

                {DEFAULT_SKILLS.map((element) => (
                  <option className={styles.option}>{element}</option>
                ))}
              </select>
            </div>

            <p className={styles.inputError}>Please fill out all fields</p>
          </div>

          <div className={styles.buttonContainer}>
            <div>
              <button
                // onClick={() => handleSubmit()}
                className={styles.previous}
              >
                Previous
              </button>
              <button
                // onClick={() => handleSubmit()}
                className={styles.next}
              >
                Next
              </button>
            </div>

            <button onClick={() => handleSubmit()} className={styles.post}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStory;
