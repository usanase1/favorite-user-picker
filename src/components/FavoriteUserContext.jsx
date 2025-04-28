import React, { createContext, useState, useEffect, useContext } from 'react';

const FavoriteUserContext = createContext();

export const FavoriteUserProvider = ({ children }) => {
  const [favoriteUser, setFavoriteUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('favoriteUser'));
    if (savedUser) setFavoriteUser(savedUser);
  }, []);

  useEffect(() => {
    if (favoriteUser) {
      localStorage.setItem('favoriteUser', JSON.stringify(favoriteUser));
    } else {
      localStorage.removeItem('favoriteUser');
    }
  }, [favoriteUser]);

  return (
    <FavoriteUserContext.Provider value={{ favoriteUser, setFavoriteUser }}>
      {children}
    </FavoriteUserContext.Provider>
  );
};

export const useFavoriteUser = () => useContext(FavoriteUserContext);
