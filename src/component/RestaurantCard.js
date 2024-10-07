import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const {
    name,
    cuisines,
    deliveryTime,
    costForTwo,
    avgRating,
    cloudinaryImageId,
    locality,
  } = resData?.info;
  return (
    <div
      className="m-4 p-4 w-[230px] shadow-2xl rounded-lg "
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="rounded-lg"
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

// Higher Order component
// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="px-2 py-2 bg-black text-white rounded-lg  absolute">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
