 import {Outlet} from 'react-router-dom';
import SideMenu from '../components/AdminHeader/SideMenuBar'
import TopBar from '../components/AdminHeader/TopBar'

 const Admin = () =>{
     return(
         <>
        <div id="wrapper">
    <SideMenu/>
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
    <TopBar/>
    <div className="container-fluid">
     < Outlet/>
    </div>
    </div>
    </div>
    </div>
        </>
     )

 }
 export default Admin;