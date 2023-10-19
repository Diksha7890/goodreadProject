import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import BookDetail from "../BookDetail";
const Review = (props) => {
  const { id, image, title, author, description } = props.data;
  const [reviewList, setList] = useState([]);

  let navigate = useNavigate();
  const handleSubmit=()=> {

      let input = document.querySelector(".inputs");
      const data=input.value;
      reviewList.push(data);
      setList(...reviewList, data);
      input.value = "";
      navigate("/books/detail/"+ id, { state: reviewList} );
  }

  return (
    <>
      <div className="container my-2">
        <div className="row">
          <div className="col-md-4 text-center">
            <div className={styles.wrapper}>
              <img src={image} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-8">
            <div className={styles.wrapper}>
              <h1 className={styles.h1}>{title}</h1>
              <h3 className={styles.h3}>{author}</h3>
              <p>{description}</p>
              <h2>Write a review</h2>
              <hr />
              <p>what do you think?</p>
              <input className="inputs" type="text" required />
              <br />
              <hr></hr>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Review;
