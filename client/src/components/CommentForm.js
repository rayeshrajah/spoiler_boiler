import React, { useState, useEffect } from 'react'
import '../styles/CommentForm.scss'
import Axios from 'axios';

function CommentForm(props) {

  const [comment, setComment] = useState("");
  const [timestampWanted, setTimestampWanted] = useState(0)
  const [commentData, setCommentData] = useState()

  // console.log(props.progressInSeconds)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let commentObj = {
      "message": comment,
      "timestamp_in_seconds": timestampWanted,
      "video_id": "2" 
    }
    props.addCommentToDatabase(commentObj)
  }




  // handle submit -> call add commenttodatabase (in app) > bring it down to props

  return (
    <form onSubmit={handleSubmit}>
      <div className="comment-form-master-container">
        <div className="comment-form"> 
            <img src="https://www.placecage.com/300/300"/>
            <label for="comment"></label>
            <input 
              id="comment"
              type="text" 
              placeholder={`Spoil something @ ${props.progressInSeconds} seconds!`}
              value={comment}
              onChange={event => setComment(event.target.value)}
              onClick={() => setTimestampWanted(props.progressInSeconds)}
            />
        </div>
        <button 
          className="comment-button"
        >
          SPOILER
        </button>
      </div>
    </form>
  )
}

export default CommentForm
