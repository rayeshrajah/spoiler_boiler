import React from 'react';

export default function SearchResults(props){
    let regex = new RegExp(props.results, "i")
    let videoData = props.videosApi
    console.log(props.results)
    let count = 0;
    videoData.forEach(element => {
        if(regex.test(element.name)){
            count++;
            console.log(element.name);
        }
    });
    console.log(count);
    return(null
            );
}