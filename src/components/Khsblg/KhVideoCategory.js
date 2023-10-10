import { Media } from "../../js/videoData";
const KhVideoCategory = () => {
    return ( 
        <div className="profileVideo">
            {Media.map((video)=>(
                video.profile.userName === "Khsblg" ?
                <img src={video.url}/>:<span/>
            ))}
        </div>
     );
}
 
export default KhVideoCategory;


