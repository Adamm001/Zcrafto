import { Shopdata } from "../../js/shopData";
const KhShopCategory = () => {
    return ( 
        <div className="profileVideo">
            {Shopdata.map((video)=>(
                video.profile.useName === "Khsblg" ?
                <img src={video.shopImg}/>:<span/>
            ))}
        </div>
     );
}
 
export default KhShopCategory;


