import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import NavigateButton from '../../component/navigate.button';
import PropTypes from 'prop-types'

function Login({ setLogin }) {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => { handleLogin(data.email, data.password) };
  const [loginErrors, setLoginErrors] = useState(false)
  
  function handleLogin(email, password) {
    if (email === "admin@mail.ru" && password === "admin") {
      navigate("/UserData")
      setLogin(true)
    }
    else {
      setLoginErrors(true)
    }
  }

  return (
    <>
      <NavigateButton url={"/"} name={"Home"} classis={"max_width"} />
      <div className='Login'>
        <form onSubmit={handleSubmit(onSubmit)} className='login_form'>
          {
            loginErrors !== false ? <p>Is the email or password incorrect</p> : null
          }
          <input type="email" placeholder="email" {...register("email", { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/i })} />
          <input type="password" placeholder="password" {...register("password", { required: true })} />
          <input type="submit" />
        </form>

      </div>
    </>);

}
Login.propTypes = {
  setLogin: PropTypes.func
}
export default Login