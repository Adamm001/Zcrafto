import menuLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/menu_icon.svg"
import proLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/pro_icon.svg"
import searchLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/search_logo.svg"
import shopLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/shop_icon.svg"
import videoLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/video_icon.svg"
import logo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/logo.JPG"
const Icon = () => {
    return ( 
        <div className="logo">
            <img src={logo} alt="logo"/>
            <p>CRAFTO</p>
        </div>
     );
}
const SearchButton = () => {
    return (
        <button className="searchButton"><img src={searchLogo}/></button>
    )
}
const Navbar = () => {
    return ( 
        <div className="navbar">
            <Icon/>
            <SearchButton/>
        </div>
     );
}
 
export default Navbar;