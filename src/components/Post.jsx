import React from 'react';
import css from "../styles/Post.module.css";
import timestamp from "../util/timespan.js"

function Post(props){
  
  const {user, post, likes, comments} = props;
  
  const likeIcon = likes.self ? "https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/unlike.svg?v=1647287055039" : "https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/like.svg?v=1647286978336";
  console.log("comments : " + comments);
  const commentList = comments.map((comment) => 
     <li key={comment.userId}>
      <b>{comment.userId}</b> {comment.text}
     </li>
  );
  return (
    <div clasName={css.postContainer}>
      <div  className={css.userBar}>
        <img src={user.photo}/>
        <div>
          {user.id}
        </div>
      </div>
      <div className={css.postPhoto}>
        <img src={post.photo}/>
      </div>
      <div className={css.reactionBox}>
        <div className={css.likeAndComment}>
          <button>
            { likes.self ? 
              <img onClick={handleUnlike} src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/unlike.svg?v=1647287055039" />: 
              <img onClick={handleLike} src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/like.svg?v=1647287055039" /> 
            } 
          </button>
          <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/comment.svg?v=1647286950412"/> 
        </div>
        <div className={css.likeCount}>
          <b> {likes.count} likes</b>
        </div>
       <div>
          <b>{post.userId}</b> {post.desc}
        </div>
        <div className={css.commentlist}> 
          <ul>
            {commentList}
          </ul>
        </div>
        <div className={css.timeStamp}> 
          {timestamp(post.datetime)}
        </div>
      </div>
    </div>
  );
}

export default Post;