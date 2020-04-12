import React from 'react'
import '../styles/HomePage.scss'
import Button from './Button';

export default function HomePage(){
    return(<div className="homepage">
            <input className="search-video" 
                  placeholder="WATCH"/>
            <Button search onClick={console.log /*Don't forget to put the search results component here*/}>BOILER</Button> 
            </div>);
}