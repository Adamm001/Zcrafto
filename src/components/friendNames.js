import { NavLink, Outlet } from "react-router-dom";
import proImage from "../icons/post.jpeg"
import { Shopdata } from "../js/shopData";

function FriendsList() {
    const names = ['LwTseku','Khsblg']
    const imge = [Shopdata[1].profile.proPic, Shopdata[0].profile.proPic]
    const toFriend = ['/chat/0','/chat/1']
    return(
        <div className="chatContainer">
        <div className="friendList">
            {names.map((fname, index) =>(
                <NavLink to={toFriend[index]}><img src={imge[index]}/> {fname}</NavLink>
            ))}
        </div>
        <Outlet/>
        </div>
    )
}
export default FriendsList;
