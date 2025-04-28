import React, { useState, useEffect } from 'react';
import { useFavoriteUser } from './FavoriteUserContext';

const UserPicker = () => {
  const [users, setUsers] = useState([]);
  const { setFavoriteUser } = useFavoriteUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading users...</p>;

  return (
    <div className="space-y-2">
      {users.map(user => (
        <button
          key={user.id}
          onClick={() => setFavoriteUser({ name: user.name, email: user.email })}
          className="w-full text-left p-3 bg-indigo-50 hover:bg-indigo-100 rounded-md transition-all"
        >
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </button>
      ))}
    </div>
  );
};

export default UserPicker;
