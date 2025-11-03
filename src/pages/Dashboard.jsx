import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';

const mockRestaurants = [
   {
      id: 1,
      name: 'Spice Villa',
      image: '/src/assets/restaurants/spice-villa.jpg',
   },
   {
      id: 2,
      name: 'Urban Tadka',
      image: 'src/assets/restaurants/urban-tadka.jpg',
   },
   {
      id: 3,
      name: 'Café Nirvana',
      image: 'src/assets/restaurants/cafe-nirvana.jpg',
   },
];

const Dashboard = () => {
   const [restaurants, setRestaurants] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
         navigate('/');
      } else {
         // Simulate API call
         setRestaurants(mockRestaurants);
      }
   }, [navigate]);

   return (
      <div className="min-h-screen bg-gray-100 p-6">
         <h1 className="text-3xl font-bold text-gray-800 mb-6">Nearby Restaurants</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
               <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  onClick={() => navigate(`/restaurant/${restaurant.id}`)}
               />
            ))}
         </div>
      </div>
   );
};

export default Dashboard;