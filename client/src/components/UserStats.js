import React from 'react'

export default function UserStats(props){
    console.log(props.comments)
    console.log(props.userId)

    let filteredComments = props.comments.filter(comment => comment.user_id === props.userId)
    

    return(
        null
        )
}