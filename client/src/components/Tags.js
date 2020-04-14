import React from 'react'

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
    <div className="tag-capsule">{tag}</div>
    )
  })

  return (
    <div className="tage-container">
      {htmlForTagNames}
    </div>
  )
}

export default Tags