import "./category.css"
import {categories}  from "../../backend/db/data";
import CategoryItem from "./Categoryitem";



const Categories = () => {
  return (
    <div className="Container">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
