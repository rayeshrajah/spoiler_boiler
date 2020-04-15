import React, { useState } from "react";
import "../styles/Comments.scss";
import CommentsGraph from "./CommentsGraph";
import Tags from "./Tags";
import TagGraph from "./TagGraph";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Comments(props) {
  const [showComponents, setShowComponents] = useState({
    commentsMessage: true,
    tags: false,
    commentGraph: false,
    tagGraph: false,
    selected: false
  });
  const { commentsMessage, tags, commentGraph, tagGraph, selected } = showComponents;
  function getCommentTimestampsByVideoId(id) {
    let output = [];
    for (let i = 0; i < props.comments.length; i++) {
      if (props.comments[i].video_id === props.videoIdFocused) {
        let commentAndTimestamp = {
          comment: props.comments[i].message,
          timestamp: props.comments[i].timestamp_in_seconds,
        };
        output.push(commentAndTimestamp);
      }
    }
    return output; // [{comment:"sadasd", timesamp: 12}, {comment:"sadasd", timesamp: 20} ]
  }

  let isolatedVideo = getCommentTimestampsByVideoId(props.videoIdFocused);

  let commentsSortedByTimeDescending = isolatedVideo.sort(
    (a, b) => b.timestamp - a.timestamp
  );
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
          <img src="https://www.placecage.com/300/300" />
          <p>{message.comment}</p>
        </div>
      );
    }
  );
  /* setState({...showComponenet, showComponent[key1] = true, showComponent[key2] = false}) */

  let ourStyles = {
    backgroundColor: "pink"
  }

  return (
    <div className="comments-master-container">
      <div className="component-buttons">
        <div>
        <button 
          className="comment-button"
          style={selected ? ourStyles : {backgroundColor: "white"}}
        onClick={() => {
          setShowComponents({commentsMessage: true, tags: false, commentGraph: false, tagGraph: false, selected: true})}
        }>
          Comments
        </button>
        </div>
        {<Button lineGraph onClick={() => setShowComponents({commentsMessage: false, tags: false, commentGraph: true, tagGraph: false})}>Comment Graph</Button>}

        <Button tags onClick={() => setShowComponents({commentsMessage: false, tags: true, commentGraph: false, tagGraph: false})}>Tags</Button>
        {<Button barGraph onClick={() => setShowComponents({commentsMessage: false, tags: false, commentGraph: false, tagGraph: true})}>Tag Graph</Button>}
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
        <Tags comments={props.comments} videoIdFocused={props.videoIdFocused} />
      )}
    </div>
  );
}

export default Comments;
