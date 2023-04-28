import './sass/index.scss';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage'
import Navbar from './components/Navbar'
import CalculatorPage from './pages/CalculatorPage'
import ErrorPage from './pages/ErrorPage'

const App = ()=> {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calculatorApp/*' element={<CalculatorPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
