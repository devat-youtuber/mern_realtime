import React from 'react'
import Rating from '../rating/Rating'
import moment from 'moment'
import './CommentCard.css'

function CommentCard({children, comment}) {
    return (
        <div className="comment_card">
            <div className="comment_card_row">
                <h3>{comment.username}</h3>
                {
                    comment.rating !== 0 && <Rating props={comment} />
                }
            </div>

            <span>{moment(comment.createdAt).fromNow()}</span>

            <span>{new Date(comment.createdAt).toLocaleString()}</span>

            <p dangerouslySetInnerHTML={{__html: comment.content}} />

            {children}
            
        </div>
    )
}

export default CommentCard
