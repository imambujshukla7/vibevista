import React from 'react';

function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
}

export default UserCard;
