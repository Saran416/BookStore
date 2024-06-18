import { useState} from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom' 
import './EditBook.css'

const EditBook = () => {
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [publishYear,setPublishYear] = useState(123)
  const {id} = useParams
  // const navigate = useNavigate()

  const handleCreate = ()=>{
    axios.get(`http://localhost:5000/books/${id}`)
      .then((res)=>{
        setTitle(res.data.title)
        setAuthor(res.data.author)
        setPublishYear(res.data.publishYear)
      }).catch((err)=>{
        alert('Error as occured')
        console.log('Error',err)
      })
      console.log(author)

  }

  return (
    <div>
      <Navbar></Navbar>
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
            <button onClick={handleCreate} className='edit-add'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default EditBook