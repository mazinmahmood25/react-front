import { useState } from 'react';
import LoginJson from '../../../../JsonData/LoginJson/LoginJson'

 const AdminInfo = () =>{
const [data, setinfo] = useState(LoginJson)

    const  isLoggedIn =  localStorage.getItem("LoginToken");
    if (isLoggedIn) {
        // setinfo(MenuJson)
    }
     return(
         <>
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">{data.email}</div>
            </a>
    </>

     )
 }

 export default AdminInfo