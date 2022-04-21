import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Routers from "./component/routePage";
import { fetchGet } from "./containers/httpRequest";
import { saveCategory, saveCourse, saveTutor, saveUser } from "./store/reducers";

function App() {
  // const stateUser = useSelector(state=>state.users.userData)
  const dispatch = useDispatch()
  // функция сохранение данных с сервера в store
  const getCourses = async()=>{
    // const dataCategory = dispatch(fetchGet())
    dispatch(fetchGet())
    // const dataTutor = dispatch(fetchGet())
    // dispatch(saveTutor(dataTutor))
    // dispatch(saveCategory(dataCategory)
  }
  
  useEffect(()=>{

    //Пытался реализовать сохранение данных при отправке на сервер в локальное хранилище

    // console.log(stateUser)
    // const data = JSON.parse(localStorage.getItem("userData"))
    // if(data){
    //   dispatch(saveUser(data))
    // }
    getCourses()
  })

  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
