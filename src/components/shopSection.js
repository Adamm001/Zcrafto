import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/shopsection.css";
import shopImage from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/Discord - A New Way to Chat with Friends & Communities.jpeg";

const Shop = () => {
  return (
    <div className="shopBox">
      <img src={shopImage} className="shopBoxImage" />
      <div className="shopBoxAbout">
        <img src={shopImage} className="shopBoxPro" />
        <div className="shopBoxText">
          <p className="shopBoxName">craft's name</p>
          <p className="shopBoxPrice">
            Price<span>₮</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const ShopSection = () => {
  return (
    <div className="shopSection">
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
    </div>
  );
};

export default ShopSection;
