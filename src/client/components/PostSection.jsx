import React from 'react';
import Post from './Post';

const PostSection = (props) => {
  // array of posts by status
  const { notStarted, inProgress, closed } = props;
  // handlers
  const { changeStatus } = props; 
  // user info
  const { name, role } = props;

  //css style for containers
  const style = {
    postContainer: {
      // display: 'flex',
      // height: '800px',
      // width: '100%',
      borderTop: '6px solid rgb(85, 85, 85)',
      backgroundColor: 'rgb(226, 226, 226)'
    },
    postRow: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      // height: '350px',
      // width: '100%',
      borderTop: '3px solid rgb(85, 85, 85)',
      backgroundColor: 'rgb(185, 185, 185)',
      boxShadow: '3px 6px #888888'
    },
    postRowClosed: {
      height: '300px',
      width: '100%',
      borderTop: '3px solid rgb(85, 85, 85)',
      backgroundColor: 'rgb(185, 185, 185)',
      boxShadow: '3px 6px #888888'
    }
  }

  //iterate through each notStarted post and create component
  const notStartedComponents = notStarted.map((post, index) => {
    return <Post
      key={index}
      name={name}
      role={role}
      createdBy={post.createdby}
      resolvedBy={post.resolvedby}
      problem={post.problem}
      expect={post.expect}
      tried={post.tried}
      suspect={post.suspect}
      topic={post.topic}
      status={post.status}
      changeStatus={changeStatus}
      helperid = {post.helperid}
      studentid = {post.studentid}
      statusid = {post.statusid}
      postid = {post.postid}
      />
  });
  //iterate through each notStarted post and create component
  const inProgressComponents = inProgress.map((post, index) => {
    return <Post
      key={index}
      name={name}
      role={role}
      createdBy={post.createdby}
      resolvedBy={post.resolvedby}
      problem={post.problem}
      expect={post.expect}
      tried={post.tried}
      suspect={post.suspect}
      topic={post.topic}
      status={post.status}
      changeStatus={changeStatus}
      helperid = {post.helperid}
      studentid = {post.studentid}
      statusid = {post.statusid}
      postid = {post.postid}
      />
  });
  //iterate through each notStarted post and create component
  const closedComponents = closed.map((post, index) => {
    return <Post
      key={index}
      name={name}
      role={role}
      createdBy={post.createdby}
      resolvedBy={post.resolvedby}
      problem={post.problem}
      expect={post.expect}
      tried={post.tried}
      suspect={post.suspect}
      topic={post.topic}
      status={post.status}
      changeStatus={changeStatus}
      helperid = {post.helperid}
      studentid = {post.studentid}
      statusid = {post.statusid}
      postid = {post.postid}
      />
  });


  // ** (CSS) class postRowClosed should be shorter than postRow**
  return (
    <div style={ style.postContainer }>
      <div style={ style.postRow }>
        { notStartedComponents }
      </div>
      <div style={ style.postRow }>
        { inProgressComponents }
      </div>
      <div style={ style.postRowClosed }> 
        { closedComponents }
      </div>
    </div>
  )
}

export default PostSection