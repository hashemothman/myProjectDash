import { useState } from 'react';
import Logo from '../../../../../public/logo.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <img src={Logo} alt="Logo" className="logo" />
      <div className="form-group">
        <div className="email">
          <label htmlFor="email">البريد الإلكتروني</label>
          <input type="email" id="email" placeholder="أدخل بريدك الإلكتروني" />
        </div>
        <div className="password-group">
          <label htmlFor="password">كلمة المرور</label>
          <div className="password-input-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="أدخل كلمة المرور"
            />
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <span className='hr'></span>
        <Link to={'/home'}>
        <button className="login-button" >تسجيل الدخول</button></Link>
        
      </div>
    </>
  );
}

export default Login
