import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState ([
    {
      username: "gozel_usa2018",
      caption: "WOW it works.",
      imageUrl: "https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=748&q=80",
    },
    {
      username: "muradusa_2017",
      caption: "Merry Christmas Wifey!",
      imageUrl: "https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=748&q=80",
    },
    {
      username: "sebisha_usa_2018",
      caption: "Mommy...",
      imageUrl: "https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=748&q=80",
    }
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img className="app__headerImg" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="">
        </img>

      </div>

      <h1>HELLO Insta World :rock!</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}></Post>
        ))
      }

    </div>
  );
}

export default App;
