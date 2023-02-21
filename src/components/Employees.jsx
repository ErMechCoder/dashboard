import React, { useEffect, useState } from 'react'
import '../index.css'

function Employees() {

    const [dataSet,setDataSet]=useState([])

    useEffect(()=> {
      //User Api
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        //console.log("json",json)
        setDataSet(json)   
      })
  },[])

  console.log("data",dataSet)

    
  return (
    <div className='employeeContainer'>
        <h1>Employee Details</h1>
        {
           <table className='customers'>
           <tr>
           
             <th>Name</th>
             <th>UserName</th>
             <th>Email</th>
            
             <th>Phone</th>
             <th>Website</th>
           
           </tr>
           {dataSet.map((data, key) => {
             return (
               <tr key={key}>
                
                 <td>{data.name}</td>
                 <td>{data.username}</td>
                 <td>{data.email}</td>
                 <td>{data.phone}</td>
                 <td>{data.website}</td>
               
               </tr>
             )
           })}
         </table>
        }
    </div>
  )
}

export default Employees;

