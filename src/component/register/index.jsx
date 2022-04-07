import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../store/reducers";
import styled from "./register.module.scss";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [disBtn, setDisBtn] = useState(true);
  const navigate = useNavigate();

  const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");

  const handleChange = (val) => {
    const values = val.target.value;
    switch (val.target.name) {
      case "name":
        setFormData({ ...formData, name: values });
        break;
      case "surname":
        setFormData({ ...formData, surname: values });
        break;
      case "email":
        setFormData({ ...formData, email: values });
        break;
      case "password":
        if (regexPassword.test(values)) {
          setDisBtn(false);
        } else {
          setDisBtn(true);
        }
        setFormData({ ...formData, password: values });
        break;
      default:
    }
  };

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser());
    navigate('/list')
  };

  return (
    <div className={styled.reg}>
      <h2>Registration:</h2>
      <form onSubmit={handleSubmit} action="" className={styled.forms}>
        <p>Имя:</p>
        <input type="text" onChange={handleChange} name="name" />
        <p>Фамилия:</p>
        <input type="text" onChange={handleChange} name="surname" />
        <p>Email:</p>
        <input type="email" onChange={handleChange} name="email" />
        <p>Пароль:</p>
        <input type="password" onChange={handleChange} name="password" />
        <button disabled={disBtn}>Register</button>
      </form>
    </div>
  );
}
