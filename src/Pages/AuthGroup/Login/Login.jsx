import React , { useState }from 'react';
import logo from './../../../Assests/logo.jpg';
import { Link , useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Send_Loggin_Data } from '../AuthRedux/AuthReduxServices';
import { meTailwindStyles } from '../../../Assests/styleTailwind';

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
                <h1 className={`${meTailwindStyles.loginHeader}`} >  Sign in to your account  </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" className={`${meTailwindStyles.loginLabel}`}> Your email </label>
                        <input type="email" name="email" id="email" 
                            className={`${meTailwindStyles.loginInput}`}
                            placeholder="name@company.com" required=""
                            onChange={(e)=>setUserEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="password" className={`${meTailwindStyles.loginLabel}`}>  Password  </label>
                        <input type="password" name="password" id="password" placeholder="••••••••" 
                            className={`${meTailwindStyles.loginInput}`}
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
                    <button type="submit" 
                            className={`${meTailwindStyles.loginButtonSubmit}`}
                    > 
                        Sign in 
                    </button>
                </form>
            </div>
        </div>
    </div>
  </section>

  </>
}
