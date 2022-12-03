import axios from "axios";

export const getUser = async () => {
  const res = await axios.get("/user");
  return res.data;
};

export const updateNickname = (nickname) => {
  return axios.put(`/update-nickname?nickname=${nickname}`);
};

export const getPosts = async () => {
  const res = await axios.get("/posts");
  return res.data;
};
