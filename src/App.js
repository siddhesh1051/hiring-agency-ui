import './App.css';
import HomePage from './components/HomePage';
import { Routes,Route } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster/>

      <Routes>
        
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/auth' element={<Authentication/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
