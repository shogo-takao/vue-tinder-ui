import axios from "axios";

export const GET = async (path, params) => {
  const res = await axios.get(path, params);
  return res.data;
};

export const POST = async (path, params) => {
  const res = await axios.post(path, params);
  return res.data;
};
