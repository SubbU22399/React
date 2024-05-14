import RestroTiles from "./RestroTiles";
import { RESTROLIST_API } from "../utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchtext] = useState("");
  const [restrolist, setRestroList] = useState([]);
  const [fileredList, SetFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTROLIST_API);
    const json = await data.json();

    console.log(json);
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
    <div className="body">
      <div className="search">
        <button
          className="btnFilter"
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
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />
        <button
          type="search"
          className="SearchBth"
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
      <div className="restro-tiles">
        {fileredList.map((data) => (
          <Link
            className="restro-tiles"
            key={data.info.parentId}
            to={"restraunts/" + data.info.id}>
            <RestroTiles resdata={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
