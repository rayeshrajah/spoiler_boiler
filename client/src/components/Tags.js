import React, { useState, useRef } from 'react'
import '../styles/Tags.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from 'react-avatar'

function Tags(props) {
  const [tag, setTag] = useState("")
  const [clicked, setClicked] = useState(false)

  function getUserName(userData, id){
    for(let i = 0; i < userData.length; i++){
      if(userData[i].id === id){
        return userData[i].name;
      }
    }
  }

  
  
  let allComments = [...props.comments]
  let videoIdFocused = props.videoIdFocused
  
  function showCommentsByTagName(videoId, tagName) {
    return allComments.filter(comment => comment.tag === tagName && comment.video_id === videoId)
  }
  
  function getAllTagNames(commentsData) {
    let tagNames = []
    commentsData.forEach(comment => {
      if (comment.tag !== null && !tagNames.includes(comment.tag))
      tagNames.push(comment.tag)
    })
    return tagNames
  }
  
  let selected = {
    backgroundColor: "white",
    borderRadius: "236.5px"
  }
  let tagNames = getAllTagNames(props.comments)
  let htmlForTagNames = tagNames.map((tagName, index) => {
    return (
      <div key={index} className="tag-capsule" >
      <button 
        className="tag-capsule-flex"
        name="tag"
        style={clicked && tag === tagName ? selected : {border: "none"}}
        value={tagName}
        onClick={event => {
          let tag = event.target.value
          setClicked(true)
          setTag("") 
          setTimeout(function () {
            setTag(tag)
          }, 50) 
        }}
      >
        {tagName}
      </button>
    </div>
    )
  })
  
  // [html, html .....]
  console.log(showCommentsByTagName(videoIdFocused, tag))
  let htmlForTaggedComments = showCommentsByTagName(videoIdFocused, tag).map((comment, index) => {
    return (
      <div 
      className="individual-comment" 
      > 
        <div id="avatar-image">
          <Avatar name={getUserName(props.usersApiData, comment.user_id)} size={60} round={true}/>
        </div>
        <p>{comment.message}</p>
      </div>
    )
  })

  
    
  
  //console.log(htmlForTaggedComments)
  return (
    <div className="tag-master-container">
      <h2>Tags</h2>
      <div className="tag-container">
        {htmlForTagNames}
      </div>
      <div>
        {htmlForTaggedComments}
        {htmlForTaggedComments.length > 2 && <FontAwesomeIcon icon="arrow-down" className="down-arrow"/>}
      </div>
    </div>
  )
}

export default Tags