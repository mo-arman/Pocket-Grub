import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    console.log("use Effect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5717263&lng=80.6576623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };
  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false) return <h1>Looks like check your internetConnection</h1>
  
   if(listOfRestaurants.length == 0){
    return <ShimmerCard/>
   }
  return (
    <div className="body">
      <div className="input">
        <input
          className="input-search"
          type="text"
          placeholder="search the Restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="ip-btn"
          onClick={() => {
            // write the function of filtered logic here
            // cards filtered ui
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            // setListOfRestaurants(filteredList);
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      {/* here write the filter function */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filterList);
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurants) => (
          <Link
            key={restaurants?.info?.id}
            to={"restaurants/" + restaurants?.info?.id}
          >
            <RestaurantCard resData={restaurants} />
          </Link>
        ))}
        {/* {listofrestaurants.map((restaurants) => (
          <RestaurantCard key={restaurants?.info?.id} resData={restaurants} />
        ))} */}
        {/* <RestaurantCard resData={resList[5]} /> */}
      </div>
    </div>
  );
};

export default Body;
