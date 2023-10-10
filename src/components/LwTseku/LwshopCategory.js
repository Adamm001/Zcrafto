import { Shopdata } from "../../js/shopData";
const LwShopCategory = () => {return ( 
        <div className="profileVideo">
            {Shopdata.map((video)=>(
                video.profile.useName === "LwTseku" ?
                <img src={video.shopImg}/>:<span/>
            ))}
        </div>
     );
}
 
export default LwShopCategory;


