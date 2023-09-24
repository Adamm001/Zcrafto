const Category = () => {
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
    return (
      <div className="categorySection">
        {category.map((name) => (
          <button className="categoryButton">{name}</button>
        ))}
      </div>
    );
  };
export default Category;