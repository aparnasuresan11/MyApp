import React, { useEffect, useState } from 'react'

export default function Sample2() {
    const[state,setState]=useState({
        name:"",
        password:""
    })
    const [flag,setFlag]=useState(false)
    const handleChange=(event)=>
    {
        event.persist();
        setState(prev=>({...prev,[event.target.name]:event.target.value}));
        console.log(state)
        setFlag(true)
        console.log("Flag",flag)
    }
    const handleSubmit=()=>{

        console.log("Submit",state)
    }
return(

<form onSubmit={handleSubmit}>
    <label>Name::</label><input type="text" name="name" value={state.name} onChange={handleChange}></input><br/>
    <label>Password</label><input type="password" name="password" value={state.password} onChange={handleChange}></input>
    <button type='submit' className='btn btn-success'>Submit</button>
</form>)

}