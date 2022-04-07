import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../store/reducers";
import styled from "./register.module.scss";

export default function RegisterCopy() {
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
      <h2>Акции</h2>
        <p>fdsgh</p>
        <p>dsfghjk</p>
        {/* <TabsBlock content={<PriceCards/>}/> */}
    </div>
  );
}
