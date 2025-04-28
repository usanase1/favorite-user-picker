import React from 'react';
import { FavoriteUserProvider } from './components/FavoriteUserContext';
import UserPicker from './components/UserPicker';
import UserDisplay from './components/UserDisplay';

const App = () => {
  return (
    <FavoriteUserProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-start py-10">
        <h1 className="text-3xl font-bold text-indigo-600 mb-8">🌟 Favorite User Picker</h1>
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md">
          <UserPicker />
          <div className="my-6 border-t border-gray-300"></div>
          <UserDisplay />
        </div>
      </div>
    </FavoriteUserProvider>
  );
};

export default App;
