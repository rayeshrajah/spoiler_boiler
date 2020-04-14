import React from 'react'
import '../styles/Tags.scss'

function Tags(props) {

  console.log(props.comments)

  function getAllTagNames(commentsData) {
    let tagNames = []
    commentsData.forEach(comment => {
      if (comment.tag !== null && !tagNames.includes(comment.tag))
      tagNames.push(comment.tag)
    })
    return tagNames
  }

  let tagNames = getAllTagNames(props.comments)
  let htmlForTagNames = tagNames.map(tag => {
    return (
    <div className="tag-capsule">
      <div className="tag-capsule-flex">
        {tag}
      </div>
    </div>
    )
  })

  return (
    <div className="tag-master-container">
      <h2>Tags</h2>
      <div className="tag-container">
        {htmlForTagNames}
      </div>
    </div>
  )
}

export default Tags