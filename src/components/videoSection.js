import Videotr from "./video";
import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/videosection.css";
import { Media } from "../js/videoData";

const VideoSection = () => {
  return (
    <div className="section">
      <div className="videoSection">
        {
          Media.map((file, index) => (
            <Videotr src={file.url}
            profile={file.profile}
            videoDesc={file.videoDesc}/>
          ))
        }
      </div>
    </div>
  );
};

export default VideoSection;
