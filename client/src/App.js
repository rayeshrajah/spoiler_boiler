import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import axios from 'axios'
import VideoPlayer from './components/VideoPlayer'

function App() {
  const [state, setState] = useState(
    {
      users: [],
      videos: [],
      comments: [],
      isLoading: true
    }
    )
    const {users, videos, comments, isLoading} = state
    let commentTimestamps = [];
    comments.forEach(comment => commentTimestamps.push(comment.timestamp_in_seconds))

    
    useEffect(() => {
      const userApi = axios.get('/users')
      const videoApi = axios.get('/videos')
      const commentApi = axios.get('/comments')
      
      Promise.all([userApi, videoApi, commentApi])
      .then(all => setState({
        users: all[0].data, 
        videos: all[1].data, 
        comments: all[2].data,
        isLoading: false
        }))
      },[])
  

    return (
      <div>
        {!isLoading && <VideoPlayer 
          usersApiData={users} 
          commentsApiData={comments} 
          videosApiData={videos} 
          commentTimestamps={commentTimestamps}
        />}
      </div>
    );

}

export default App;
