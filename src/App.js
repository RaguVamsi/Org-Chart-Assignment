import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Welcome from './Routes/Welcome';
import Add from './Routes/Add';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Welcome/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/add' element={<Add/>}/>
   </Routes>
  );
}


export default App;
