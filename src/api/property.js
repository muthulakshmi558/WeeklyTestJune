import axios from "axios";

export const getAllProperties = () => axios.get("/data/properties.json");

export const getPropertyById = async (id) => {
  const res = await axios.get("/data/properties.json");
  const property = res.data.properties.find((p) => p.id === parseInt(id));
  return { data: property };
};
