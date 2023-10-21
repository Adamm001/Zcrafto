import { ProfileData } from "../js/postData";
const PostCategory = () => {
    return ( 
        <div className="profileVideo">
            {
                ProfileData.map((name)=>(
                    name.profile.useName === "user" ?
                    <img src={name.postImg}/>:<span/>
                ))
            }
        </div>
     );
}
 
export default PostCategory;


