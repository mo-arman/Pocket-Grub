import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    name,
    cuisines,
    deliveryTime,
    costForTwo,
    avgRating,
    cloudinaryImageId,
    locality,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="container-img"
        src={CDN_LINK + cloudinaryImageId}
        alt="container-logo"
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime}minuts</h4>
      <h4>₹{costForTwo / 100}</h4>
      <h4>{avgRating}star</h4>
      <h4>{locality}</h4>
    </div>
  );
};
export default RestaurantCard;
