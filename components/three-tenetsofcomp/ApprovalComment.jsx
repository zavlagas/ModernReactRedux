import React from "react";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

function ApprovalComment(params) {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h2>Warning</h2>
        <div>Are You Sure You Want this</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today At 4:45PM"
          comment="Nice Blog Man"
        />
      </ApprovalCard>
    </div>
  );
}

export default ApprovalComment;
