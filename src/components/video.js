import heartIcon from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/like_Icon.svg";
import videoImage from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/Discord - A New Way to Chat with Friends & Communities.jpeg";
const ProName = () => {
  return (
    <div className="videoBoxProName">
      <img src={videoImage} alt="Pro Image" className="videoBoxPro" />
      <div className="videoBoxText">
        <p className="videoBoxDescription">
          Description
        </p>
        <p className="videoBoxName">Name</p>
      </div>
    </div>
  );
};
const Video = () => {
  return (
    <div className="videoBox">
      <img src={videoImage} alt="zurag" className="videoBoxImage" />
      <ProName />
    </div>
  );
};

export default Video;
