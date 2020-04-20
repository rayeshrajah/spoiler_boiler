import React from "react";
import '../styles/UserStats.scss'
export default function UserStats(props) {
  
let filteredTagObj = {}

let filteredComments = props.comments.filter(
    (comment) => comment.user_id === props.userId
    );

let filteredVideos = props.videosApiData.filter(video => video.user_id === props.userId);

function filteredCommentsByTag(){
    filteredComments.forEach(element => {
        filteredTagObj[element.tag] = 1
    });
    return filteredTagObj
}
filteredCommentsByTag()

let TagCount = Object.keys(filteredTagObj).length

  return (
    <div class="user-stats">
     <p>Comments Made: {filteredComments.length}<br></br> Unique Tags: {TagCount} <br></br> Uploaded Videos: {filteredVideos.length} </p>
    </div>
  );
}
