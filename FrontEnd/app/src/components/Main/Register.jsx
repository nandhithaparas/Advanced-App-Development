import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

export default function Register() {
  const nav=useNavigate();
  const[username,setName]=useState('');
  const[emailid,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[conpassword,setConPassword]=useState('');
  const [formErrors, setFormErrors] = useState({
    username: '',
    emailid: '',
    password: '',
    conpassword: '',
    terms: '',
  });


  const handleInputChange = (field, value) => {
    setFormErrors({ ...formErrors, [field]: '' });
    switch (field) {
      case 'username':
        setName(value);
        break;
      case 'emailid':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'conpassword':
        setConPassword(value);
        break;
      default:
        break;
    }
  };

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (username.length === 0) {
      errors.username = 'Name is required';
    }

    if (emailid.length === 0) {
      errors.emailid = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (conpassword.length === 0) {
      errors.conpassword = 'Confirm Password is required';
    } else if (password !== conpassword) {
      errors.conpassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({
        username: '',
        emailid: '',
        password: '',
        conpassword: '',
        terms: '',
      });

      
      const user = {
        emailid,
        password: password, 
        role: 'user',
        name,
      };

      console.log("user data",user)
      axios.post('http://localhost:8080/auth/register', user, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        alert("User Registered! Kindly Login to proceed")
        console.log("Response from user",response)
        nav("/")
        
      })
      .catch(error => {
        console.log(error);
      alert(error.response)
      });
      
    }
  };

  return (
    <div className='fulllogin'>
    <div className="login">
    <div className="form">
    <div className="box">
      <div className="headerlogin">
      <img width="64" height="64" src="https://img.icons8.com/external-justicon-lineal-justicon/64/external-gift-thanksgiving-justicon-lineal-justicon.png" alt="external-gift-thanksgiving-justicon-lineal-justicon"/>
      <h1>SIGN UP</h1>
      </div>
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text"    onChange={(e) => handleInputChange('username', e.target.value)} placeholder="Name" />
          {formErrors.username && <p className="error">{formErrors.username}</p>}
        </div>
        <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email"  onChange={(e) => handleInputChange('emailid', e.target.value)}   placeholder="Email" />
        {formErrors.emailid && <p className="error">{formErrors.emailid}</p>}
      </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password"   onChange={(e) => handleInputChange('password', e.target.value)} placeholder="Password" />
          {formErrors.password && <p className="error">{formErrors.password}</p>}
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password"   onChange={(e) => handleInputChange('conpassword', e.target.value)} placeholder="Confirm Password" />
          {formErrors.conpassword && (<p className="error">{formErrors.conpassword}</p>)}
        </div>
        <input onClick={validate} className="signup-btn"  type="submit" value="SIGNUP" />
      </form>
    <p style={{textDecoration:'none'}} > <Link to='/' style={{textDecoration:'none',color:'darkblue'}}>Already Have an account? Login</Link></p>
    </div>
    </div>
    </div>
    </div>
  )
}