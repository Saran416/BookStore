import axios from "axios"
import Navbar from "../Components/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import './DeleteBook.css'

const DeleteBook = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDelete = ()=>{
    axios.delete(`http://localhost:5000/books/${id}`).then(()=>{
      navigate('/')
    }).catch((err)=>{
      console.log(err)
    });
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="message-container">
      <div className="message">
        <h4>Are you sure you want to delete the Book</h4>
        <button className="sure" onClick={handleDelete}>Yes</button>
      </div>
      </div>
    </div>
  )
}

export default DeleteBook