import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Navbar from './components/Navbar'
import SignupForm from './components/SignupForm';
import VideoPlayer from './components/VideoPlayer'
import HomePage from './components/HomePage';
import Tags from './components/Tags'

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
      },[comments])
  

    return (
      <div>
        <Navbar />
        <HomePage />
        {!isLoading && <VideoPlayer 
          usersApiData={users} 
          commentsApiData={comments} 
          videosApiData={videos} 
          commentTimestamps={commentTimestamps}
        />}
        <Tags taggedComments={comments}/>
      </div>
    );

}

export default App;
