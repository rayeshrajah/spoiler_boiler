import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Navbar from './components/Navbar'
import VideoPlayer from './components/VideoPlayer'
import HomePage from './components/HomePage';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowDown);

function App() {
  const [state, setState] = useState(
    {
      users: [],
      videos: [],
      comments: [],
      isLoading: true
    }
  )
  
  const [videoUrl, setVideoUrl] = useState("")
  const [videoIdFocused, setVideoIdFocused] = useState()

  const {users, videos, comments, isLoading} = state
  let commentTimestamps = [];
  comments.forEach(comment => commentTimestamps.push(comment.timestamp_in_seconds))

    
    useEffect(() => {
      const userApi = axios.get('/users')
      const videoApi = axios.get('/videos')
      const commentApi = axios.get('/comments')
      
      Promise.all([userApi, videoApi, commentApi])
      .then(all => {setState({
        users: all[0].data, 
        videos: all[1].data, 
        comments: all[2].data,
        isLoading: false
        })
        console.log(JSON.stringify(all))})

      },[])

      function addCommentToDatabase(comment) {
        axios.post('/comments', {comment})
        .then(() => {
          setState({...state, comments: [...state.comments, comment]})
        })
        .then(() => {
          axios.get('/comments').then(response => setState({...state, comments: response.data}))
        })
        .catch(error => console.log(error))
      }


      function addVideoToDatabase(video) {
        axios.post('/videos', {video})
        .then(() => {
          setState({...state, videos: [...state.videos, video]})
        })
        .then(() => {
          axios.get('/videos').then(response => setState({...state, videos: response.data}))
        })
      }

      // console.log(comments)

    return (
      <div>
        <Navbar />
        <HomePage 
          videosApiData={videos}
          focusedVideo={setVideoUrl}
          videoIdFocused={setVideoIdFocused}
          addVideoToDatabase={addVideoToDatabase}
        />

        <div className="entire-video-component">
          {!isLoading && <VideoPlayer 
            usersApiData={users} 
            commentsApiData={state.comments} 
            comments={state.comments}
            videosApiData={videos} 
            commentTimestamps={commentTimestamps}
            addCommentToDatabase={addCommentToDatabase}
            focusedVideo={videoUrl}
            videoIdFocused={videoIdFocused}
          />}
        </div>
      </div>
    );

}

export default App;
