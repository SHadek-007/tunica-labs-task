import './App.css';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/Login/SignUp';
import SignIn from './Pages/Login/SignIn';
import Dashboard from './Pages/Dashboard/Dashboard';
import ViewStudent from './Pages/Dashboard/ViewStudent';
import AddStudent from './Pages/Dashboard/AddStudent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditStudent from './Pages/Dashboard/EditStudent';

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
          <Route path='/dashboard/:id' element={<EditStudent></EditStudent>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
