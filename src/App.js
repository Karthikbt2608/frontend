import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';


function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Register/>}/>
        <Route path='/home'   element={<Home/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
