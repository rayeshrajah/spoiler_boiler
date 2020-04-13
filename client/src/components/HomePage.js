import React, {useState} from 'react'
import '../styles/HomePage.scss'
import Button from './Button';

export default function HomePage(){
    const [search, setSearch] = useState("")
//     console.log(search)
    return(<div className="homepage">
            <input className="search-video" 
                   placeholder="WATCH"
                   name="search"
                   value={search}
                   onChange={(event) => setSearch(event.target.value)}
                   />
            <Button search onClick={console.log /*Don't forget to put the search results component here*/}>BOILER</Button> 
            </div>);
}