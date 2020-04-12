import React from 'react'
import '../styles/Comments.scss'

function Comments(props) {

  let commentsSortedByTimeAscending = props.messages.sort((a, b) => a.timestamp - b.timestamp)

  let htmlForCommentMessages = commentsSortedByTimeAscending.map(message => {
    return (
      <div 
        key={message.timestamp} 
        className="individual-comment" 
        style={message.timestamp <= props.progressInSeconds ? {display: "flex"} : {display: "none"}}
      >
        <img src="https://www.placecage.com/300/300"/>
        <p>{message.comment} @{message.timestamp} sec</p>
      </div>
      )
    })

  return (
    <div className="comments-master-container">
      {htmlForCommentMessages}
    </div>
  )
}

export default Comments