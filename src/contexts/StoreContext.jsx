import React, { createContext, useState, useEffect } from "react";
import initialStore from "../util/initialStore.js";
import uniqueId from "../util/uniqueId.js";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

  //create an auth object
  const auth = getAuth(app);

  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // find the user ID (see below)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message; // print these to see what the error is
        //set current user to null
      });
  }

  async function findUserByEmail(email) {
    // get users collection
    const usersRef = collection(db, "users");
    // query the collection to find the user with the email address
    const q = query(usersRef, where("email", "==", email));
    // execute the query using getDocs
    const querySnapshot = await getDocs(q);

    // get the user id from the first document (there should be one matched user)
    const userId = querySnapshot.docs[0].data().id;

    setCurrentUserId(userId);
  }
  findUserByEmail(user.email);

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
    async function loadUsers() {
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
    async function loadPosts() {
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
    // localStorage.setItem("likes", JSON.stringify(likes));
    async function loadLikes() {
      const likesRef = collection(db, "likes");
      const querySnapshot = await getDocs(likesRef);

      const likes = querySnapshot.docs.map((docSnapshot) => {
        return docSnapshot.data();
      });
      setLikes(likes);
    }
    loadLikes();
  }, []);

  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || initialStore.comments
  );

  useEffect(() => {
    // localStorage.setItem("likes", JSON.stringify(likes));
    async function loadComments() {
      const commentsRef = collection(db, "comments");
      const querySnapshot = await getDocs(commentsRef);

      const comments = querySnapshot.docs.map((docSnapshot) => {
        return docSnapshot.data();
      });
      setComments(comments);
    }
    loadComments();
  }, []);

  const [followers, setFollowers] = useState(
    JSON.parse(localStorage.getItem("followers")) || initialStore.followers
  );

  useEffect(() => {
    // localStorage.setItem("likes", JSON.stringify(likes));
    async function loadFollowers() {
      const followersRef = collection(db, "followers");
      const querySnapshot = await getDocs(followersRef);

      const followers = querySnapshot.docs.map((docSnapshot) => {
        return docSnapshot.data();
      });
      setFollowers(followers);
    }
    loadFollowers();
  }, []);

  function addLike(postId) {
    const like = {
      userId: currentUserId,
      postId,
      datetime: new Date().toISOString(),
    };

    setLikes(likes.concat(like));
    async function addLikeToFireStore(like) {
      try {
        const likeRef = collection(db, likes);
        const like = await addDoc(likeRef, like);
      } catch (e) {
        console.error("Error adding like", e);
      }
    }
    addLikeToFireStore(like);
  }

  function removeLike(postId) {
    setLikes(
      likes.filter(
        (like) => !(like.userId === currentUserId && like.postId === postId)
      )
    );
    async function removeLikeFromFireStore(postId, currentUserId) {
      const likeRef = collection(db, "likes");

      const q = query(
        likeRef,
        where("userId", "==", currentUserId),
        where("postId", "==", postId)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => deleteDoc(doc.ref));
    }
    removeLikeFromFireStore(postId, currentUserId);
  }

  function addComment(postId, text) {
    const comment = {
      userId: currentUserId,
      postId,
      text,
      datetime: new Date().toISOString(),
    };

    setComments(comments.concat(comment));

    async function addCommentToFireStore(comment) {
      try {
        const commentRef = collection(db, comments);
        const comment = await addDoc(commentRef, comment);
      } catch (e) {
        console.error("Error adding comment", e);
      }
    }
    addCommentToFireStore(comment);
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
    async function addPostToFireStore(post) {
      try {
        const postRef = collection(db, posts);
        const post = await addDoc(postRef, post);
      } catch (e) {
        console.error("Error adding post", e);
      }
    }
    addPostToFireStore(post);
    setPage("home");
  }

  function addFollower(userId, followerId) {
    // use concat
    const follower = {
      userId: userId,
      followerId: followerId,
    };
    setFollowers(followers.concat(follower));
    async function addFollowerToFireStore(follower) {
      try {
        const followerRef = collection(db, followers);
        const follower = await addDoc(followerRef, follower);
      } catch (e) {
        console.error("Error adding follower", e);
      }
    }
    addFollowerToFireStore(follower);
    setPage("home");
  }

  function removeFollower(userId, followerId) {
    // use filter
    console.log(followers);
    setFollowers(
      followers.filter(
        (follower) =>
          !(follower.userId == userId && follower.followerId == followerId)
      )
    );
    console.log(followers);

    async function removeFollowerFromFireStore(userId, followerId) {
      const followerRef = collection(db, "followers");

      const q = query(
        followerRef,
        where("userId", "!=", userId),
        where("followerId", "!=", followerId)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => deleteDoc(doc.ref));
    }
    removeFollowerFromFireStore(userId, followerId);
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
