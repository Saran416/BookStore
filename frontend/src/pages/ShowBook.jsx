import Navbar from "../Components/Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './ShowBook.css'

const ShowBook = () => {
  const [book,setBook] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:5000/books/${id}`).then((res)=>{
      setBook(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[id])

  return (
    <div>
      <Navbar></Navbar>
      <h2>Book Details</h2>
      <div className="book-details">
          <ul>
            <li>Title: {book.title}</li>
            <li>Author: {book.author}</li>
            <li>Publish year: {book.publishYear}</li>
          </ul>
      </div>
    </div>
  )
}

export default ShowBook