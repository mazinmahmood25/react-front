
import './App.css';
import AdminLayout  from './layouts/Admin'
import Login  from './layouts/Login'
import { Routes, Route } from 'react-router-dom';
import Buttons from './components/Button/Button'
import Cards from './components/Cards/Cards'
import Color from './components/Color/Color'
import Border from './components/Border/Border'
import Animations from './components/Animations/Animations'
import Other from './components/Other/Other'
import Tables from './components/Tables/Tables'
import Charts from './components/Charts/Charts'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <>
    {/* <AdminLayout/> */}
    <Routes>
    <Route exact path="/login" element={<Login/>}/>

      <Route exact path="/" element={<Login/>}/>
      <Route path="/admin" element={<AdminLayout/>}>
                <Route path="buttons"  element={<Buttons/>} />
                <Route path="cards"  element={<Cards/>} />
                <Route path="colors"  element={<Color/>} />
                <Route path="borders"  element={<Border/>} />
                <Route path="animations"  element={<Animations/>} />
                <Route path="other"  element={<Other/>} />
                <Route path="Tables"  element={<Tables/>} />
                <Route path="charts"  element={<Charts/>} />
                <Route path="dashboard"  element={<Dashboard/>} />
      </Route>
    </Routes>
    </>
      
    
  );
}

export default App;
