import "./Categoryitem.css"

const CategoryItem = ({ item }) => {
  return (
    <div className="Container">
      <img src={item.img}/>
      <div className="info">
        <div className="title">{item.title}</div>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
