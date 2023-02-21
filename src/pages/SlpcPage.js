
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DownloadVrf from "../slpc/DownloadVrf";
//import PayLoad from "../slpc/PayLoad";
//import PrjNumber from "../slpc/PrjNumber";

const SlpcPage = () => {




    return (
        <div className='slpcPage'>
            <div>
                <Sidebar />
            </div>
            <div >
                <Navbar />
                 <h1>Slpc page</h1>
                   <DownloadVrf/>  
                
               {/*<PrjNumber/> */}  
                 {/* <PayLoad/>*/}  
              
            </div>

        </div>
    )
}

export default SlpcPage;
