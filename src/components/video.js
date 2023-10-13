import heartIcon from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/like_Icon.svg";
import videoImage from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/Discord - A New Way to Chat with Friends & Communities.jpeg";
import { Button } from "antd";
const ProName = ({profile, videoDesc}) => {
  const proLink = profile.useName === "LwTseku" ? "http://localhost:3000/profile0/post0" : "http://localhost:3000/profile1/post1"
  return (
    <div className="videoBoxProName">
      <Button key="link" href={proLink} className="profileBtn"> <img src={profile.proPic} alt="Pro Image" className="videoBoxPro" /></Button>
      <div className="videoBoxText">
        <p className="videoBoxDescription">{videoDesc}</p>
        <p className="videoBoxName">{profile.userName}</p>
      </div>
    </div>
  );
};
const VideoTr = ({ src, profile, videoDesc }) => {
  console.log(src);
  return (
    <div className="videoBox">
      <iframe
        className="videoBoxImage"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <ProName profile={profile} videoDesc={videoDesc}/>
    </div>
  );
};

export default VideoTr;
