import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { deleteStudentApi, getStudentApi } from '../services/allApis'


function List() {

    const [data,setData]=useState([])

    useEffect(()=>{
        console.log('loding...!!');
        getData()
    })

    const getData=async()=>{
        const result=await getStudentApi()
        console.log(result.data);
        if(result.data.length>0){
            setData(result.data)
        }
        
    }
    const handleDelete=async(val)=>{
        const result=await deleteStudentApi(val)
        if(result.status==204){
            getData()
        }
        else{
            alert('something went wromg!!!')
        }
    }


  return (
    <>
    <div className="p-5">
        <h2 className="mb-3">Student List</h2>
        <Link to={'/add'} className='btn btn-success mb-4'>Add Student</Link>
        {
         data.length>0 ?
         <table className="table table-bordered text-dark ">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>DOB</th>
                <th>Department</th>
                <th>Phone</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map(item=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.dob}</td>
                    <td>{item.department}</td>
                    <td>{item.phone_number}</td>
                    <td>
                        <Link to={`/edit/${item.id}`} className='btn'>
                        <i className="fa-solid fa-pen-to-square" style={{color:'#FFD43B'}}></i>
                        </Link>
                        <button className="btn" onClick={() => handleDelete(item.id)}>
                        <i className="fa-solid fa-trash" style={{color:'red'}}></i>
                        </button>
                    </td>
                </tr>

            ))}


                
            </tbody>
        </table>
        :     
         <h2 className='my-4 text-center text-danger'>No Students Added Yet</h2>

        }
    </div>
    </>
  )
}

export default List



