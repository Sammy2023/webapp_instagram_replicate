import React, { createContext, useState, useEffect } from "react";
import initialStore from "../util/initialStore.js";
import uniqueId from "../util/uniqueId.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";

// export the context so that other components can import it
export const StoreContext = createContext();

function StoreContextProvider(props) {
  const firebaseConfig = {
    apiKey: "AIzaSyBzJz6UoJ2_TczcZeHXp4ZHhzQPL-gw7T8",
    authDomain: "mywebproject-cb235.firebaseapp.com",
    projectId: "mywebproject-cb235",
    storageBucket: "mywebproject-cb235.appspot.com",
    messagingSenderId: "716934953972",
    appId: "1:716934953972:web:d050c758a0346bb292d7a1",
    measurementId: "G-DZQVL0RMN4",
  };
  
    const app = initializeApp(firebaseConfig);

  // get the firestore database instance
  const db = getFirestore(app);


  // aync function addLikeToFireStore(Like)
  // {
  // try{
  // const likeRef = collection ( db, likes);
  // const like = await addDoc(likeRef, like);
  //
  // } catch(e) {
  //   console.error("Error adding like", e)
  // }
  //}
  // addLikeToFireStore(like);

  //   async function removeLikeFromFireStore(postId, currentUserId){
  //     const likeRef = collection(db, "likes");

  //     const q = query(likeRef, where("userId", "==", currentUserId), where("postId", "==", postId) )
  //     const querySnapshot = await getDocs(q);

  //     querySnapshot.forEach((doc) => deleteDoc(doc.ref));

  //   }
  //   removeLikeFromFireStore(postId, currentUserId);

  // Initialize Firebase
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("page")) || "home"
  );
  const [currentUserId, setCurrentUserId] = useState(
    JSON.parse(localStorage.getItem("currentUserId")) ||
      initialStore.currentUserId
  );
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || initialStore.users
  );
  // const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || initialStore.users);
  useEffect(() => {
    async function loadUsers(){
      const usersRef = collection(db, "users");
      const querySnapshot = await getDocs(usersRef);
      const users = querySnapshot.docs.map((docSnapshot) => {
        return docSnapshot.data();
      });
      setUsers(users);
    }
    loadUsers();
  }, []);

  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || initialStore.posts
  );
  useEffect(() => {
    async function loadPosts(){
      const postsRef = collection(db, "posts");
      const querySnapshot = await getDocs(postsRef);
      
      const posts = querySnapshot.docs.map((docSnapshot) => {
        return docSnapshot.data();
      });
      setPosts(posts);
    }
    loadPosts();
  }, []);
  
  
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem("likes")) || initialStore.likes
  );
  
   useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);
  

  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || initialStore.comments
  );
  const [followers, setFollowers] = useState(
    JSON.parse(localStorage.getItem("followers")) || initialStore.followers
  );


  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    localStorage.setItem("followers", JSON.stringify(followers));
  }, [followers]);

  function addLike(postId) {
    const like = {
      userId: currentUserId,
      postId,
      datetime: new Date().toISOString(),
    };

    setLikes(likes.concat(like));
  }

  function removeLike(postId) {
    setLikes(
      likes.filter(
        (like) => !(like.userId === currentUserId && like.postId === postId)
      )
    );
  }

  function addComment(postId, text) {
    const comment = {
      userId: currentUserId,
      postId,
      text,
      datetime: new Date().toISOString(),
    };

    setComments(comments.concat(comment));
  }

  function addPost(photo, desc) {
    const post = {
      userId: currentUserId,
      id: uniqueId("post"),
      datetime: new Date().toISOString(),
      photo: photo,
      desc: desc,
    };

    setPosts(posts.concat(post));
    setPage("home");
  }

  function addFollower(userId, followerId) {
    // use concat
    setFollowers(followers.concat({ userId, followerId }));
  }

  function removeFollower(userId, followerId) {
    // use filter
    setFollowers(followers.filter((follower) => follower.userId != followerId));
  }

  return (
    <StoreContext.Provider
      value={{
        page,
        users,
        currentUserId,
        posts,
        likes,
        comments,
        followers,
        addLike,
        removeLike,
        addComment,
        addPost,
        addFollower,
        removeFollower,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider; // export this component as default
