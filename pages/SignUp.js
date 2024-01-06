import React from 'react'

const Login = () => {

    // const [user_name, setUser_Name] = useState()
    // const [password, setPassword] = useState()

    const country_code = '91'
    const name = 'Nitin0112'
    const mobile = "9079336526"
    const password = 'Nitin1234'
    const user_type_id = 10
    const verify_otp = '809984'
    const referred_code = ''

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setUser_Name(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { name, password, mobile, country_code, user_type_id, verify_otp, referred_code  }
        let res = await fetch('https://shyamplay.com/api/v1/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let response = await res.json()
        console.log(response)

        let cc = document.getElementById("abc")
        cc.innerHTML = response.message
    }

    const handleSubmit2 = async (e) => {
        e.preventDefault()
        const data = { mobile }
        let res = await fetch('https://shyamplay.com/api/v1/user/send-otp', {
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
                <input type="text" value={name} placeholder='Enter Username' id='name' onChange={handleChange} />
                <input type="text" value={password} placeholder='Enter Password' id='password' onChange={handleChange} />
                <input type="text" value={mobile} placeholder='Enter Phone Number' id='mobile' onChange={handleChange} />
                <input type="submit" value="submit" />
            </form>
            <form method='POST' onSubmit={handleSubmit2}>
                <input type="text" value={name} placeholder='Enter Username' id='name' onChange={handleChange} />
                <input type="text" value={password} placeholder='Enter Password' id='password' onChange={handleChange} />
                <input type="text" value={mobile} placeholder='Enter Phone Number' id='mobile' onChange={handleChange} />
                <input type="submit" value="Send OTP" />
            </form>

            <p id='abc'></p>
        </>
    )
}

export default Login