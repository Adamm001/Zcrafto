import menuLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/menu_icon.svg";
import proLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/pro_icon.svg";
import shopLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/shop_icon.svg";
import videoLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/video_icon.svg";
import chatLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/chat_icon.svg";
import { NavLink } from "react-router-dom";
export default function Menusection() {
  const menuList = ["Home", "video", "shop", "profile", "messenger"];
  const menuIcon = [menuLogo, videoLogo, shopLogo, proLogo, chatLogo];
  const toLink = ['/','/category/video','/category/shop','/profile','/chat/0']
  return (
    <div className="menuSection">
      {menuList.map((menuName, index) => (
        <NavLink to={toLink[index]}>
          <img src={menuIcon[index]} alt="icon" />
          {menuName}
        </NavLink>
      ))}
    </div>
  );
}
