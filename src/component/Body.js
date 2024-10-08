import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
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

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
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

  if (onlineStatus == false)
    return <h1>Looks like check your internetConnection</h1>;

  //  if(listOfRestaurants.length == 0){
  //   return <ShimmerCard/>
  //  }
  return listOfRestaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="bg-teal-300">
      <div className="ml-24 ">
        <div className="py-2">
          <input
            className="border border-blue-600 rounded-lg p-2 pr-10 text-pink-600 "
            type="text"
            placeholder="search the Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-3 py-2 rounded-lg bg-green-200 m-3 hover:bg-pink-500"
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
        <div className="absolute left-[30%] bottom-[76%]">
          <button
            className=" px-3 py-2 bg-green-300 rounded-lg hover:bg-green-400"
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

        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurants) => (
            <Link
              key={restaurants?.info?.id}
              to={"restaurants/" + restaurants?.info?.id}
            >
              {restaurants.info.Promoted ? (
                <RestaurantCard resData={restaurants} />
              ) : (
                <RestaurantCardPromoted resData={restaurants} />
              )}
            </Link>
          ))}
          {/* {listofrestaurants.map((restaurants) => (
          <RestaurantCard key={restaurants?.info?.id} resData={restaurants} />
        ))} */}
          {/* <RestaurantCard resData={resList[5]} /> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
