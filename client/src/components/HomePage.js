import React, { useState } from "react";
import "../styles/HomePage.scss";
import Button from "./Button";
import SearchResults from "./SearchResults";

export default function HomePage(props) {
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("")
  /*Ask mentor tommmorow about this situation */
  //console.log('this is the final search: ', finalSearch)
  return (
    <div>
      <div className="homepage">
        <input
          className="search-video"
          placeholder="WATCH"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button
          search
          onClick={() => setFinalSearch(search)}>
          BOILER
        </Button>
      </div>
      <SearchResults results={finalSearch} videosApi={props.videosApiData} />
    </div>
  );
}