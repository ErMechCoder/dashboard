import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";

import Chat from './views/chatpage/Chat'
import Customer from './pages/Customer';
import Employee from './pages/Employee';
import NoMatch from './pages/NoMatch';
import SlpcPage from './pages/SlpcPage';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/slpc' element={<SlpcPage />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employee' element={<Employee />} />
          
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
