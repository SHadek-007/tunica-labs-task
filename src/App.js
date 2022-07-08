import './App.css';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/Login/SignUp';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
