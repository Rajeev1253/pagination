import React,{useEffect,useState} from 'react'
import '../component/userlist.css'
import axios from 'axios'

const UserList = () => {
    const [data,setdata]=useState()
    const [page,setPage]=useState(1)
    const [limit,setlimit]=useState(2)

    useEffect(()=>{
      const fetchdata=async()=>{

        console.log("hello")
        const response =await axios.get("http://localhost:4000/users");
        setdata(response.data)
        console.log(response.data)
      };
      fetchdata();

    },[])
    const handlePrev =async()=>{
      if((page-1)!=0){
        setPage(page-1);
        const response = await axios.get(`http://localhost:4000/users?page=${page-1}&limit=${limit}`);
        setdata(response.data)

      }
    }
    const handleNext =async ()=>{
    

      if(data!=""){
        
        const response = await axios.get(`http://localhost:4000/users?page=${page+1}&limit=${limit}`);
        setdata(response.data)
        setPage(page+1);
        }
      

      }
      const handleDelete=async(id)=>{
       const itemdel = await axios.delete(`http://localhost:4000/users/${id}`);


      }
      const handleSubmit = async()=>{
        const response = await axios.get(`http://localhost:4000/users?limit=${limit}`)
        setdata(response.data)
      }
      const handleChange = (e)=>{
        const value = e.target.value;
        setlimit(value)

      }
      const handleEdit=()=>{}

    // console.log(data)

  return (
    <div className='table-main'>
    <div className='table-box'>
    <table>
    <tr>
        <th>name</th>
        <th>marks</th>
        <th style={{padding:"10px"}}>Changes</th>
    </tr>
    

    {data?.map((user)=>{
      return(
      <tr>
    
        <td >{user.firstName}</td>
        <td>{user.salary}</td>
        <td><button onClick={handleEdit}>Edit</button></td>
        <td><button onClick={()=>handleDelete(user._id)}>Delete</button></td>
      </tr>
      )
      

    })}

  
    
  </table>

    </div>
    
  <div className='pagination'>
    <button onClick={handlePrev}>previous</button>
    <span>{page}</span>
    <button onClick={handleNext}>Next</button>

    <div className='input-box'>
    <lable>No of cols</lable>

    <input value={limit} onChange={handleChange}></input>
    <button onClick={handleSubmit}>Submit</button>
    </div>

    </div>


    </div>
 
  )
}

export default UserList