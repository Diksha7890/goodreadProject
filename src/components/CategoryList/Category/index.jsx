import { Link } from "react-router-dom";

const Category = (props) => {
  const { catName, catImage } = props.data;
  return (
    <div className="col-md-3">
      <Link to={"/books"}>
      <div className="card">
        <img src={catImage} className="card-image-top" />
        <div className="card-body">
          <div className="card-title">{catName}</div>
        </div>
      </div>
      </Link>
    </div>
  );
};
export default Category;
