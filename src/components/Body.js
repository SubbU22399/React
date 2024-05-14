import RestroTiles, { openRestraunts, closedRestraunts } from "./RestroTiles";
import { RESTROLIST_API } from "../utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchtext] = useState("");
  const [restrolist, setRestroList] = useState([]);
  const [fileredList, SetFilteredList] = useState([]);

  const RestroTilesOpen = openRestraunts(RestroTiles);
  const RestroTilesClosed = closedRestraunts(RestroTiles);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTROLIST_API);
    const json = await data.json();
    setRestroList(
      //optional Chaining ( learn about it)
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    console.log(restrolist);
    SetFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };
  //Conditional rendering........
  // if (fileredList.length == 0) {
  // 	return <h1>Not Found</h1>;
  // }
  // const restrolist = useRestrauntList();

  return restrolist.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-4">
      <div className="search p-4 justify-between">
        <button
          className="btnFilter bg-blue-300 rounded-lg"
          onClick={() => {
            SetFilteredList(
              restrolist.filter((filter) => filter.info.avgRating > 4.2)
            );
          }}>
          Filter
        </button>
        <input
          type="text"
          placeholder="Search...."
          className="search-box bg-gray-100 w-96 mx-4 items-stretch border-s-orange-50"
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />
        <button
          type="search"
          className="SearchBth bg-blue-400 rounded-lg"
          onClick={() => {
            SetFilteredList(
              restrolist.filter((filter) =>
                filter.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
            );
          }}>
          search
        </button>
      </div>
      <div className="restro-tiles flex flex-wrap">
        {fileredList.map((data) => (
          <Link
            className="restro-tiles flex flex-wrap"
            key={data.info.parentId}
            to={"restraunts/" + data.info.id}>
            {data.info.isOpen ? (
              <RestroTilesOpen resdata={data} />
            ) : (
              <RestroTilesClosed resdata={data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
