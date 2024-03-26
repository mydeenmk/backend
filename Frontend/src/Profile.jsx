// Profile.jsx
import React, { useContext } from 'react';
import { PostContext } from './PostContext';

function Profile() {
  const { posts } = useContext(PostContext);

  return (
    <div>
      <h1>Profile</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{ }</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
