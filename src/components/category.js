import { Outlet } from "react-router-dom";

const Category = ({setPlaCategory}) => {
    const category = [
      "Wood craving",
      "Beads",
      "Leather craft",
      "Clay craft",
      "Crochet",
      "Knitting",
      "Mask craft",
      "Origami",
      "Painting",
    ];
    const ChangeCat = (name) => {
      setPlaCategory(name)
    }
    return (
      <>
      <div className="categorySection">
        {category.map((name) => (
          <button onClick={() => ChangeCat(name)} className="categoryButton">{name}</button>
        ))}
      </div>
      <Outlet/>
      </>
    );
  };
export default Category;