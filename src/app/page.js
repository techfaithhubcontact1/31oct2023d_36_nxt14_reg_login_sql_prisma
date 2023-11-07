"use client"
//import Area

import { useState } from "react";
import Swal from "sweetalert2";

//2. defination area
function Home() {
  //2.1 hooks
  const [title,setTitle] = useState("Registration Form")
  const [payload,setPayload] = useState({
    "name": "",
    "email": "",
    "password": "",
    "role":"ADMIN"
  })

  //2.2 define area
  const handelChange = (e)=> {
    console.log(e.target.name);
    setPayload({
      ...payload, // ... is called sprad operator 
      [e.target.name]:e.target.value
    });
  }
  const submitData = async ()=>{
    console.log('hihh',payload);

    // API Calling with fetch method
    try {
    const res = await fetch("/api/register", {
      method:"POST",
      headers: {
      'Content-Type':'apllication/json'
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    // SwitAlert part
      // if(res.user.status == 200){
        Swal.fire({
          title: "Good job!",
          text: "User Register Successfull",
          icon: "success"
        });
      // }
    
    } catch (error) {
      console.log(error);
      Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
        });
      
      
    }
    
  }

  //23. returning
  return (
    <>
      <div className="container">
        <div className="card mt-6">
          <div className="card-header text-center">
            <h1>{title}</h1>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" aria-describedby="namelHelp" onChange={handelChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">EmailAddress</label>
                <input type="email" className="form-control" id="exampleInputEmail" name="email" aria-describedby="emailHelp" onChange={handelChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" aria-describedby="emailHelp" onChange={handelChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="userrole" className="form-label">UserRole</label>
                <input type="text" className="form-control" id="userrole" name="role" onChange={handelChange}/>
              </div>
            </form>
          </div>
          <div className="card-footer text-body-secondary text-center">
            <button className="btn btn-primary" onClick={submitData}>RegisterSelf</button>
          </div>
        </div>
      </div>
     
    </>
  )
}

//3. export area 
export default Home;