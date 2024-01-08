import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {

  const [showpassword, setShowpassword] = useState('password')
  const [timer, setTimer] = useState('')
  const [showerror, setShowerror] = useState('')
  const [showinvalid, setShowInvalid] = useState(0)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [verify_otp, setVerifyOTP] = useState('')
  const [loginusername, setLoginUsername] = useState('')

  const country_code = '91'
  const user_type_id = 10
  const referred_code = '42XhFC'

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
    else if (e.target.name == 'mobile') {
      setMobile(e.target.value)
    }
    else if (e.target.name == 'verify_otp') {
      setVerifyOTP(e.target.value)
    }
  }

  const showPassword = () => {
    if (showpassword == 'password') {
      setShowpassword('text')
    }
    else {
      setShowpassword('password')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, password, mobile, country_code, user_type_id, verify_otp, referred_code }
    let res = await fetch('https://shyamplay.com/api/v1/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    let response = await res.json()
    console.log(response)
    setShowInvalid(2)
    if (response.message == 'Mobile no already taken') {
      setShowerror('Mobile No. Already Registered')
    }
    else if (response.message == 'Invalid OTP') {
      setShowerror('Invalid OTP')
    }
    else if (response.message == 'OTP Expired') {
      setShowerror('OTP Expired')
    }
    else if (response.message == 'User Register Successfully') {
      setShowerror('User Register Successfully')
      setLoginUsername(response.data.user_name)
    }
  }

  const sendOTP = async (e) => {
    if (mobile.length == 10) {
      setShowInvalid(0)
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
      setInterval(() => {
        if (response.data.timer > 0) {
          response.data.timer = response.data.timer - 1
          setTimer(response.data.timer)
        }
      }, 1000)
    }
    else {
      setShowInvalid(1)
    }
  }

  return (
    <>
      <div className="body">
        <div className="wrapper">
          <form className="form-gap" method='POST' onSubmit={handleSubmit}>
            <Image src="/images/logo.png" width={200} height={200} alt="" className="logo-img" />
            <div className="input-box">
              <i className='bx bxs-user'></i>
              <input type="text" placeholder="Username" name='name' value={name} onChange={handleChange} required />
            </div>
            <div className="input-box-2">
              <i className='bx bxs-lock-alt'></i>
              <input placeholder="Password" type={showpassword} name='password' value={password} onChange={handleChange} required />
              <a onClick={showPassword}>
                {showpassword == 'password' && <i className="fa-solid fa-eye"></i>}
                {showpassword == 'text' && <i className="fa-solid fa-eye-slash"></i>}
              </a>
            </div>
            <div className="input-box">
              <div className='input-box-inner'>
                <i className="fa-solid fa-mobile-screen"></i>
                <p>+91</p>
              </div>
              <input type="number" placeholder="Mobile Number" name='mobile' value={mobile} onChange={handleChange} className='phone-input' required />
              <button onClick={sendOTP} disabled={timer > 0}>
                <p>OTP <i className="fa-solid fa-arrow-right"></i></p>
              </button>
            </div>
            {showinvalid == 1 && <p className='red-error-text'>Invalid Valid Mobile Number</p>}
            {timer > 0 && <p>OTP Valid Upto {timer} Seconds</p>}
            <div className="input-box">
              <i className='bx bxs-user'></i>
              <input type="number" placeholder="Enter OTP" name='verify_otp' value={verify_otp} onChange={handleChange} required />
            </div>
            {showinvalid == 2 && <p className='red-error-text'>{showerror}</p>}
            <button type="submit" className="btn">Join Now</button>
          </form>
        </div>
      </div>

      {/* Popup Code */}
      {showerror == 'User Register Successfully' && <div className="popup-code">
        <div className="popup-main-box">
          <Image src="/images/ICONF.png" width={200} height={200} alt="" className="logo-img" />
          <div className="popup-middle-box">
            <p className='congrats-para'>Congratulations!</p>
            <p className='won-para'>You Have Won</p>
            <p className='won-amount'>99<sup>₹</sup></p>
            <p className='won-para'>Welcome Bouns</p>
            <p className='username-para'>Username - {loginusername}</p>
            <p className='username-para'>Mobile - {mobile}</p>
            <Link href="https://shyamplay.com/login">
              <button>Claim The Bonus</button>
            </Link>
            <p className='note-text'>Note* Take a screenshot of the above details</p>
          </div>
        </div>
      </div>}
    </>
  )
}