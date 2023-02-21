import React from 'react'


import Sidebar from '../components/Sidebar';


import '../index.css'
import Deshboard from './Deshboard';
function Home() {
  return (
   <div className='home'>
    <div >
    <Sidebar/>
    </div>
    <Deshboard/>
    
   </div>
  )
}

export default Home;
