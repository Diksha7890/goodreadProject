import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";

const BookDetail = (props) => {
  let location=useLocation();
  // console.log(location.state);

  const { id ,image, title, author, description } = props.data;

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-4 text-center">
            <div className={styles.wrapper}>
              <img src={image} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-8">
            <div className={styles.wrapper}>
              <h1 className={styles.h1}>{title}</h1>
              <h2 className={styles.author}>{author}</h2>
              <p>{description}</p>
            </div>
            <div className={styles.wrapper}>
              <h2 className="heading my-3">Rating & Reviews</h2>
              <Link
                type="button"
                className="btn btn-warning btn-sm btn-block"
                to={"/review/"+id}
              >
                Write a review
              </Link>
              <hr></hr>
              {
                <div className="review1">{location.state}</div>
              }
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookDetail;
