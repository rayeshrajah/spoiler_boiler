import React, { useRef, useState } from 'react'
import '../styles/VideoPlayer.scss';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

// const video = document.querySelector('.video')
const timelineBar = document.querySelector('.timeline-bar')
const btn = document.getElementById('play-pause')

function VideoPlayer() {

  const [state, setState] = useState("")

  const videoRef = useRef(null)
  let playOrPause = state

  function handleClickPlayPause() {
    if (videoRef.current.paused) {
      setState("pause");
      videoRef.current.play()
      let timebarPosition = videoRef.current.duration / videoRef.current.currentTime
      console.log(videoRef.current.duration)
      console.log(videoRef.current.currentTime)
    } else {
      setState("play");
      videoRef.current.pause()
    }
  }

  function getTimebarPosition() {
    if (videoRef.current.paused) {
      let percentage = String(videoRef.current.duration / videoRef.current.currentTime * 100) + "%"
      console.log("this is it ", percentage)
      return "75%"
    }
  }


  return (
    <div className="video-master-container">
      <div className="video-container">
        <video className="video" ref={videoRef}>
          <source src="https://drive.google.com/uc?export=download&id=1LY8gO9cQJOTvyI3Ey7pbg2vWMBAdsEh7" type="video/mp4"></source>
        </video>
        <div className="controls">
          <div className="timeline-container">
            <div className="timeline-bar" style={{width: getTimebarPosition()}}></div>
          </div>
          <div className="buttons">
            <button id="play-pause" className={playOrPause} onClick={handleClickPlayPause}></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer

// https://drive.google.com/open?id=1LR4MZyzXZ8iV7CekZIWKiYWBX9ecJQJo
// client/src/styles/VideoPlayer.scss
// https://drive.google.com/open?id=1Ti8HlzGV8ZUy7
// https://drive.google.com/open?id=1_S8cN4rpQuVJ1ujgb7tjAq5bBjqg1wKc
// https://drive.google.com/open?id=1LY8gO9cQJOTvyI3Ey7pbg2vWMBAdsEh7