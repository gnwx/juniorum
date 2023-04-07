import React from "react";

const Post = ({ job }) => {
  return (
    <div>
      {job.company.name}
      {job.company.description}
      <img src={job.company.photo} />
    </div>
  );
};

export default Post;
