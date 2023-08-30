import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Birthday from './components/Birthday';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/birthday' element={<Birthday />} />
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
