import React from 'react';
import { useFavoriteUser } from './FavoriteUserContext';

const UserDisplay = () => {
  const { favoriteUser, setFavoriteUser } = useFavoriteUser();

  if (!favoriteUser) {
    return <p className="text-center text-gray-500">No favorite user selected yet.</p>;
  }

  return (
    <div className="text-center">
      <p className="text-lg font-medium text-indigo-600">
        Your favorite user is <br />
        <span className="font-bold">✨{favoriteUser.name}</span> 
        ({favoriteUser.email})
      </p>
      <button
        onClick={() => setFavoriteUser(null)}
        className="mt-4 bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Clear Favorite
      </button>
    </div>
  );
};

export default UserDisplay;
