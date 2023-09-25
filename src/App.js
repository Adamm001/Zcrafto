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

function App() {
  return (
    <div className="body">
      <Navbar/>
      <Menusection/>
      <Routes>
        <Route path="category" element={<Category />}></Route>
        <Route path="/" element={<PostSection />}></Route>
        <Route path="category" element={<Category />}>
          <Route path="video" element={<VideoSection />}></Route>
          <Route path="shop" element={<ShopSection />}></Route>
        </Route>
        <Route path="profile" element={<Profile />}></Route>
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
