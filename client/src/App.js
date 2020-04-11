import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Navbar from './components/Navbar'

function App() {
  const [state, setState] = useState(
    {
      users: {},
      videos: {},
      comments: {}
    }
    )
    
    useEffect(() => {
      const userApi = axios.get('/users')
      const videoApi = axios.get('/videos')
      const commentApi = axios.get('/comments')
      
      Promise.all([userApi, videoApi, commentApi])
      .then(all => setState(() => ({
        users: all[0].data, 
        videos: all[1].data, 
        comments: all[2].data})))
      },[])
    
  return (
    <Navbar />
  );
}

export default App;
