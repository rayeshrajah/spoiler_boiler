import React from 'react'
import '../styles/Comments.scss'

function Comments(props) {

  let commentsSortedByTimeDescending = props.messages.sort((a, b) => b.timestamp - a.timestamp)

  let htmlForCommentMessages = commentsSortedByTimeDescending.map(message => {
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