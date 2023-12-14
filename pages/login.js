import React from 'react'
import { useState, useEffect } from 'react'
import Script from 'next/script'


const Login = () => {
    /* eslint-disable no-use-before-define */

    useEffect(() => {
        window.otpless = (otplessUser) => {
         alert(JSON.stringify(otplessUser));
        };
       }, []);

    // const [user_name, setUser_Name] = useState()
    // const [password, setPassword] = useState()

    const login_type = 'user_name'
    const user_name = 'shyam'
    const password = 'Abcd1234'

    const handleChange = (e) => {
        if (e.target.name == 'user_name') {
            console.log("hello submit")
            setUser_Name(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
            console.log("hello submit2")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { user_name, password, login_type }
        let res = await fetch('https://shyamplay.com/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let response = await res.json()
        console.log(response)
    }

    return (
        <>
            <form method='POST' onSubmit={handleSubmit}>
                <input type="text" value={user_name} placeholder='Enter Username' id='user_name' onChange={handleChange} />
                <input type="text" value={password} placeholder='Enter Password' id='password' onChange={handleChange} />
                <input type="submit" value="submit" />
            </form>

            <div id="otpless-login-page"></div>
            <Script type="text/javascript" src="https://otpless.com/auth.js" />
        </>
    )
}

export default Login