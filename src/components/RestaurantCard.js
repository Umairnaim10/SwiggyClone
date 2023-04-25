import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = props;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={ CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
