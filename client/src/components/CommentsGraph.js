import React from "react";
import "../styles/CommentsGraph.scss";
import { Line } from "react-chartjs-2";

export default function CommentsGraph(props) {
  /*We need helper functions to check the video id matches 
    the comments if they do display the chart for that video */
  //step 1: change time_stamps to object keys
  //step 2: fill out that object keys with the matching messages as array
  //step 3: count the the amount of keys showed up
  let timestampObj = {};
  let arrayCommentCount = [];
  let arrayTimestampKeys = [];
  let filteredCommentObj = props.comments.filter(
    (comment) => comment.video_id === props.videoIdFocused
  );

  const timestampData = filteredCommentObj.map(
    (comment) => comment.timestamp_in_seconds
  );

  function timestampKeys() {
    timestampData.forEach((element) => {
      if (!timestampObj[element]) timestampObj[element] = 0;
      timestampObj[element] += Number(1);
    });
    return timestampObj;
  }
  timestampKeys();

  function timestampCommentCount() {
    for (let item in timestampObj) {
      arrayCommentCount.push(timestampObj[item]);
    }
    return arrayCommentCount;
  }
  timestampCommentCount();
  console.log(arrayCommentCount);
  arrayTimestampKeys = Object.keys(timestampObj);
  const commentsData = {
    labels: arrayTimestampKeys,
    datasets: [
      {
        label: "Comments",
        backgroundColor: "rgba(255, 0, 0, 1)",
        borderColor: "rgba(0,0,0,1)",
        pointBackgroundColor: "rgba(196, 196, 196, 1)",
        borderWidth: 2,
        data: arrayCommentCount,
      },
    ],
  };

  return (
    <div>
      <Line
        id="comment-chart"
        data={commentsData}
        options={{
          elements: {
            line: {
              tension: 0,
            },
          },
          title: {
            display: true,
            text: "Amount of Comments per Timestamps",
            fontSize: 20,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
