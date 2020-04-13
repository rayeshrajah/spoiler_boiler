import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Navbar from './components/Navbar'
import SignupForm from './components/SignupForm';
import VideoPlayer from './components/VideoPlayer'
import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';
import CommentForm from './components/CommentForm';

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

  

    return (
      <div>
        <Navbar />
        <HomePage videosApiData={videos}/>
        {!isLoading && <VideoPlayer 
          usersApiData={users} 
          commentsApiData={state.comments} 
          comments={state.comments}
          videosApiData={videos} 
          commentTimestamps={commentTimestamps}
          addCommentToDatabase={addCommentToDatabase}
        />}
      </div>
    );

}

export default App;
