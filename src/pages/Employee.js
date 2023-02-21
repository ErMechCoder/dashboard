import React, {useEffect, useState} from 'react';
import Employees from '../components/Employees';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../index.css';
import ExportToExcel from '../views/downloadExel/ExportToExcel';



const Employee=()=> {
  const [productData, setProductData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [finalDataSend, setFinalDataSend] = useState([]);
  useEffect(()=> {
    //Product Api
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => {
      console.log("json", json)
      setTimeout(()=> {
        const data = [{
          category:"product",
          data:json
        }]
        setProductData(data)
      }, 1000)
     
    })
  },[])
  useEffect(()=> {
        //User Api
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          setTimeout(()=> {
            const res = [...productData]
            res.push({
              category:"user",
              data:json
            })
            setFinalData(res)
          },1000)
          
        })
  },[productData])
  useEffect(()=> {
    
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
      setTimeout(()=> {
        console.log("ressssssssss", finalData)
        const res = [...finalData]
       
        res.push({
          category:"Comment",
          data:json
        })
        setFinalDataSend(res)
      },1000)
      
    })
},[finalData])

//console.log(finalData)

  return (

<div className='customerpages'>
      <div>
        <Sidebar />
      </div>
      <div >
        <Navbar />
        <Employees/>
      <ExportToExcel finalDataDetail={finalDataSend}/>
      </div>
      
    </div>
      
  );
}

export default Employee;
