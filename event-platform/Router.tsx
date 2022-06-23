import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Event} from './src/pages/Event'

export const Router = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/event' element={<Event/>}/>
        <Route path='/event/lesson/:slug' element={<Event/>}/>
      </Routes>
    </BrowserRouter>
  )
}