import React from "react";

const ActivityItem = ({task}) => {
  return (
    <div className="media-body align-self-center">
      <p className="mb-0" >{task.title}</p>
    </div>
  );
};

export default ActivityItem;
