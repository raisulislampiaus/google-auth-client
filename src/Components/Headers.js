import React, { useEffect, useState } from 'react'
import "./header.css"
import { NavLink } from "react-router-dom"
import axios from "axios"

const Headers = () => {
    const [userdata, setUserdata] = useState({});

    const getUser = async () => {
        try {
            const response = await axios.get("http://google-auth-mern.vercel.app/login/sucess", { withCredentials: true });

            setUserdata(response.data.user);
            console.log(response.data.user);
           
        } catch (error) {
            console.log("error", error)
        }
    }

    // logoout
    const logout = ()=>{
        window.open("http://google-auth-mern.vercel.app/logout","_self")
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <h1>HEY</h1>
                    </div>
                    <div className="right">
                        <ul>
                            
                            {
                                Object?.keys(userdata)?.length > 0 ? (
                                    <>
                                    <li style={{color:"black",fontWeight:"bold"}}>{userdata?.displayName}</li>
                                         <li>
                                            <NavLink to="/dashboard">
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <li onClick={logout}>Logout</li>
                                        <li>
                                            <img src={userdata?.image} style={{ width: "50px", borderRadius: "50%" }} alt="no-images" />
                                        </li>
                                    </>
                                ) : <li>
                                    <NavLink to="/">
                                        Login
                                    </NavLink>
                                </li>
                            }



                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Headers
