import { ProfileData } from "../../js/postData";

const LwPostCategory = () => {
    return ( 
        <div className="profileVideo">
        {ProfileData.map((video)=>(
            video.profile.useName === "LwTseku" ?
            <img src={video.postImg}/>:<span/>
        ))}
        </div>
     );
}
 
export default LwPostCategory;


