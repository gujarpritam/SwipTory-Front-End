import axios from "axios";

export const addPost = async ({
  category,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  username,
}) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/story/add`;

    const response = await axios.post(reqUrl, {
      category,
      slide1,
      slide2,
      slide3,
      slide4,
      slide5,
      slide6,
      username,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllStories = async (filter) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/story/getAll?user=${
      filter?.user || ""
    }&category=${filter?.category || ""}`;

    const response = await axios.get(reqUrl);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getStory = async (filter) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/story/getOne?id=${
      filter?.id || ""
    }`;

    const response = await axios.get(reqUrl);

    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateStoryPostById = async (id, storyData) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/story/update?id=${
      id || ""
    }`;

    const token = localStorage.getItem("swiptoryToken");

    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(reqUrl, storyData);
  } catch (error) {
    console.log(error);
  }
};

export const updateLikesOnStoryPost = async (storyId, likeStatus) => {
  try {
    const reqUrl = `${
      process.env.REACT_APP_BACKEND_URL
    }/story/update/likes?id=${storyId || ""}&likeStatus=${likeStatus || ""}`;

    const token = localStorage.getItem("swiptoryToken");

    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(reqUrl);
  } catch (error) {
    console.log(error);
  }
};

export const getLikesOnStory = async (storyId, username) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/story/getLikes?id=${
      storyId || ""
    }&username=${username || ""}`;

    const response = await axios.get(reqUrl);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateBookmarkOnStory = async (storyId, bookmarkStatus) => {
  try {
    const reqUrl = `${
      process.env.REACT_APP_BACKEND_URL
    }/story/update/bookmark?id=${storyId || ""}&bookmarkStatus=${
      bookmarkStatus || ""
    }`;

    const token = localStorage.getItem("swiptoryToken");

    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(reqUrl);
  } catch (error) {
    console.log(error);
  }
};

export const getBookmarkOnStory = async (storyId, username) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/story/getBookmark?id=${
      storyId || ""
    }&username=${username || ""}`;

    const response = await axios.get(reqUrl);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBookmarkedStories = async (filter) => {
  try {
    const reqUrl = `${
      process.env.REACT_APP_BACKEND_URL
    }/story/get/bookmarks?user=${filter?.user || ""}`;

    const response = await axios.get(reqUrl);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
