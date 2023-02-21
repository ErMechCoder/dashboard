
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CustomerHeros from '../customer/CustomerHeros'
import '../index.css'

function Customer() {
 return (
    <div className='customerpages'>
      <div>
        <Sidebar />
      </div>
      <div >
        <Navbar />
       <CustomerHeros/>
      </div>
      
    </div>
  )
}

export default Customer;
