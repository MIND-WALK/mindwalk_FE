import axios from "axios";

export const postSelfDiagnosis = async (userId, payload) => {
  const { data } = await axios.post(`/api/emotion/${userId}`, { ...payload });
  return data;
};
