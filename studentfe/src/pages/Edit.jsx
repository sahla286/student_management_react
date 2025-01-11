import React,{useEffect,useState} from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import { getSpecificStudentApi,updateStudentApi } from '../services/allApis';


function Edit() {
   
  const nav=useNavigate()
  const [student,setStudent]=useState({})

  const {id}=useParams()
  console.log(id);

  useEffect(()=>{
    getStudent()
  },[])

  const getStudent=async()=>{
    if(id){
      const result=await getSpecificStudentApi(id)
      console.log(result);
      if(result.status==200){
        setStudent(result.data)
      }
      
    }
  }
  
  const handleUpdate=async()=>{
     const {name,dob,department,phone_number}=student
        if(!name || !dob || !department || !phone_number){
          alert('Enter Valid Inputs!!')
        }
        else{
          const result=await updateStudentApi(id,student)
          console.log(result);
          if(result.status==200){
            alert('Student Details Updated!!')
            nav('/')
    
          }
          else{
            alert('Updation Failed!!')
          }
          
        }
      }



  return (
    <>
    <div className="d-flex justify-content-center align-items-center" style={{height:'70vh'}}>
        <div className="border shadow p-3 w-50 mt-5">
            <h2>edit Student</h2>
            <input type="text" placeholder='Enter Name' onChange={(e)=>{setStudent({...student,name:e.target.value})}} defaultValue={student.name} className='form-control mb-3' />
            <input type="date" placeholder='Enter DOB' onChange={(e)=>{setStudent({...student,dob:e.target.value})}} defaultValue={student.dob} className='form-control mb-3' />
            <input type="text" placeholder='Enter Dept' onChange={(e)=>{setStudent({...student,department:e.target.value})}} defaultValue={student.department} className='form-control mb-3' />
            <input type="text" placeholder='Enter Phone Number' onChange={(e)=>{setStudent({...student,phone_number:e.target.value})}} defaultValue={student.phone_number} className='form-control mb-3' />
            <div className="d-flex justify-content-between">
                <button className="btn btn-success" onClick={handleUpdate}>Update</button>
                <Link className="btn btn-danger" to={'/'}>Cancel</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Edit
