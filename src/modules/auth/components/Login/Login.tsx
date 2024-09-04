import { useState } from "react";
import Logo from "../../../../../public/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import Cookies from "cookie-universal";
import "./Login.css";
import { apiUrl } from "../../../../ApiUrl";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();
  const cookie = Cookies();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const submitLogin = async (value: any) => {
    value.preventDefault();
    let send = false;
    if (password.length < 8 || !isEmailValid) {
      setAccept(true);
    } else send = true;

    if (send) {
      try {
        // sent email and password to login
        const res = await axios.post(apiUrl.login, {
          email: email,
          password: password,
        });

        //  save the token in cookies
        const token = cookie.set("secret_key", res.data.data.token, {
          httpOnly: true,
          secure: true, // تأكد من استخدام HTTPS  الإنتاج
          // maxAge: 24 * 60 * 60 // صلاحية الكوكيز (24 ساعة)
        });
        // Go to home after login
        navigate("/home");
      } catch (error) {
        console.error("Error during login:", error); // التعامل مع الأخطاء
      }
    }
  };
  // validate for email
  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
    handleEmailValidation(value);
  };

  const handleEmailValidation = (value: any) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(value));
  };
  return (
    <>
      <img src={Logo} alt="Logo" className="logo" />
      <form onSubmit={submitLogin}>
        <div className="form-group">
          <div className="email">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="text"
              id="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={handleEmailChange}
            />
            {!isEmailValid && accept && (
              <p className="error">يرجى إدخال البريد الإلكتروني بشكل صحيح</p>
            )}
          </div>
          <div className="password-group">
            <label htmlFor="password">كلمة المرور</label>
            <div className="password-input-container">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(value) => setPassword(value.target.value)}
              />
              <span
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {password.length < 8 && accept && (
              <p className="error">لا يجب ان تكون كلمة المرور أقل من 8 أحرف</p>
            )}
          </div>
          <span className="hr"></span>
          {/* <Link to={'/home/reports'}> */}
          <button type="submit" className="login-button">
            تسجيل الدخول
          </button>
          {/* </Link> */}
        </div>
      </form>
    </>
  );
};

export default Login;
