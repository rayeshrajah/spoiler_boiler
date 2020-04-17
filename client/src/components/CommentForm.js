import React, { useState, useEffect } from 'react'
import Avatar from 'react-avatar'
import '../styles/CommentForm.scss'

function CommentForm(props) {
  
  const [comment, setComment] = useState("");
  const [tag, setTag] = useState("");
  const [timestampWanted, setTimestampWanted] = useState(0)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let commentObj = {
      "message": comment,
      "timestamp_in_seconds": timestampWanted,
      "video_id": props.videoIdFocused,
      "tag": tag, 
      "user_id": props.userId
    }
    props.addCommentToDatabase(commentObj)
  }

  function getUserName(userData, id){
    for(let i = 0; i < userData.length; i++){
      if(userData[i].id === id){
        return userData[i].name;
      }
    }
  }

  console.log("This is a user name: ", getUserName(props.usersApiData, props.userId))
  return (
    <form onSubmit={handleSubmit}>
      <div className="comment-form-master-container">
          <div class="user-input-container">
            <div className="comment-form"> 
                {/* <img src="https://www.placecage.com/300/300"/> */}
                <Avatar name={getUserName(props.usersApiData, props.userId)} size={60} round={true}/>
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
            <label for="tag"></label>
            <input 
              id="tag"
              type="text" 
              placeholder="Add a tag!"
              value={tag}
              onChange={event => setTag(event.target.value)}
            />
          </div>
        <button className="comment-button">SPOILER</button>
      </div>
    </form>
  )
}

export default CommentForm
