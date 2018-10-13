import React from 'react';

const Post = (props) => {
  //user info
  const { name, role} = props;
  //post info
  const { createdBy, resolvedBy, problem, expect, tried, suspect, topic, status} = props;
  //eventHandlers
  const { updateStatus} = props;

  return(
    <div className='post'>
      <div className='ledger'>
        <p>Created By: {createdBy}</p>
        <p>Resolved By: {resizeBy}</p>
      </div>
      <h2>Problem:</h2>
        <p>{problem}</p>
      <h2>Expect:</h2>
        <p>{expect}</p>
      <h2>Tried:</h2>
        <p>{tried}</p>
      <h2>Suspect:</h2>
        <p>{suspect}</p>
      <div className='footer'>
        <div>topic</div>
        <button className='statusButton' onClick={ () => {}  }> {status} </button>
      </div>
    </div>
  )
}
export default Post;