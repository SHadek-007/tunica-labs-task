import './App.css';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/Login/SignUp';
import SignIn from './Pages/Login/SignIn';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import ViewStudent from './Pages/Dashboard/ViewStudent';
import AddStudent from './Pages/Dashboard/AddStudent';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<ViewStudent></ViewStudent>}></Route>
          <Route path='addStudent' element={<AddStudent></AddStudent>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
