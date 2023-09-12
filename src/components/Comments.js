import React from 'react';
import './style.css';

function Comments(props) {
  return (
    <div>
      {props.comments.map((comment) => (
        comment.postId === props.post &&(
          <div className="comment-section" key={comment.id}>
            <h3 className='name'>{comment.name}</h3>
            <p className='mail'>{comment.email}</p>
            <p className='comment'>{comment.body}</p>
          </div>
          )
        ))
      }
    </div>
  )
}
export default Comments
