import React from 'react'
import '../styles/CommentForm.scss'

function CommentForm() {
  return (
    <div className="comment-form-master-container">
      <div className="comment-form"> 
          <img src="https://www.placecage.com/300/300"/>
          <input type="text" placeholder="Go ahead and spoil something!"/>
      </div>
      <button className="comment-button">SPOILER</button>
    </div>
  )
}

export default CommentForm