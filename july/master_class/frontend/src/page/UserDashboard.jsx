import React, { useEffect, useState } from 'react'

const UserDashboard =()=> {
    const [user,setUser]=useState({})
    const userLS=JSON.parse(localStorage.getItem("user"))
    useEffect(()=>{
        setUser(userLS)
    },[])
    const handleLogOut=()=>{
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        alert("Logout sucesful")
        Navigate("/login")
    }
  return (
    <div>
            <div className='m-auto w-fit p-6 mt-20 shadow-lg rounded' >
                <h2 className='text-teal-500 text-lg font-semibold' >{user?.fullName}</h2>
                <h2>{user?.email}</h2>
                <h2>{user?.role}</h2>

                <button onClick={handelLogOut} className='bg-teal-600 text-white px-4 py-2' >Logout</button>
            </div>

        </div>
  )
}

export default UserDashboard;
