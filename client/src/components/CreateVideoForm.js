import React, {useState} from 'react'
import axios from 'axios'
import '../styles/CreateVideoForm.scss'

function CreateVideoForm(props) {
  const [videoUrl, setVideoUrl] = useState("")
  const [videoName, setVideoName] = useState("")

  const submitNewVideo = (event) => {
    event.preventDefault()

    return axios.post('/videos', {
      video: {
        "name": videoName,
        "video_url": videoUrl
      }
    })
  }

  return (
    <form id="video-form" onSubmit={submitNewVideo}>

      <div id="video-url-master">
        <div id="video-url--prepend">Video URL</div>
        <label for="video-url"></label>
        <input 
          type="url" 
          class="form-control" 
          id="video-url" 
          placeholder="Video URL"
          value={videoUrl} 
          onChange={(event) => setVideoUrl(event.target.value)}
        />
        <div></div>
      </div>

      <div id="video-name-master">
        <div id="video-name--prepend">Video Name</div>
        <label for="video-name"></label>
        <input 
          type="text" 
          class="form-control" 
          id="video-name" 
          placeholder="Video Name" 
          value={videoName} 
          onChange={(event) => setVideoName(event.target.value)}
        />
        <div></div>
      </div>

      <div id="checkbox-and-add">
        <div id="checkbox-container">
          <input type="checkbox" id="content-creator" />
          <label for="content-creator">Video owner?</label>
        </div>
        <div></div>
        <div>
          <button type="submit">Add Movie</button>
        </div>
      </div>

    </form>
  )
}

export default CreateVideoForm