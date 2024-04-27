import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Story.module.css";
import close from "../../assets/icons/close.png";
import share from "../../assets/icons/share.png";
import leftSwipe from "../../assets/icons/left-swipe.png";
import rightSwipe from "../../assets/icons/right-swipe.png";
import { unSetStory } from "../../slices/storySlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

function Story() {
  const dispatch = useDispatch();
  const storyState = useSelector((state) => state.story);
  const [storyDetails, setStoryDetails] = useState(storyState.value);
  const [storySlider, setStorySlider] = useState([]);

  console.log("StoryDetails", storyDetails);

  const sliderArray = () => {
    let arr = [];
    if (storyDetails?.slide1?.length === 3) {
      arr.push(storyDetails.slide1);
    }
    if (storyDetails?.slide2?.length === 3) {
      arr.push(storyDetails.slide2);
    }
    if (storyDetails?.slide3?.length === 3) {
      arr.push(storyDetails.slide3);
    }
    if (storyDetails?.slide4?.length === 3) {
      arr.push(storyDetails.slide4);
    }
    if (storyDetails?.slide5?.length === 3) {
      arr.push(storyDetails.slide5);
    }
    if (storyDetails?.slide6?.length === 3) {
      arr.push(storyDetails.slide6);
    }

    setStorySlider([...arr]);
  };

  useEffect(() => {
    sliderArray();
  }, [storyDetails]);

  console.log("storySlider", storySlider);

  return (
    <div className={styles.container}>
      {/* <div className={styles.subContainer}> */}
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        style={{
          width: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {storySlider.map((item) => {
          return (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={styles.story}>
                <div className={styles.topSubContainer}>
                  <img
                    className={styles.images}
                    src={close}
                    onClick={() => dispatch(unSetStory())}
                  />
                  <img className={styles.images} src={share} />
                </div>
                <div className={styles.bottomSubContainer}>
                  <h4 className={styles.heading}>{item[0]}</h4>
                  <p className={styles.description}>{item[1]}</p>
                  <img src={item[2]} className={styles.picture} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </div>
  );
}

export default Story;

// <div className={styles.container}>
//       <img className={styles.leftSwipe} src={leftSwipe} />
//       <div className={styles.story}>
//         <Swiper
//           spaceBetween={50}
//           slidesPerView={3}
//           onSlideChange={() => console.log("slide change")}
//           onSwiper={(swiper) => console.log(swiper)}
//         >
//           <div className={styles.topSubContainer}>
//             <img
//               className={styles.images}
//               src={close}
//               onClick={() => dispatch(unSetStory())}
//             />
//             <img className={styles.images} src={share} />
//           </div>

//           {storySlider.map((item) => {
//             return (
//               <SwiperSlide>
//                 <div className={styles.bottomSubContainer}>
//                   <h4 className={styles.heading}>{item[0]}</h4>
//                   <p className={styles.description}>{item[1]}</p>
//                   <img src={item[2]} className={styles.picture} />
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//       <img className={styles.rightSwipe} src={rightSwipe} />
//     </div>
