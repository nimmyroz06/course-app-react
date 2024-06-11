import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewCourse = () => {
    const [data,changeData]=useState([])
    const fetchdata=()=>{
        axios.get("").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><h1><b>View All Courses</b></h1></center>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Join Date</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Trainer Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value.ctitle}</th>
                                            <td>{value.date}</td>
                                            <td>{value.venue}</td>
                                            <td>{value.tname}</td>
                                        </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCourse