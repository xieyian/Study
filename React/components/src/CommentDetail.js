import React from 'react';
 
const CommentDetail = props => {
    return (
        <div className="comment">
                 <a hrf="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content"> 
                    <a href="/" className="author">
                        {props.name}
                    </a>
                <div className="metadata">
                    <span className="data">{props.timeAgo}</span>
                </div>
    <div className="text">{props.content}</div>
                </div>
            </div>
    );
};

export default CommentDetail;
