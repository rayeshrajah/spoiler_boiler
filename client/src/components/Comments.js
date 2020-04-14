import React from 'react'
import '../styles/Comments.scss'
import CommentsGraph from './CommentsGraph';
import Tags from './Tags'


function Comments(props) {

  function getCommentTimestampsByVideoId(id) {
    let output = [];
    for (let i = 0; i < props.comments.length; i++) {
      if (props.comments[i].video_id === props.videoIdFocused) {
        let commentAndTimestamp = {
          comment: props.comments[i].message,
          timestamp: props.comments[i].timestamp_in_seconds
        }
        output.push(commentAndTimestamp)
      }
    }
    return output // [{comment:"sadasd", timesamp: 12}, {comment:"sadasd", timesamp: 20} ]
  }
  
  let isolatedVideo = getCommentTimestampsByVideoId(props.videoIdFocused)
  
  let commentsSortedByTimeDescending = isolatedVideo.sort((a, b) => b.timestamp - a.timestamp)
  let htmlForCommentMessages = commentsSortedByTimeDescending.map((message, index) => {
    return (
      <div 
      key={index} 
      className="individual-comment" 
      style={message.timestamp <= props.progressInSeconds ? {display: "flex"} : {display: "none"}}
      > 
          <img src="https://www.placecage.com/300/300"/>
          <p>{message.comment}</p>
      </div>
      )
    })

    
  return (
    <div className="comments-master-container">
      {htmlForCommentMessages}
    <CommentsGraph comments={props.comments} videoIdFocused={props.videoIdFocused}/>

      <Tags comments={props.comments}/>
    </div>
    
  )
}

export default Comments