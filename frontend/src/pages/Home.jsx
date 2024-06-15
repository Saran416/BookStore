import axios from 'axios'
import {useState, useEffect} from 'react'

const Home = () => {
  const [books,setBooks] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/books')
    .then((res)=>{
      setBooks(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className="box">
      <h1>Books List</h1>
      <ol>
        {books.map((book,index)=>{<ul key={index}>
          <li> Name: {book.name} </li>
          <li> Author: {book.author}</li>
          <li> Published in the year {book.publishYear}</li>
        </ul>})}
      </ol>
    </div>
  )
}

export default Home