import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

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
    <div className="box">
      <div className='nav'>
        <h1>Books List</h1>
        <Link to='/books/create'><button>+</button></Link>
      </div>
        <ol>
          <li>
          {books.map((book)=> 
            <ul key={book._id} className='item'>
              <li> Title: {book.title} </li>
              <li> Author: {book.author}</li>
              <li> Published in the year {book.publishYear}</li>
              <li><Link to={`books/details/${book._id}`}><button>Book Details</button></Link></li>
              <li><Link to={`books/edit/${book._id}`}><button>Edit Book</button></Link></li>
              <li><Link to={`books/delete/${book._id}`}><button>Delete Book</button></Link></li>     
            </ul>
      )}
          </li>
        </ol>
    </div>
  )
}

export default Home