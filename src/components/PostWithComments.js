import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css';
import Comments from "./Comments";


const PostsWithComments = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  const fetchComments = (postId) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  };

  return (
    <div className="post">
      <div id="header">
        <h1>Posts & it's Comments</h1>
      </div>
      
          {posts.map((post) => (
          <div className="post-container">
            <li key={post.id}>
              <div >
                  {post.id}   
                <h2  className="post-title">{post.title}</h2>
              </div>
              <p  >{post.body}</p>
              <button  onClick={()=>{
                fetchComments(post.id)
              }}>comments</button>
              <Comments comments={comments} post={post.id}/>
           </li>
           </div> 
           
          ))
          }
        
      
     
    </div>
  );
};

export default PostsWithComments;

