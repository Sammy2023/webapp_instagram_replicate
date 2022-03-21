import React from 'react';

function Post(props){
  console.log(props.post);
  const {user, post, likes} = props;
  const likeIcon = likes.self ? "https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/unlike.svg?v=1647287055039" : "https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/like.svg?v=1647286978336";
  return (
    <div>
      <div>
        <img src={user.photo}/>
        {user.id}
      </div>
      <div>
        <img src={likeIcon} />
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/comment.svg?v=1647286950412"/> 
      </div>
      <div>
        {likes.count} Likes
      </div>
      <div>
        <img src={post.photo}/>
      </div>
    </div>
  );
}

export default Post;