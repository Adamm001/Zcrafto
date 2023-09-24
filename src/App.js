import './App.css';
import Category from './components/category';
import Menusection from './components/menuSection';
import Navbar from './components/navbar';
import PostSection from './components/postSection';
import ShopSection from './components/shopSection';
import VideoSection from './components/videoSection';

function App() {
  return (
    <div className='body'>
      <Navbar/>
      <Menusection/>
      <Category />
      <VideoSection/>

    </div>
  );
}

export default App;
