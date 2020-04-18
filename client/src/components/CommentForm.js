import React, { useState } from 'react'
import Avatar from 'react-avatar'
import '../styles/CommentForm.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CommentForm(props) {
  const [comment, setComment] = useState("");
  const [tag, setTag] = useState("");
  const [spoilerClicked, setSpoilerClicked] = useState(false)
  const [timestampWanted, setTimestampWanted] = useState(0)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let commentObj = {
      "message": comment,
      "timestamp_in_seconds": timestampWanted,
      "video_id": props.videoIdFocused,
      "tag": tag.toLowerCase(), 
      "user_id": props.userId
    }
    props.addCommentToDatabase(commentObj)
    setComment("")
    setTag("")
    
    setTimeout(() => {
      setSpoilerClicked(false)
    }, 5000);
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
                <div className="badge-for-user">
                  <span id="spoil-badge" className="badge badge-success">spoil @{timestampWanted} sec</span>
                  <span className="badge badge-danger">running @{props.progressInSeconds} sec</span>
                </div> 
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
          
            {spoilerClicked &&
            <div>
              <FontAwesomeIcon icon="thumbs-up" className="message-icon"/>
            </div>}
       
        {(tag.length >= 3 && tag.length <= 9) && comment && <button className="comment-button" onClick={() =>  setSpoilerClicked(true)}>SPOILER</button>}
      </div>
    </form>
  )
}

export default CommentForm
