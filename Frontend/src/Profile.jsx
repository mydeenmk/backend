// Profile.jsx
// import React, { useContext } from 'react';
// import { PostContext } from './PostContext';

// function Profile() {
//   const { posts } = useContext(PostContext);

//   return (
//     <div>
//       <h1>Profile</h1>
//       <ul>
//         {posts.map((post, index) => (
//           <li key={index}>{ }</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Profile;

// Profile.js
import React, { useContext } from 'react';
import { PostContext } from './PostContext';
import Post from './Post';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  postList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  postCard: {
    width: '100%',
    maxWidth: 800,
    margin: 'auto',
    marginBottom: 20,
  },
});

function Profile() {
  const { posts } = useContext(PostContext);
  const classes = useStyles();

  return (
    <div>
      <h1>My posts</h1>
      
      <ul className={classes.postList}>
        {posts &&
          posts.map((post, index) => (
            <li className={classes.postCard} key={index}>
              <Post post={post} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Profile;
