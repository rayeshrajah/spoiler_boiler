import React from 'react'
import '../styles/Comments.scss'

function Comments(props) {

  console.log(props.messages)

  let htmlForCommentMessages = props.messages.map(message => {
    return (
      <div className="individual-comment">
        <img src="https://www.placecage.com/300/300"/>
        <p>{message}</p>
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