import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddStory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { unSetAddStory } from "../../slices/addStorySlice";
import { DEFAULT_SKILLS } from "../../utils/constant";
import { setSlide, unSetSlide } from "../../slices/slideSlice";
import { addPost } from "../../apis/storyAuth";

function AddStory() {
  const slideState = useSelector((state) => state.slide);
  const [slideNumber, setSlideNumber] = useState(null);
  const userState = useSelector((state) => state.user);
  let prevSlide = null;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [storyData, setStoryData] = useState({
    category: "",
    slide1: [],
    slide2: [],
    slide3: [],
    slide4: [],
    slide5: [],
    slide6: [],
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
    }

    // setStoryData({ ...storyData, [e.target.name]: e.target.value });
  };

  const selectSlide = (data) => {
    // localStorage.setItem("prevState", slideNumber);
    dispatch(setSlide(slideNumber));
    setSlideNumber(data);
  };

  useEffect(() => {
    // prevSlide = localStorage.getItem("prevState");
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
    } else {
      document
        .getElementsByClassName(styles.slide)[5]
        .setAttribute("style", `border:none;`);
    }

    // console.log("data", data);
    if (slideNumber === "slide1") {
      document
        .getElementsByClassName(styles.slide)[0]
        .setAttribute("style", `border: 1px solid #73ABFF;`);
    } else if (slideNumber === "slide2") {
      document
        .getElementsByClassName(styles.slide)[1]
        .setAttribute("style", `border: 1px solid #73ABFF;`);
    } else if (slideNumber === "slide3") {
      document
        .getElementsByClassName(styles.slide)[2]
        .setAttribute("style", `border: 1px solid #73ABFF;`);
    } else if (slideNumber === "slide1") {
      document
        .getElementsByClassName(styles.slide)[3]
        .setAttribute("style", `border: 1px solid #73ABFF;`);
    } else if (slideNumber === "slide1") {
      document
        .getElementsByClassName(styles.slide)[4]
        .setAttribute("style", `border: 1px solid #73ABFF;`);
    } else {
      document
        .getElementsByClassName(styles.slide)[5]
        .setAttribute("style", `border: 1px solid #73ABFF;`);
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
    navigate("/");
    // console.log("result on register", result);
    // if (result) {
    //   dispatch(setUser(result));
    // }

    // document
    //     .getElementsByClassName(styles.minSlidesError)[0]
    //     .setAttribute("style", `display: none;`);

    // document
    //   .getElementsByClassName(styles.userExistError)[0]
    //   .setAttribute("style", `display: flex;`);
  };

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
            }}
            className={styles.closeAddStory}
          >
            X
          </button>
          <p className={styles.addSlideWarning}>Add upto 6 slides</p>
          <p className={styles.minSlidesError}>Minimum 3 slides are required</p>
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
            <button
              onClick={() => selectSlide("slide4")}
              id={styles.slide4}
              className={styles.slide}
            >
              Slide 4
            </button>
            <button
              onClick={() => selectSlide("slide5")}
              id={styles.slide5}
              className={styles.slide}
            >
              Slide 5
            </button>
            <button
              onClick={() => selectSlide("slide6")}
              id={styles.slide6}
              className={styles.slide}
            >
              Slide 6
            </button>

            <button
              // onClick={() => handleSubmit()}
              className={styles.slide}
            >
              Add +
            </button>
          </div>
          <div className={styles.storyForm}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="heading">
                Heading:
              </label>
              <input
                className={styles.input}
                type="text"
                name="heading"
                // value={formData.companyName}
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
                // value={formData.about}
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
                // value={formData.logoUrl}
                onChange={(e) => handleChange(e)}
                placeholder="Add Image url"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="category">
                Category:
              </label>
              <select
                className={styles.select}
                type="text"
                name="category"
                // value={storyData.category}
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
