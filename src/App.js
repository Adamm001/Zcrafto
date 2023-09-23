import './App.css';
import Menusection from './components/menuSection';
import Navbar from './components/navbar';
import PostSection from './components/postSection';
import VideoSection from './components/videoSection';

function App() {
  return (
    <div className='body'>
      <Navbar/>
      
      <Menusection/>
      <VideoSection/>

    </div>
  );
}

export default App;
