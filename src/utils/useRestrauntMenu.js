import { useEffect, useState } from "react";
import { ITEMS_API_START } from "./constant";

const useRestrauntMenu = (ResId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ITEMS_API_START + ResId);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };
  return resInfo;
};
export default useRestrauntMenu;
