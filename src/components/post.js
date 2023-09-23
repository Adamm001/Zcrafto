import heartIcon from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/like_Icon.svg"
import postImage from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/post.jpeg"
const ProName = () => {
    return(
        <div className="postBoxProName">
            <img src={postImage} alt="Pro Image" className="postBoxPro"/>
            <span className="postBoxName">Name</span>
        </div>
    )
}
const Post = () => {
    return ( 
        <div className="postBox">
            <ProName/>
            <img src={postImage} alt="zurag" className="postBoxImage"/>
            <p>Description</p>
            <img className="postLike" src={heartIcon} />
        </div>
     );
}
 
export default Post;