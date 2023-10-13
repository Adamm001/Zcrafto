import { Route, Routes } from "react-router-dom";
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
import LwPostCategory from "./components/LwTseku/LwPostCategory";
import LwVideoCategory from "./components/LwTseku/LwVideoCategory";
import LwShopCategory from "./components/LwTseku/LwshopCategory";
import Profile1 from "./components/Khsblg/profile1";
import Profile0 from "./components/LwTseku/profile0";
import KhPostCategory from "./components/Khsblg/KhPostCategory";
import KhVideoCategory from "./components/Khsblg/KhVideoCategory";
import KhShopCategory from "./components/Khsblg/KhshopCategory";
import { useState } from "react";

function App() {
  const [plaCategory, setPlaCategory] = useState("Wood craving");
  console.log(plaCategory)
  return (
    <div className="body">
      <Navbar/>
      <Menusection/>
      <Routes>
        <Route path="Login" element={<Login/>}/>
        <Route path="SignUp" element={<SignUp/>} />
        <Route path="category" element={<Category />}></Route>
        <Route path="/" element={<PostSection />}></Route>
        <Route path="category" element={<Category setPlaCategory={setPlaCategory} />}>
          <Route path="video" element={<VideoSection plaCategory={plaCategory} />}></Route>
          <Route path="shop" element={<ShopSection plaCategory={plaCategory} />}></Route>
        </Route>
        <Route path="profile" element={<Profile/>}>
          <Route path="post" element={<PostCategory/>}/>
          <Route path="video" element={<VideoCategory/>}/>
          <Route path="shop" element={<ShopCategory/>}/>
        </Route>
        <Route path="profile0" element={<Profile0/>}>
          <Route path="post0" element={<LwPostCategory/>}/>
          <Route path="video0" element={<LwVideoCategory/>}/>
          <Route path="shop0" element={<LwShopCategory/>}/>
        </Route>
        <Route path="profile1" element={<Profile1/>}>
          <Route path="post1" element={<KhPostCategory/>}/>
          <Route path="video1" element={<KhVideoCategory/>}/>
          <Route path="shop1" element={<KhShopCategory/>}/>
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
