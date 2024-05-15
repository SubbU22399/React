import { ITEM_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";
import ItemCategory from "./ItemCatogory";

const Restraunts = () => {
  const { ResId } = useParams();

  const resInfo = useRestrauntMenu(ResId);

  if (resInfo == null) return <Shimmer />;
  const { name, areaName } = resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const catagories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="Menu text-center">
      <h1 className="font-bold text-2xl"> {name}</h1>
      <h3 className="font-semibold"> {areaName}</h3>
      <h2>Menu</h2>
      {/* <ul>
        {itemCards.map((item) => (
          <li className="Menu-list" key={item.card.info.id}>
            {item.card.info.name}- {item.card.info.price / 100} -
            <img
              className="ItemImage"
              src={ITEM_URL + item.card.info.imageId}
            />
          </li>
        ))}
      </ul> */}
      {catagories.map((catagory) => (
        <ItemCategory
          data={catagory.card.card}
          key={catagory.card.card.title}
        />
      ))}
    </div>
  );
};

export default Restraunts;
