import React from "react";
import { Bar } from "react-chartjs-2";

export default function TagGraph(props) {
  let arrTagValues = [];
  let tagObject = {};

  let filteredCommentObj = props.comments.filter(
    (comment) => comment.video_id === props.videoIdFocused
  );

  const getTagsForVideo = filteredCommentObj.map((comment) => comment.tag);

  let fillTagObject = function () {
    getTagsForVideo.forEach((element) => {
      if (!tagObject[element]) tagObject[element] = 0;
      tagObject[element] += Number(1);
    });
    return tagObject;
  };
  fillTagObject();

  let countEachTag = function () {
    for (const item in tagObject) {
      arrTagValues.push(tagObject[item]);
    }
    return arrTagValues;
  };
  countEachTag();

  let tagNameArr = Object.keys(tagObject);
  let tagData = {
    labels: tagNameArr,
    datasets: [
      {
        label: "Tags",
        backgroundColor: "rgba(255, 0, 0, 1)",
        borderColor: "rgba(0,0,0,1)",
        pointBackgroundColor: "rgba(196, 196, 196, 1)",
        borderWidth: 2,
        data: arrTagValues,
      },
    ],
  };
  return (
    <Bar
      data={tagData}
      options={{
        title: {
            display: true,
            text: "Name Tags per video",
            fontSize: 23,
            fontColor: "#000"
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: "transparent",
                display: true,
                drawBorder: false,
                zeroLineColor: "#000",
                zeroLineWidth: 5
              },
              ticks: {
                fontColor: "#000",
                fontSize: 15
              }
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: "transparent",
                display: true,
                drawBorder: false,
                zeroLineColor: "#fff",
                zeroLineWidth: 5
              },
              ticks: {
                beginAtZero: true,
                fontSize: 15,
                fontColor: "#000",
                callback: function (value) { if (Number.isInteger(value)) { return value; } },
                stepSize: 1
              },
            },
          ],
        },
      }}
    />
  );
}
