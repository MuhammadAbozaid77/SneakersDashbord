import React , { useState }from 'react';
import logo from './../../../Assests/logo.jpg';
import { Link , useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Send_Loggin_Data } from '../AuthRedux/AuthReduxServices';

export default function Login () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    
    const handelLoggin = async ()=>{
        dispatch(Send_Loggin_Data(userEmail , userPassword));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        handelLoggin();        
        navigate("/login");
    };


  return  <>
  
  <section className="bg-black dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800
                        dark:border-gray-900 border">
            <div className='flex justify-center items-center py-5 '> 
                <img className="w-[150px]" src={logo} alt="logo"/> 
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 
                                md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" className="block text-md text-gray-900 dark:text-white">
                        Your email
                        </label>
                        <input type="email" name="email" id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px]
                                rounded-lg focus:ring-primary-600 focus:border-primary-600 block
                                w-full p-3 dark:bg-gray-700 dark:border-gray-600
                                dark:placeholder-gray-400 dark:text-white
                                dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="name@company.com" required=""
                            onChange={(e)=>setUserEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="password" className="block text-md text-gray-900 dark:text-white">
                        Password
                        </label>
                        <input type="password" name="password" id="password" placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-3
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required="" 
                            onChange={(e)=>setUserPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <Link to="#" className="text-gray-500 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Forgot password?
                        </Link>
                    </div>
                    <button type="submit" className="w-full text-white bg-black hover:bg-blue-700 duration-300 
                                            focus:ring-4 focus:outline-none 
                                            focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                            dark:bg-primary-600 
                                            dark:hover:bg-primary-700 dark:focus:ring-primary-800 border"> 
                        Sign in 
                    </button>
                </form>
            </div>
        </div>
    </div>
  </section>

  </>
}
