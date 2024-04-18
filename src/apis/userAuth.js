import axios from "axios";

export const registerUser = async ({ username, password }) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/auth/register`;

    const response = await axios.post(reqUrl, { username, password });

    console.log("responseData", response?.data);

    localStorage.setItem("swiptoryToken", response?.data?.swiptoryToken);
    localStorage.setItem("username", response?.data?.username);

    let result;
    if (response?.data?.username) {
      result = response?.data?.username;
    }

    return result;
  } catch (error) {
    console.log(error);
    // alert("Something went wrong");
  }
};

export const loginUser = async ({ username, password }) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/auth/login`;

    const response = await axios.post(reqUrl, { username, password });
    console.log("responseData", response?.data);

    localStorage.setItem("swiptoryToken", response?.data?.swiptoryToken);
    localStorage.setItem("username", response?.data?.username);

    let result;
    if (response?.data?.username) {
      result = response?.data?.username;
    }

    return result;
  } catch (error) {
    console.log(error);
    // alert("Something went wrong");
  }
};
