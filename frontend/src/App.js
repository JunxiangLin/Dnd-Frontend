import './App.css';
import api from "./api/axiosConfig";
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Login from "./components/home/Login";
import Signup from "./components/home/SignUp";
function App() {
  
  const [users, setUsers] = useState();

  const getUsers = async () =>{
    try {
      const response = await api.get("/users");
      console.log(response.data);
      setUsers(response.data);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getUsers();
  },[])

  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup />}> </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
