import axios from "axios";

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (query) => {
  const res = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      per_page:10,
    },
  });
  return res.data.hits;
};