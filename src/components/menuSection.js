import menuLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/menu_icon.svg";
import proLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/pro_icon.svg";
import shopLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/shop_icon.svg";
import videoLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/video_icon.svg";
import chatLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/chat_icon.svg";
export default function Menusection() {
  const menuList = ["Home", "video", "shop", "profile", "messenger"];
  const menuIcon = [menuLogo, proLogo, shopLogo, videoLogo, chatLogo];
  return (
    <div className="menuSection">
      {menuList.map((menuName, index) => (
        <button className="menuButton">
          <img src={menuIcon[index]} alt="icon" />
          {menuName}
        </button>
      ))}
    </div>
  );
}
