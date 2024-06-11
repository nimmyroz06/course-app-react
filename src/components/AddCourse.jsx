import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddCourse = () => {
    const [data, setData] = useState(
        {
            "ctitle": "",
            "date": "",
            "descrip": "",
            "venue": "",
            "tname": ""
        }
    )
    const inputhandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue=()=>{
        console.log(data)
        axios.post("",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="ADD") {
                    alert("Succesful") 
                } else {
                    alert("failed")
                }
            }
        ).catch()
    }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><h1><b>Add Course</b></h1></center>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course Title</label>
                                <input type="text" className="form-control" name='ctitle' value={data.ctitle} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Join Date</label>
                                <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="descrip" id="" className="form-control" value={data.descrip} onChange={inputhandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Venue</label>
                                <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Trainer Name</label>
                                <input type="text" className="form-control" name='tname' value={data.tname} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success">ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourse