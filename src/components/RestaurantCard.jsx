const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition duration-200"
      onClick={onClick}
    >
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{restaurant.name}</h3>
        {restaurant.location && (
          <p className="text-sm text-gray-500">{restaurant.location}</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;