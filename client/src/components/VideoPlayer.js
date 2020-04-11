import React from 'react'
import '../styles/VideoPlayer.scss';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'


function VideoPlayer() {
  return (
    <div className="video-master-container">
      <div className="video-container">
        <video className="video">
          <source src="https://drive.google.com/uc?export=download&id=1LR4MZyzXZ8iV7CekZIWKiYWBX9ecJQJo" type="video/mp4"></source>
        </video>
        <div className="controls">
          <div className="timeline-container">
            <div className="timeline-bar"></div>
          </div>
          <div className="buttons">
            <button id="play-pause"></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer

// https://drive.google.com/open?id=1LR4MZyzXZ8iV7CekZIWKiYWBX9ecJQJo
// client/src/styles/VideoPlayer.scss