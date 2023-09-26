import { NavLink, Outlet } from "react-router-dom";
import proImage from "../icons/post.jpeg"

function FriendsList(params) {
    const names = ['Alex','Adam','Rose','Jake','Daniel']
    const toFriend = ['/chat/0','/chat/1','/chat/2','/chat/3','/chat/4']
    return(
        <div className="chatContainer">
        <div className="friendList">
            {names.map((fname, index) =>(
                <NavLink to={toFriend[index]}><img src={proImage}/> {fname}</NavLink>
            ))}
        </div>
        <Outlet/>
        </div>
    )
}
export default FriendsList;
