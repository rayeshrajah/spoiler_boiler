import React, {useState} from 'react'
import '../styles/CreateVideoForm.scss'
import Button from './Button'

function CreateVideoForm(props) {
  const [videoUrl, setVideoUrl] = useState("")
  const [videoName, setVideoName] = useState("")

  const submitNewVideo = (event) => {
    event.preventDefault()
    let videoObj = {
      "name": videoName,
      "video_url": videoUrl 
    }
    props.addVideoToDatabase(videoObj)
    props.setCreateForm(false)
  }

  return (
    <div className="video-form-master-container">
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
        
      </div>

        <Button createVideo type="submit" className="button-submit">
            <iframe
              title="flame-gif" 
              src="https://gifer.com/embed/GlIU"
              id="fire-gif"
            >
            </iframe>
        </Button>
          
    </form>
    </div>
  )
}

export default CreateVideoForm