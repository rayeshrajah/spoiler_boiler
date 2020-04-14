import React, {useState} from 'react'
import axios from 'axios'

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
    <form onSubmit={submitNewVideo}>
      <div class="form-group">
        <label for="video-url">Video URL</label>
        <input 
          type="url" 
          class="form-control" 
          id="video-url" 
          placeholder="Video URL"
          value={videoUrl} 
          onChange={(event) => setVideoUrl(event.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="video-name">Video Name</label>
        <input 
          type="text" 
          class="form-control" 
          id="video-name" 
          placeholder="Video Name" 
          value={videoName} 
          onChange={(event) => setVideoName(event.target.value)}
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="content-creator" />
        <label class="form-check-label" for="content-creator">Video owner?</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}

export default CreateVideoForm