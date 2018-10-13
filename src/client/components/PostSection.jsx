import React from 'react';

export const PostSection = (props) => {
  // array of posts by status
  const { notStarted, inProgress, closed } = props;
  // handlers
  const { updateStatus } = props; 
  // user info
  const { name, role } = props;

  //iterate through each notStarted post and create component
  const notStartedComponents = notStarted.map((post, index) => {
    return <Post
      key={index}
      name={name}
      role={role}
      createdBy={post.createdBy}
      resolvedBy={post.resolvedBy}
      problem={post.problem}
      expect={post.expect}
      tried={post.tried}
      suspect={post.suspect}
      topic={post.topic}
      status={post.status}
      updateStatus={updateStatus}
      />
  });
  //iterate through each notStarted post and create component
  const inProgressComponents = inProgress.map((post, index) => {
    return <Post
      key={index}
      name={name}
      role={role}
      createdBy={post.createdBy}
      resolvedBy={post.resolvedBy}
      problem={post.problem}
      expect={post.expect}
      tried={post.tried}
      suspect={post.suspect}
      topic={post.topic}
      status={post.status}
      updateStatus={updateStatus}
      />
  });
  //iterate through each notStarted post and create component
  const closedComponents = closed.map((post, index) => {
    return <Post
      key={index}
      name={name}
      role={role}
      createdBy={post.createdBy}
      resolvedBy={post.resolvedBy}
      problem={post.problem}
      expect={post.expect}
      tried={post.tried}
      suspect={post.suspect}
      topic={post.topic}
      status={post.status}
      updateStatus={updateStatus}
      />
  });


  // ** (CSS) class postRowClosed should be shorter than postRow**
  return (
    <div className='postContainer'>
      <div className='postRow'>
        {notStartedComponents}
      </div>
      <div className='postRow'>
        {inProgressComponents}
      </div>
      <div className='postRowClosed'> 
        {closedComponents}
      </div>
    </div>
  )
}
