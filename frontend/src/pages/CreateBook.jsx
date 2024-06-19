import { useState} from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import './CreateBook.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go";

const CreateBook = () => {
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [publishYear,setPublishYear] = useState(1947)
  const [error,setError] = useState(false)
  const navigate = useNavigate()

  const handleCreate = ()=>{
    const data= {
        title,
        author,
        publishYear,
      }
      axios.post('http://localhost:5000/books', data)
      .then(()=>{
        console.log("submitted")
        navigate('/')
      }).catch((err)=>{
        setError(true) 
        console.log('Error',err)
      })
  }

  return (
    <div>
      <Navbar></Navbar>
      <Link to='/'><button className='add'><GoArrowLeft /></button></Link>
      <h2>Adding Book</h2>
      <div className="message-container">
      <div className="form">
          <label>Title:</label>
          <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} required/>
          <label>Author:</label>
          <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author} required/>
          <label>publishYear:</label>
          <input type="number" onChange={(e)=>setPublishYear(e.target.value)} value={publishYear} required/>
          <button onClick={handleCreate} className='create-add'>Add</button>
          {error && <h5 className='fill-form'>Please fill the entire form</h5>}
      </div>
      </div>
    </div>
  )
}

export default CreateBook