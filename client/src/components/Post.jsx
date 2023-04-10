import React from "react";

const Post = ({ job }) => {
  return (
    <div>
      {job.company.name}
      {job.company.description}
      {job.location}

      <img src={job.company.photo} />
    </div>
  );
};

export default Post;
