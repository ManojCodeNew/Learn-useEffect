import React, { useEffect, useState } from 'react'

export default function Navbar({Component}) {
    const [count,setCount]=useState(0)
    useEffect(() => {
        alert("This is Navbar")
    },[])
    useEffect(() => {
        alert("navbar count increase")
    },[count])
    return (
        <div>
            <h1>Welcome To the {Component} world</h1>
            <button onClick={()=>setCount(count+1)}>NavBar Click</button>
        </div>
    )
}
