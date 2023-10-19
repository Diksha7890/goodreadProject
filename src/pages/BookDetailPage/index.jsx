import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import BOOK_DATA from "../../components/Data/book";
import BookDetail from "../../components/BookDetail"
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  // const {review}=props
  // console.log(props.data);
  // console.log(review)
    const[book, setBook]=useState({})
    const{id}=useParams()

    useEffect(()=>{
        setBook(BOOK_DATA[id])
    })
  return (
    <>
      <Navbar />
      <BookDetail data={book}/>
      
    </>
  );
};
export default BookDetailPage;
