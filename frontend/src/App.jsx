import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/books/create' element={<CreateBook></CreateBook>}>
        </Route>
        <Route path='/books/details/:id' element={<ShowBook></ShowBook>}>
        </Route>
        <Route path='/books/edit/:id' element={<EditBook></EditBook>}>
        </Route>
        <Route path='/books/delete/:id' element={<DeleteBook></DeleteBook>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App