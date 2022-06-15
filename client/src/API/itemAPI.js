import axios from "axios";

const endpoint = "http://localhost:4000/item";

export const getItems = async () => {
  return (await axios.get(endpoint)).data;
};
