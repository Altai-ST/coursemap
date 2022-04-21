import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchGet, fetchUser } from "../../containers/httpRequest";
import styled from "./register.module.scss";

export default function Register() {
  // Состояние всех инпутов которые есть в регистрации 
  const [formData, setFormData] = useState({
    user_type:"",
    first_name: "",
    last_name: "",
    father_name: "",
    email: "",
    phone_number:"",
    password: "",
    // image:"",
    password_confirmation:"",
  });
  // Состояние кнопки зарегистрироваться
  const [disBtn, setDisBtn] = useState(false);
  // Состояние ошибок в пароле
  const [truePass, setTruePass] = useState(true);
  // Состояние ошибок в повторном пароле
  const [truePassCon, setTruePassCon] = useState(true);
  //Состояние ошибок в номере телефоне
  const [truePhone, setTruePhone] = useState(false);
  // Состояние ошибок в email
  const [trueEmail, setTrueEmail] = useState(true);
  // Состояние не пустая ли строка
  const [noEmpty, setNoEmpty] = useState({
    name:false,
    first_name:false,
    father_name:false
  })

  // Регулярные выражения для пароля и телефона
  const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");
  const regexPhone = new RegExp("(?=.*[0-9])")

  //функция для обработки инпутов
  const handleChange = (val) => {
    const values = val.target.value;
    switch (val.target.name) {
      case "name":
        setFormData({ ...formData, first_name: values });
        if(values !== "") setNoEmpty({...noEmpty, name: true})
        else setNoEmpty({...noEmpty, name: false})
        break;
      case "surname":
        setFormData({ ...formData, last_name: values });
        if(values !== "") setNoEmpty({...noEmpty, first_name: true})
        else setNoEmpty({...noEmpty, first_name: false})
        break;
      case "fathername":
        setFormData({ ...formData, father_name: values });
        if(values !== "") setNoEmpty({...noEmpty, father_name: true})
        else setNoEmpty({...noEmpty, father_name: false})
        console.log(noEmpty)
        break;
      case "email":
        setFormData({ ...formData, email: values });
        if(values.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)){
          setTrueEmail(true)
        }else setTrueEmail(false)
        break;
      case "phone":
        setFormData({ ...formData, phone_number: values.split(' ').join('') })
        if (regexPhone.test(formData.phone_number.slice(-1))) setTruePhone(true)
        else setTruePhone(false)
        break;
      case "password":
        if (regexPassword.test(values)) setTruePass(true)
        else setTruePass(false)
        setFormData({ ...formData, password: values });
        break;
      case "password_confirmation":
          setFormData({ ...formData, password_confirmation: values });
          values === formData.password ? setTruePassCon(true) : setTruePassCon(false)
        break;
      case "user_type":
        setFormData({...formData, user_type: values})
        break
      case "avatar":
        const formDataS = new FormData()
        formDataS.append('file', val.target.files[0])
        console.log(formDataS.get('file'))
        setFormData({...formData, image: formDataS})
        break;
      default:
    }
    if(truePass && truePassCon && truePhone && noEmpty.name && noEmpty.first_name && noEmpty.father_name && (formData.user_type !== "")) setDisBtn(false)
    else setDisBtn(true)
  };

  //диспетчер. прочитите документацию о react-redux
  const dispatch = useDispatch()

  //Функция отправки формы на сервер и сохранение его в store. Прочтите о redux-toolkit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData))
    const user = await dispatch(fetchUser(formData));
    console.log(user)
  };


  // Пытался реализовать отправку изображение на сервер
  // const handleImg = ()=>{
  //   const res =1
  //           if(res){
  //               setFormData({...formData, avatar: res.fileUrl})
  //               // setShowAvatar(true)
  //           }
  // }

  return (
    <div className={styled.reg}>
      <h1>Course Map</h1>
      <h2>Регистрация:</h2>
      <form onSubmit={handleSubmit} action="" className={styled.forms}>
        <p>Тип пользователя:</p>
        <select name="user_type" onChange={handleChange}> 
          <option>Выберите тип</option>
          <option value="user">User</option>
          <option value="education_centre">EducationCenter</option>
          <option value="teacher">Teacher</option>
          <option value="non_profit_organization">Non-profit Organization</option>
          <option value="employer">Employer</option>
        </select>

        <p>Имя:<span className={styled.must}>*</span></p>
        <input type="text" onChange={handleChange} name="name" />

        <p>Фамилия:<span className={styled.must}>*</span></p>
        <input type="text" onChange={handleChange} name="surname" />

        <p>Отчество:<span className={styled.must}>*</span></p>
        <input type="text" onChange={handleChange} name="fathername" />

        <p>Email:<span className={styled.must}>*</span></p>
        <input type="email" onChange={handleChange} name="email" />
        {
          !trueEmail ? <div className={styled.falsePass}>Неверный email</div> : <></>
        }

        {/* <p>Фотография:</p>
        <input onChange={handleChange} name='avatar' type="file" id="formFile" /> */}

        <p>Пароль:<span className={styled.must}>*</span></p>
        <input type="password" onChange={handleChange} name="password" />
        {
          !truePass ? <div className={styled.falsePass}>Пароль должен не меньше 8 и иметь не меньше одного числа или символа</div> : <></>
        }

        <p>Повторите пароль:<span className={styled.must}>*</span></p>
        <input type="password" onChange={handleChange} name="password_confirmation" />
        {
          !truePassCon ? <div className={styled.falsePass}>Пароль не совпадает</div> : <></>
        }

        <p>Номер телефона:<span className={styled.must}>*</span></p>
        <InputMask value={formData.phone_number} mask="+\9\96 999 999 999" maskChar=" " name='phone' onChange={handleChange} />
        <button className={styled.login} disabled={disBtn}>Войти</button>
        <Link to='/auth' >
           <button className={styled.back}>Отмена</button>
        </Link>
      </form>
      
    </div>
  );
}
