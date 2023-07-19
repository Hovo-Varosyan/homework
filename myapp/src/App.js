import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Login from "./pages/login/login";
import UserData from "./pages/user/user/userdata";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ActionData from "./store/userData/user.action";
import User from "./pages/user/user";
import CreateUser from "./pages/user/user/createuser";

function App() {
  
  const dispatch = useDispatch()
  const localLogin = JSON.parse(localStorage.getItem("signin"))
  const [login, setLogin] = useState(localLogin || false)

  useEffect(() => {

    localStorage.setItem("signin", login)

  }, [login])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((respons) =>{ dispatch(ActionData(respons.data))})
  }, [])


  return (
    <Routes>
      <Route path="/" element={<Landing login={login} setLogin={setLogin} />} />
      <Route path="/Login" element={<Login setLogin={setLogin} />} />
      {login === true ? (
        <>
          <Route path="/UserData" element={<UserData />} />
          <Route path="/UserData/User/:id" element={<User />} />
          <Route path="/create-user" element={<CreateUser />} />
        </>
      ) : null}
    </Routes>
  );
}

export default App;
