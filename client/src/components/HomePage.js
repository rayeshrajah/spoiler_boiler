import React, { useState } from "react";
import "../styles/HomePage.scss";
import Button from "./Button";
import SearchResults from "./SearchResults";
import CreateVideoForm from "./CreateVideoForm";

export default function HomePage(props) {
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("")
  const [show, setShow] = useState(true)
  const [createForm, setCreateForm] = useState(false)
  /*Ask mentor tommmorow about this situation */
  //console.log('this is the final search: ', finalSearch)

  function handleChange(event) {
    setSearch(event.target.value)
    setShow(true)
    setFinalSearch("")
  }

  return (
    <div>
      <div className="homepage">
        <input
          className="search-video"
          placeholder="WATCH"
          name="search"
          value={search}
          onChange={(event) => handleChange(event)}
        />
        <div className="homepage-buttons">
          <Button
            search
            onClick={() => {
              setFinalSearch(search)
              setSearch("")
            }}>
            BOILER
          </Button>
          <Button 
            search
            onClick={() => setCreateForm(!createForm)}
          >
            CREATE
          </Button>
        </div>
      </div>
      {finalSearch != "" && <SearchResults 
                                results={finalSearch} 
                                videosApi={props.videosApiData} 
                                focusedVideo={props.focusedVideo}
                                videoIdFocused={props.videoIdFocused}
                                setShow={setShow}
                                show={show}
                                />}
      {createForm && <CreateVideoForm setCreateForm={setCreateForm} addVideoToDatabase={props.addVideoToDatabase}/>}
    </div>
  );
}