import React from "react";

const CommentDetail = (props) => {
  const srcImage = `https://picsum.photos/400/400?random=${
    Math.random() * 100
  }`;
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={srcImage} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date"> {props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
