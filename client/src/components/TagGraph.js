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
  console.log(tagNameArr);
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
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
}
