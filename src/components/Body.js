import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, resList) {
  const filterData = resList.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [resList, setresList] = useState([]);
  const [searchText, setsearchText] = useState("");

  // empty dependency array once after render
  // dep arry [searchText] ⇒ once after initial render + everytime after redern (my searchText changes)
  useEffect(() => {
    restaurantcall();
  }, [searchText]);

  async function restaurantcall() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setresList(json?.data?.cards[2]?.data?.data?.cards); //Optional Chaining
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
    <div className="All-btn">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            restaurantcall();
          }}
        >
          Relevance
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const UpdateresList = resList.filter(
              (res) => res.data.avgRating >= 4.4
            );
            setresList(UpdateresList);
            //  Whenever react state variable is updated its re render the component
          }}
        >
          TOP Rated Resturants
        </button>
      </div>

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, resList);
            setresList(data);
          }}
        >
          Search
        </button>
        </div>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
            // not using keys (not acceptable) <<<< index as key <<<<<<<<< unique id (best practice
          );
        })}
      </div>
    </div>
  );
};

export default Body;
