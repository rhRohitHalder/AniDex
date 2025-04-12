import React, { createContext } from "react";
import Axios_API from "../api/axios_API";
export const ProductContext = createContext();

const Context_api = () => {
  const [Products_Anime, setProducts_Anime] = useState(
    null || JSON.parse(localStorage.getItem("products_Anime"))
  );
  const [Products_Manga, setProducts_Manga] = useState(
    null || JSON.parse(localStorage.getItem("products_Manga"))
  );
  const fetch_data_Trending = async () => {
    try {
      const { data } = await Axios_API.get("/recommendations/anime");
      // console.log("recommendations : ", data);
      setTrending(data.data);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };
  return <div>Context_api</div>;
};

export default Context_api;
