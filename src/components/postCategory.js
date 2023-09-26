import dress from '../icons/dress.jpg'
import mask from '../icons/masl.jpg'
import leather from '../icons/leather.jpg'
import wooden from '../icons/wooden.jpg'
const PostCategory = () => {
    const list = [dress, mask, leather,wooden,dress, mask, leather,wooden]
    return ( 
        <div className="profileVideo">
            {list.map((video)=>(
                <img src={video}/>
            ))}
        </div>
     );
}
 
export default PostCategory;


