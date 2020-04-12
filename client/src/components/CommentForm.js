import React, { useState, useEffect } from 'react'
import '../styles/CommentForm.scss'
import Axios from 'axios';

function CommentForm() {

  const [comment, setComment] = useState("");

  console.log(comment)

  function addCommentToDatabase() {
    Axios.post('/comments', {
      comment: {
        "message": comment,
        "timestamp_in_seconds": 2 
      }
    })
    .catch(error => console.log(error))
  }

  return (
    <form onSubmit={event => event.preventDefault()}>
      <div className="comment-form-master-container">
        <div className="comment-form"> 
            <img src="https://www.placecage.com/300/300"/>
            <label for="comment"></label>
            <input 
              id="comment"
              type="text" 
              placeholder="Go ahead and spoil something!"
              value={comment}
              onChange={event => setComment(event.target.value)}
            />
        </div>
        <button 
          className="comment-button" 
          onClick={addCommentToDatabase}
        >
          SPOILER
        </button>
      </div>
    </form>
  )
}

export default CommentForm
