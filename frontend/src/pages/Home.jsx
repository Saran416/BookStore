import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import Navbar from '../Components/Navbar'

const Home = () => {
  const [books,setBooks] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/books')
    .then((res)=>{
      setBooks(res.data.data)
      console.log(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <Navbar></Navbar>
      <div className="items">
      <Link to='/books/create'><button className='add'>+</button></Link>
        <ol>
            {books.map((book)=> 
            <li key={book._id} className='book'>
              <ul className='item'>
                <li> Title: {book.title} </li>
                <li> Author: {book.author}</li>
                <li> Published in the year {book.publishYear}</li>
                <li>
                  <div className="options">
                  <Link to={`books/details/${book._id}`}><button className='link details'>Details</button></Link>
                  <Link to={`books/edit/${book._id}`}><button className='link edit'>Edit</button></Link>
                  <Link to={`books/delete/${book._id}`}><button className='link delete'>Delete</button></Link>
                  </div> 
                </li>      
              </ul>
            </li>
            )}
            
          </ol>
      </div>
    </div>
  )
}

export default Home