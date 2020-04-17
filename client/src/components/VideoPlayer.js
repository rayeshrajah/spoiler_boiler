import React, { useState, useRef } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import ReactPlayer from 'react-player'
import '../styles/VideoPlayer.scss'
import Comments from './Comments'
import CommentForm from './CommentForm'
 
function VideoPlayer(props) {
  const [progress, setProgress] = useState("")
  const [progressInSeconds, setProgressInSeconds] = useState(0)
  const [timestamp, setTimestamp] = useState(props.commentTimestamps)
  const [videoDuration, setVideoDuration] = useState(0)
  const reactPlayerLib = useRef(null)

  // ================ stuff for videoplayer component below =========
  
  function getCommentTimestampsByVideoId(id) {
    let output = [];
    for (let i = 0; i < props.commentsApiData.length; i++) {
      if (props.commentsApiData[i].video_id === props.videoIdFocused) {
        output.push({
          timestamp: props.commentsApiData[i].timestamp_in_seconds,
          message: props.commentsApiData[i].message
        })
      }
    }
    return output // [{timeS: 1, messg: ""}, 23, 45]
  }

  let counterObj = {}
  getCommentTimestampsByVideoId(props.videoIdFocused).forEach(item => {
    if (!counterObj[item.timestamp]) {
      counterObj[item.timestamp] = 1
    } else {
      counterObj[item.timestamp] ++
    }
  })
  
  // for testing purposes (harcoded to get comments from video_id 2)
  let timestampsForVideo = getCommentTimestampsByVideoId(props.videoIdFocused)
  
  let htmlForCommentTimestamps = timestampsForVideo.map((timestamp, index) => {
    return (
      <Tippy content={`${timestamp.message} @ ${timestamp.timestamp} sec`}>
        <div 
          key={index} 
          className="comment-ticks" 
          style={{
            left: String(Math.floor((timestamp.timestamp / videoDuration) * 100) + "%"),
            // height: (String(counterObj[timestamp.timestamp] + 10) + "px")
            backgroundColor: (counterObj[timestamp.timestamp] > 5 ? "red" : counterObj[timestamp.timestamp] >= 3 ? "#3dd93d" : "blue")
          }}
        >
        </div>
      </Tippy>
      )
    })

  // ================ stuff for VideoPlayer component avove =========
  // ================ stuff for Comments component below ============
  


  // for testing purposes (harcoded to get comments from video_id 2)
  // let messagesFromVideo2 = getAllCommentMessagesByVideoId(2)

  // ================ stuff for Comments component above ============

  function retrieveKeysFromOnProgress(obj) {
    setProgress(Math.floor(obj.played * 100) + "%")
    setProgressInSeconds(Math.floor(obj.playedSeconds))
  }
  
  return (
    <div className="video-master">
      <div className="video-container">
        <ReactPlayer
          ref={reactPlayerLib}
          className="video" 
          url={props.focusedVideo} 
          playing={false}
          controls
          onProgress={(obj) => retrieveKeysFromOnProgress(obj)}
          onDuration={(duration) => setVideoDuration(duration)}
          volume={0}
        />
      </div>


      <div className="spoiler-timebar-master">
        <div className="spoiler-bar">
          <div className="spoiler-time" style={{width: String(progress)}}>
            {htmlForCommentTimestamps}
          </div>
        </div>
      </div>

      <Comments 
        comments={props.comments} // [{}, {}]
        progressInSeconds={progressInSeconds}
        videoIdFocused={props.videoIdFocused}
        userId={props.userId}
        usersApiData={props.usersApiData}
        />

      <CommentForm 
        userId={props.userId}
        usersApiData={props.usersApiData}
        videoIdFocused={props.videoIdFocused}
        progressInSeconds={progressInSeconds} 
        addCommentToDatabase={props.addCommentToDatabase}
        commentsApiData={props.commentsApiData}
      />
    </div>
  )
}

export default VideoPlayer
