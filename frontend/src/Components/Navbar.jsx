import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h1><Link to='/' className='site-name'>Book Store</Link></h1>
    </div>
  )
}

export default Navbar