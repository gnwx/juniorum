import React from "react";

const Post = ({ job }) => {
  return (
    <div>
      {job.company.name}
      {job.company.description}
    </div>
  );
};

export default Post;
