import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.5717263&lng=80.6576623&restaurantId=164447&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo == null) {
    return <ShimmerCard />;
  }
  const { name, cuisines, costForTwoMessage, locality } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
      console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h3>{locality}</h3>
      <h2>Menu :</h2>
      <ul>
      <li>{itemCards[2].card.info.name}</li>
      </ul>
    
      <ul>
        <li>Biryani</li>
        <li>Wada paw</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
