import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./components/category";
import Menusection from "./components/menuSection";
import Navbar from "./components/navbar";
import PostSection from "./components/postSection";
import ShopSection from "./components/shopSection";
import VideoSection from "./components/videoSection";
import Profile from "./components/profile";
import NoMatch from "./components/noMatch";
import FriendsList from "./components/friendNames";
import Message from "./components/message/message";
import Message1 from "./components/message/message1";
import Message2 from "./components/message/message2";
import Message3 from "./components/message/message3";
import Message4 from "./components/message/message4";
import VideoCategory from "./components/videoCategory";
import PostCategory from "./components/postCategory";
import ShopCategory from "./components/shopCategory";
import Login from "./components/login";
import SignUp from "./components/signup";
import db from "./config/firebase"
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users)
  useEffect(
    () =>
    onSnapshot(collection(db, "user"),(snapshot) => 
      setUsers(snapshot.docs.map((doc) => doc.data()))
      ), 
    []
  );

  return (
    <div className="body">
      <Navbar/>
      <Menusection/>
      <Routes>
        <Route path="Login" element={<Login users={users}/>}/>
        <Route path="SignUp" element={<SignUp/>} />
        <Route path="category" element={<Category />}></Route>
        <Route path="/" element={<PostSection />}></Route>
        <Route path="category" element={<Category />}>
          <Route path="video" element={<VideoSection />}></Route>
          <Route path="shop" element={<ShopSection />}></Route>
        </Route>
        <Route path="profile" element={<Profile />}>
          <Route path="post" element={<PostCategory/>}/>
          <Route path="video" element={<VideoCategory/>}/>
          <Route path="shop" element={<ShopCategory/>}/>
        </Route>
        <Route path="chat" element={<FriendsList />}>
          <Route path="0" element={<Message/>} />
          <Route path="1" element={<Message1/>} />
          <Route path="2" element={<Message2/>} />
          <Route path="3" element={<Message3/>} />
          <Route path="4" element={<Message4/>} />
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
