import { ProfileData } from "../../js/postData";

const KhPostCategory = () => {
    return ( 
        <div className="profileVideo">
            {ProfileData.map((video)=>(
                video.profile.useName === "Khsblg" ?
                <img src={video.postImg}/>:<span/>
            ))}
        </div>
     );
}
 
export default KhPostCategory;


