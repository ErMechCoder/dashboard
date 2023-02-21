import React from 'react'
import '../index.css'
function DeshBoardHeader() {
  return (
    <div className='deshBoardHeader'>
      <div className='headerinvoice'>
        <p className='headertop'>Invoice</p>
        <hr/>
        <div className='headerinvoicebottom'>
          <span>This month</span>
          <div>8500$</div>
        </div>
      </div>
      <div className='headerinvoice'>
        <p className='headertop'>Quote</p>
        <hr/>
        <div className='headerinvoicebottom'>
          <span>This month</span>
          <div>2000$</div>
        </div>
      </div>
      <div className='headerinvoice'>
        <p className='headertop'>Payment</p>
        <hr/>
        <div className='headerinvoicebottom'>
          <span>This month</span>
          <div>8400$</div>
        </div>
      </div>
      <div className='headerinvoice'>
        <p className='headertop'>Due Balance</p>
        <hr/>
        <div className='headerinvoicebottom'>
          <span>This month</span>
          <div>5000$</div>
        </div>
      </div>
    </div>
  )
}

export default DeshBoardHeader;
