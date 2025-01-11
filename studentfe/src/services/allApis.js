import base_url from "./base_url";
import axios from 'axios';

export const addStudentApi=async (data) => {
    return await axios.post(`${base_url}/student/`,data)
}

export const getStudentApi=async () => {
    return await axios.get(`${base_url}/student/`)
}

export const deleteStudentApi=async(id)=>{
    return await axios.delete(`${base_url}/student/${id}/`)
}

export const getSpecificStudentApi=async(id)=>{
    return await axios.get(`${base_url}/student/${id}/`)
}

export const updateStudentApi=async(id,data)=>{
    return await axios.put(`${base_url}/student/${id}/`,data)
}