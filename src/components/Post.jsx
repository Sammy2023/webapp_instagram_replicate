import React from 'react';

function Post(props){
  console.log(props.post);
  const {user, post, likes} = props;
  return <div> Post <img src={post.photo}/></div>
}

export default Post;