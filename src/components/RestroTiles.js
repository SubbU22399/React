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
    <div className="restro">
      <img
        className="res-logo"
        alt="resImg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h5>{name}</h5>
      <h6 className="cuisines">{cuisines.join(", ")}</h6>
      <h6 className="rating ">{avgRatingString}⭐️</h6>
      <h6>{slaString}</h6>
      <h6>costForTwo : {costForTwo}</h6>
      <h6>Distance : {lastMileTravelString}</h6>
    </div>
  );
};

export default RestroTiles;
