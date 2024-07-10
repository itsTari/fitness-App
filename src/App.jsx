import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Main from './layout/Main'
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Main/>} >
    <Route index element={<Home/>}/>
    <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
    
  </Route>))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
