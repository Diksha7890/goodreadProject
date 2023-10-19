import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Review from "../../components/reviews";
import BOOK_DATA from "../../components/Data/book";
import { useParams } from "react-router-dom";

const ReviewAddPage = () => {
  const {id}=useParams()
  const [data,setdata]=useState([])

  useEffect(()=>{
    setdata(BOOK_DATA[id])
  },[])
    return(
      <>
      <Navbar/>
      <Review data={data}/>
      </>
    )
 

};
export default ReviewAddPage;
