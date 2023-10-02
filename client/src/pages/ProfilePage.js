import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

function ProfilePage() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleSave = () => {
    console.log('Profile saved:', { name, bio });
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <label>Name:</label>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Bio:</label>
        <Input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>
      <Button onClick={handleSave}>Save Profile</Button>
    </div>
  );
}

export default ProfilePage;
