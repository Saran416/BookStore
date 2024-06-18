import { useState} from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import './CreateBook.css'
// import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [publishYear,setPublishYear] = useState(123)
  // const navigate = useNavigate()

  const handleCreate = ()=>{
    console.log("test")
    const data= {
        title,
        author,
        publishYear
      }
      axios.post('http://localhost:5000/books',data)
      .then(()=>{
        console.log("submitted")
        // navigate('/')
      }).catch((err)=>{
        alert('Error as occured')
        console.log('Error',err)
      })
  }

  return (
    <div>
      <Navbar></Navbar>
      <h2>Adding Book</h2>
      <div className="message-container">
      <div className="form">
          <label>Author:</label>
          <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} required/>
          <label>Author:</label>
          <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author} required/>
          <label>publishYear:</label>
          <input type="number" onChange={(e)=>setPublishYear(e.target.value)} value={publishYear} required/>
          <button onClick={handleCreate} className='create-add'>Add</button>
      </div>
      </div>
    </div>
  )
}

export default CreateBook