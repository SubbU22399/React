import { ITEM_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";

const Restraunts = () => {
  const { ResId } = useParams();

  const resInfo = useRestrauntMenu(ResId);

  if (resInfo == null) return <Shimmer />;
  const { name, areaName } = resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="Menu">
      <h1> {name}</h1>
      <h3> {areaName}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li className="Menu-list" key={item.card.info.id}>
            {item.card.info.name}- {item.card.info.price / 100} -
            <img
              className="ItemImage"
              src={ITEM_URL + item.card.info.imageId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restraunts;
