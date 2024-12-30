// bugSolution.js
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      {/* Optional chaining to handle potential undefined values */}
      {user && <h1>Hello, {user.name}!</h1>}
      {/* Conditional rendering to avoid errors */}
      {user ? (
        <p>Email: {user.email}</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default MyComponent;