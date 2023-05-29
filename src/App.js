
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlanetIX from './Pages/PlanetIX';
import Home from './Pages/Home'
import Game from './Pages/Game';
import IXFoundation from './Pages/IXFoundation';
import More from './Pages/More';
import Netempire from './Pages/Netempire';
import PageNotFound from './Pages/PageNotFound'
import Navbar from './Components/Navbar';



function App() {
  return (
    
<>
<div className='box'>
<Navbar/>
<BrowserRouter>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/planetix' element={<PlanetIX/>}/>
      <Route path='/game' element={<Game/>}/>
      <Route path='/ixfoundation' element={<IXFoundation/>}/>
      <Route path='/more' element={<More/>}/>
      <Route path='/netempire' element={<Netempire/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      

  </Routes>
</BrowserRouter>

</div>
</>
  );
}

export default App;
