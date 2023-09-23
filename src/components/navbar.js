import searchLogo from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/search_logo.svg"
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