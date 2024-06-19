import { useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom' 
import './EditBook.css'
import { Link } from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go";

const EditBook = () => {
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [publishYear,setPublishYear] = useState(1947)
  const [error,setError] = useState(false);
  
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:5000/books/${id}`)
    .then((res)=>{
      setTitle(res.data.title)
      setAuthor(res.data.author)
      setPublishYear(res.data.publishYear)
    }).catch((err)=>{
      console.log('Error',err)
    })
  },[])

  const handleCreate = ()=>{
    const data = {
      title,
      author,
      publishYear
    }
    axios.put(`http://localhost:5000/books/${id}`,data).then(()=>{
      navigate('/')
    }).catch((err)=>{
      console.log(err)
      setError(true)
    })

  }

  return (
    <div>
      <Navbar></Navbar>
      <Link to='/'><button className='add'><GoArrowLeft /></button></Link>
      <h2>Edit Book</h2>
      <div className="message-container">
        <div className="form">
            <label>Title:</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} required/>
            <br />
            <label>Author:</label>
            <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author} required/>
            <br />
            <label>publishYear:</label>
            <input type="number" onChange={(e)=>setPublishYear(e.target.value)} value={publishYear} required/>
            <br />
            <button onClick={handleCreate} className='edit-add'>Edit</button>
            {error && <h5>Please fill the entire form</h5>}
        </div>
      </div>
    </div>
  )
}

export default EditBook