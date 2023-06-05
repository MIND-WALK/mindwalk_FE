import axios from "axios";

export const getAllDiaries = async userId => {
  const { data } = await axios.get(`/api/log/all/${userId}`, {});
  return data;
};

export const getDiary = async (userId, ms) => {
  const { data } = await axios.get(`/api/log/${userId}/${ms}`, {});
  return data;
};

export const createDiary = async (userId, payload) => {
  const { data } = await axios.post(`/api/log/${userId}`, { ...payload });
  return data;
};

export const updateDiary = async (userId, ms, payload) => {
  const { data } = await axios.post(`/api/log/update/${userId}/${ms}`, { ...payload });
  return data;
};

export const deleteDiary = async (userId, ms) => {
  const { data } = await axios.delete(`/api/log/delete`, { data: { author: userId, date: ms } });
  return data;
};
