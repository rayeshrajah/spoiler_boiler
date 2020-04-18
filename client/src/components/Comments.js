import React, { useState } from "react";
import "../styles/Comments.scss";
import CommentsGraph from "./CommentsGraph";
import Tags from "./Tags";
import TagGraph from "./TagGraph";
import Avatar from 'react-avatar'

function Comments(props) {
  const [showComponents, setShowComponents] = useState({
    commentsMessage: false,
    tags: false,
    commentGraph: false,
    tagGraph: true
  });
  const { commentsMessage, tags, commentGraph, tagGraph } = showComponents;
  
  function getCommentTimestampsByVideoId(id) {
    let output = [];
    for (let i = 0; i < props.comments.length; i++) {
      if (props.comments[i].video_id === props.videoIdFocused) {
        let commentAndTimestamp = {
          comment: props.comments[i].message,
          timestamp: props.comments[i].timestamp_in_seconds,
          user_id: props.comments[i].user_id
        };
        output.push(commentAndTimestamp);
      }
    }
    return output; // [{comment:"sadasd", timesamp: 12}, {comment:"sadasd", timesamp: 20} ]
  }

  function getUserName(userData, id){
    for(let i = 0; i < userData.length; i++){
      if(userData[i].id === id){
        return userData[i].name;
      }
    }
  }

  let isolatedVideo = getCommentTimestampsByVideoId(props.videoIdFocused);

  let commentsSortedByTimeDescending = isolatedVideo.sort(
    (a, b) => b.timestamp - a.timestamp
  );
    console.log(commentsSortedByTimeDescending)
  let htmlForCommentMessages = commentsSortedByTimeDescending.map(
    (message, index) => {
      return (
        <div
          key={index}
          className="individual-comment"
          style={
            message.timestamp <= props.progressInSeconds
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <Avatar name={getUserName(props.usersApiData, message.user_id)} size={60} round={true}/>
          <p>{message.comment}</p>
          <div className="timestamp-badge-container">
          <span id="timestamp-badge" className="badge badge-danger">@{message.timestamp} sec</span>
          </div>
        </div>
      );
    }
  );
  /* setState({...showComponenet, showComponent[key1] = true, showComponent[key2] = false}) */

  let ourStyles = {
    backgroundColor: "#ff5757",
    color: "rgba(255, 255, 255, 0.653)"
  }

  return (
    <div className="comments-master-container">
      <div className="component-buttons">
        <div>
        <button 
          className="comment-button"
          style={commentsMessage ? ourStyles : {backgroundColor: "white"}}
          onClick={() => {
          setShowComponents({commentsMessage: true, tags: false, commentGraph: false, tagGraph: false})}
        }>
          Comments
        </button>
        </div>
        <button 
          className="comment-button"
          style={commentGraph ? ourStyles : {backgroundColor: "white"}}
          onClick={() => setShowComponents({commentsMessage: false, tags: false, commentGraph: true, tagGraph: false})}
        >
          Comment Graph
        </button>

        <button 
          className="comment-button"
          style={tags ? ourStyles : {backgroundColor: "white"}}
          onClick={() => setShowComponents({commentsMessage: false, tags: true, commentGraph: false, tagGraph: false})}
        >
          Tags
        </button>

        <button 
          className="comment-button"
          style={tagGraph ? ourStyles : {backgroundColor: "white"}}
          onClick={() => setShowComponents({commentsMessage: false, tags: false, commentGraph: false, tagGraph: true})}
        >
          Tag Graph
        </button>
      </div>


      {commentsMessage && htmlForCommentMessages}
      <div>
        
        {commentGraph && (
          <CommentsGraph
            comments={props.comments}
            videoIdFocused={props.videoIdFocused}
          />
        )}

        {tagGraph && (
          <TagGraph
            comments={props.comments}
            videoIdFocused={props.videoIdFocused}
          />
        )}
      </div>
      {tags && (
        <Tags comments={props.comments} videoIdFocused={props.videoIdFocused} userId={props.userId} usersApiData={props.usersApiData} />
      )}
    </div>
  );
}

export default Comments;
