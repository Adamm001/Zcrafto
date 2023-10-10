import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/shopsection.css";
import shopImage from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/Discord - A New Way to Chat with Friends & Communities.jpeg";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Shopdata } from "../js/shopData";

const ShopButton = ({data}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="link"
        onClick={showModal}
        style={{ backgroundColor: "#644C3C", color: "#fff" }}>
        Details
      </Button>
      <Modal
        title="About"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <img className="aboutShopImg" src={data.shopImg} alt="img" />
        <div>
          <p>{data.description}</p>
          <p className="shopBoxPrice">{data.price}₮</p>
          {
            data.profile.useName === "LwTseku" ? 
            <Button
              key="link"
              href="http://localhost:3000/chat/0"
              type="primary"
              onClick={handleOk}>
              Chat
            </Button> :
            <Button
              key="link"
              href="http://localhost:3000/chat/1"
              type="primary"
              onClick={handleOk}>
              Chat
            </Button>
          }
        </div>
      </Modal>
    </>
  );
};

const Shop = ({data}) => {

  return (
    <div className="shopBox">
      <img src={data.shopImg} className="shopBoxImage"/>
      <div className="shopBoxAbout">
        <img src={data.profile.proPic} className="shopBoxPro" />
        <div className="shopBoxText">
          <p className="shopBoxName">{data.title}</p>
          <p className="shopBoxPrice">
            {data.price}<span>₮</span>
          </p>
        </div>
        <ShopButton data={data}/>
      </div>
    </div>
  );
};

const ShopSection = () => {
  
  return (
    <div className="shopSection">
      {
        Shopdata.map((data, index) =>(
          <Shop data={data} />
        ))
      }
    </div>
  );
};

export default ShopSection;
