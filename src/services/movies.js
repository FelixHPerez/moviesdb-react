import axios from "axios";

export const searchMedia = async (search) => {
  try {
    const res = await axios(`http://localhost:6800/media/?search=${search}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const searchMediaDetails = async (id, type) => {
  try {
    const res = await axios(`http://localhost:6800/${type}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
