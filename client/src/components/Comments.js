import React from 'react'
import '../styles/Comments.scss'

function Comments(props) {

  function getCommentTimestampsByVideoId(id) {
    let output = [];
    for (let i = 0; i < props.comments.length; i++) {
      if (props.comments[i].video_id === id) {
        let commentAndTimestamp = {
          comment: props.comments[i].message,
          timestamp: props.comments[i].timestamp_in_seconds
        }
        output.push(commentAndTimestamp)
      }
    }
    return output // [{comment:"sadasd", timesamp: 12}, {comment:"sadasd", timesamp: 20} ]
  }
  let isolatedVideo = getCommentTimestampsByVideoId(2)
  let commentsSortedByTimeDescending = isolatedVideo.sort((a, b) => b.timestamp - a.timestamp)
  let htmlForCommentMessages = commentsSortedByTimeDescending.map(message => {
    return (
      <div 
      key={message.id} 
      className="individual-comment" 
      style={message.timestamp <= props.progressInSeconds ? {display: "flex"} : {display: "none"}}
      > 
          <img src="https://www.placecage.com/300/300"/>
          <p>{message.comment}</p>
      </div>
      )
    })

  console.log(isolatedVideo)
    
  return (
    <div className="comments-master-container">
      {htmlForCommentMessages}
    </div>
  )
}

export default Comments