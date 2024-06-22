import "./Login.css";
import loginPic from "./login-pic.png";

function Login() {
    return (
        <div className="login">
            <body className="flex justify-center items-center min-h-screen">
                <div className="bg-[#1F2025] text-[#181028] p-8 space-y-6 shadow-2xl rounded-xl max-w-full">
                    <h1 id='logTitle'> LvlUp </h1>
                    <p>Welcome back! Please enter your login credentials.</p>
                    <form className="space-y-6" action="#" method="POST"> 
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900" id="emailLabel">
                                Email
                            </label>
                            <div className="mt-2">
                                <input id="email" 
                                    name="email" 
                                    type="email" 
                                    autocomplete="email" 
                                    required 
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
                             </div>
                        </div>

                        
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" id="passwordLabel">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        autocomplete="current-password" 
                                        required 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="text-sm">
                                <a href="#" id="forgotLabel">
                                    Forgot password?
                                </a>
                            </div>
                        
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    id="button">
                                    Sign in
                                </button>
                            </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-white-500">
                        Don't have an account?{' '}
                         <a href="/register" id="signUpLink" className="font-semibold leading-6 "> {/*link to register page*/}
                            Sign up now
                        </a>
                    </p>
                </div>

                <div>
                    <img id="pic" className="rounded-xl shadow-2xl max-w-full" src={loginPic} />
                </div>
            </body>
                
        </div>
          

    );

}



export default Login