import React from 'react'
import DeshBoardHeader from '../deshboard/DeshBoardHeader';
import DeshBoardRecent from '../deshboard/DeshBoardRecent';
import Navbar from '../components/Navbar'
import DeshBoardPreview from '../deshboard/DeshBoardPreview';

function Deshboard() {
  return (
    <div className='homemaincontainer'>
    <Navbar/>
    <DeshBoardHeader/>
    <div className='deshboardfooter'>
    
    <DeshBoardRecent/>
    <DeshBoardPreview/>
    </div>
  
    </div>
  )
}

export default Deshboard;
