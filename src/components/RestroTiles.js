import { CDN_URL } from "../utils/constant";
const RestroTiles = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, cuisines, name, avgRatingString, costForTwo } =
    resdata?.info;
  const { slaString, lastMileTravelString } = resdata?.info.sla;
  return (
    // <div className="restro">
    // 	<img
    // 		className="res-logo"
    // 		alt="resImg"
    // 		src={CDN_URL + resdata.card.card.info.cloudinaryImageId}
    // 	/>
    // 	<h5>{resdata.card.card.info.name}</h5>
    // 	<h6>{resdata.card.card.info.cuisines.join(",")}</h6>
    // 	<h6>{resdata.card.card.info.avgRatingString}</h6>
    // 	<h6>{resdata.card.card.info.sla.slaString}</h6>
    // 	<h6>costForTwo : {resdata.card.card.info.costForTwo}</h6>
    // 	<h6>Distance : {resdata.card.card.info.sla.lastMileTravelString}</h6>
    // </div>
    <div className="restro p-1 m-1 w-48 text-sm rounded-lg hover:bg-orange-100">
      <img
        className="res-logo w-48 h-24 object-cover rounded-lg"
        alt="resImg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h5 className="font-bold text-lg ">{name}</h5>
      <h6 className="cuisines italic">{cuisines.join(", ")}</h6>
      <h6 className="rating bg-green-600 rounded-lg w-min">
        {avgRatingString}⭐️
      </h6>
      <h6>{slaString}</h6>
      <h6>costForTwo : {costForTwo}</h6>
      <h6 className="distance">Distance : {lastMileTravelString}</h6>
    </div>
  );
};
export const openRestraunts = (RestroTiles) => {
  return (props) => {
    return (
      <div>
        <lable className="bg-green-600 text-white absolute box-border rounded-lg">
          Open
        </lable>
        <RestroTiles {...props} />
      </div>
    );
  };
};
export const closedRestraunts = (RestroTiles) => {
  return (props) => {
    return (
      <div>
        <lable className="bg-red-600 text-white absolute box-border rounded-lg">
          Closed
        </lable>
        <RestroTiles {...props} />
      </div>
    );
  };
};

export default RestroTiles;
