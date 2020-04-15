import React, { useState, useEffect } from 'react'
import '../styles/Tags.scss'

function Tags(props) {
  const [tag, setTag] = useState("")

  // console.log(props.comments)
  // console.log(props.videoIdFocused)
  let allComments = props.comments
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

  let tagNames = getAllTagNames(props.comments)
  let htmlForTagNames = tagNames.map((tag, index) => {
    // console.log(tag)
    return (
    <div key={index} className="tag-capsule" >
      <button 
        className="tag-capsule-flex"
        name="tag"
        value={tag}
        onClick={event => {
          setTag(event.target.value)
        }}
      >
        {tag}
      </button>
    </div>
    )
  })

  // [html, html .....]
  let htmlForTaggedComments = showCommentsByTagName(videoIdFocused, tag).map((comment, index) => {
    return (
      <div 
      key={index} 
      className="individual-comment" 
      > 
          <img id="user-avatar" src="https://www.placecage.com/300/300"/>
          <p>{comment.message}</p>
      </div>
    )
  })


  return (
    <div className="tag-master-container">
      <h2>Tags</h2>
      <div className="tag-container">
        {htmlForTagNames}
      </div>
      {htmlForTaggedComments}
    </div>
  )
}

export default Tags