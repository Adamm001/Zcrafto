import heartIcon from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/like_Icon.svg";
import videoImage from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/Discord - A New Way to Chat with Friends & Communities.jpeg";
const ProName = ({profile, videoDesc}) => {
  return (
    <div className="videoBoxProName">
      <img src={profile.proPic} alt="Pro Image" className="videoBoxPro" />
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
