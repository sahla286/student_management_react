import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addStudentApi } from '../services/allApis'

function Add() {
  const [data,setData]=useState({
    name:'',dob:'',department:'',phone_number:''
  })

  const nav=useNavigate()
  
  const handleSubmit=async()=>{
    const {name,dob,department,phone_number}=data
    if(!name || !dob || !department || !phone_number){
      alert('Enter Valid Inputs!!')
    }
    else{
      const result=await addStudentApi(data)
      console.log(result);
      if(result.status==201){
        alert('Student Added!!')
        nav('/')

      }
      else{
        alert('Student Adding Failed!!')
      }
      
    }
  }

  return (
    <>
    <div className="d-flex justify-content-center align-items-center" style={{height:'70vh'}}>
        <div className="border shadow p-3 w-50 mt-5">
            <h2>Add Student</h2>
            <input type="text" onChange={(e)=>{setData({...data,name:e.target.value})}} placeholder='Enter Name' className='form-control mb-3' />
            <input type="date" onChange={(e)=>{setData({...data,dob:e.target.value})}} placeholder='Enter DOB' className='form-control mb-3' />
            <input type="text" onChange={(e)=>{setData({...data,department:e.target.value})}} placeholder='Enter Dept' className='form-control mb-3' />
            <input type="text" onChange={(e)=>{setData({...data,phone_number:e.target.value})}} placeholder='Enter Phone Number' className='form-control mb-3' />
            <div className="d-flex justify-content-between">
                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                <Link className="btn btn-danger" to={'/'}>Cancel</Link>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Add
