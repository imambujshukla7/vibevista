import React from 'react';
import UserCard from '../components/UserCard';

function HomePage() {
  const users = [
    { id: 1, name: 'John Doe', bio: 'Web Developer' },
    { id: 2, name: 'Jane Doe', bio: 'Designer' },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
