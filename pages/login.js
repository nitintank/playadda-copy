import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [user_name, setUserName] = useState()
    const [password, setPassword] = useState()

    const login_type = 'user_name'
    // const user_name = 'shyam'
    // const password = 'Abcd1234'

    const handleChange = (e) => {
        if (e.target.name == 'user_name') {
            setUserName(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
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
                <input type="text" value={user_name} name='user_name' placeholder='Enter Username' id="user_name" onChange={handleChange} />
                <input type="text" value={password} name='password' placeholder='Enter Password' id="password" onChange={handleChange} />
                <input type="submit" value="submit" />
            </form>
        </>
    )
}

export default Login