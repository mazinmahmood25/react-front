import loginlist from '../../JsonData/LoginJson/LoginJson'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginFrom = () =>{
    const navigate = useNavigate();

    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [error,seterror] = useState('') 
    const emailhandle = (e) =>{
                setemail(e.target.value)
            }
            const passwordhandle = (e) =>{
                setpassword(e.target.value)
            }
            const Loginhandle = (e) =>{
                e.preventDefault()
                if(email === '' || password === ''){
                    seterror('is requrid')
                }else if(email !== loginlist.email){
                    seterror('email not macth')
                }
                else if(password !== loginlist.password){
                    seterror('password not macth')
                }
                else{
                    seterror('')
                    localStorage.setItem('LoginToken', loginlist.LoginToken);
                    const  isLoggedIn =  localStorage.getItem("LoginToken");
                if (isLoggedIn) {
                    navigate('/admin/dashboard');
                }
                else{
                    navigate('/login');
                } 
            }
        }

    return(
       <>
            <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form className="user" onSubmit={Loginhandle}>
                                        <div className="form-group">
                                            <input type="email" onChange={emailhandle} className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..."/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" onChange={passwordhandle} className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" htmlFor="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button href="index.html" className="btn btn-primary btn-user btn-block">
                                            Login
                                        </button>
                                        {error && <div className="error">{error}</div>}
                                 
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            </div>
       </>
    )

}
export default LoginFrom;