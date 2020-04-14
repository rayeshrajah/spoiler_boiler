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

  console.log(search)

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
        <Button
          search
          onClick={() => setFinalSearch(search)}>
          BOILER
        </Button>
        <Button 
          login
          onClick={() => setCreateForm(true)}
        >
          Create
        </Button>
      </div>
      {finalSearch != "" && <SearchResults 
                                results={finalSearch} 
                                videosApi={props.videosApiData} 
                                focusedVideo={props.focusedVideo}
                                videoIdFocused={props.videoIdFocused}
                                setShow={setShow}
                                show={show}
                                />}
      {createForm && <CreateVideoForm />}
    </div>
  );
}