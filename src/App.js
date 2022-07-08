import './App.css';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/Login/SignUp';
import SignIn from './Pages/Login/SignIn';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
