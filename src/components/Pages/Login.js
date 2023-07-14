                                                                                  import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

export const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);
    setIsSubmit(true);
    navigate("/");

    if (Object.keys(errors).length === 0) {
      axios.post("http://localhost:9002/login", user).then((res) => {
        alert(res.data.message);
        setUserState(res.data.user);
        navigate("/");
      });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post("http://localhost:9002/login", user).then((res) => {
        alert(res.data.message);
        setUserState(res.data.user);
        navigate("/");
      });
    }
  }, [formErrors]);

  return (
    <div className={loginstyle.login}>
      <form>
        <h5>Login</h5>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <NavLink to="/"><button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button></NavLink>
      </form>
      <NavLink to="/Register" className="register-link">
        Not yet registered? Register Now
      </NavLink>
    </div>
  );
};

export default Login;
