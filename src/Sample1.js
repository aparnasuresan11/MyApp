import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import Add from './Add'
import { Sample2 } from './Sample2'
import {Navigate } from 'react-router-dom'







export default function Sample1() {
    const [asset, setAsset] = useState([])
    const [err, setErr] = useState('')
    useEffect(() => {
        console.log("Hello")
        fetchData()
    }, [])



    const fetchData = () => {


        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                setAsset(response.data)
                setErr('')
            }
            )
            .catch(err => {
                setErr("Data not loaded")
                setAsset([])
            })

    }

    const deleteSome = (e) => {
        console.log(e.target.value)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`)
            .then(response => {
                console.log(response)
            })
        console.log("DELETED")
    }
    const [show, setShow] = useState(false)
    const addData = (e) => {
        console.log("ADDD")
        setShow(true)


    }

    return (

        <div className='card'>
            {err && <h1>{err}</h1>}
            {show ? <Navigate to="/sample2" />
  : 
                <div>

                    {asset.length > 0 &&
                        <div className='card-body'>
                            <table border="1">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {asset.map((item, key) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                           <td> <button type="button" className='btn btn-success' onClick={addData}>Add</button> </td>
                                           <td> <button type="button" className='btn btn-danger' value={item.id} onClick={deleteSome}>Delete</button></td>
                                        </tr>))}

                                </tbody>


                            </table>
                        </div>

                    }
                </div>

            }

        </div>
    )
}
