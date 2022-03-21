import React from 'react';

function Post(props){
  console.log(props.post);
  const {user, post, likes, comments} = props;
  const likeIcon = likes.self ? "https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/unlike.svg?v=1647287055039" : "https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/like.svg?v=1647286978336";
  const commentList = comments.map((comment) => 
     <li key={comment.toString}>
      {comment.userId} {comment.text}
     </li>
  );
  return (
    <div>
      <div>
        <img src={user.photo}/>
        <div>
          {user.id}
        </div>
      </div>
      <div>
        <img src={post.photo}/>
      </div>
      <div>
        <img src={likeIcon} />
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/comment.svg?v=1647286950412"/> 
      </div>
      <div>
        {likes.count} Likes
      </div>
      <div> 
        <ul>
          {commentList}
        </ul>
      </div>
    </div>
  );
}

export default Post;