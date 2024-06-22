import "./Login.css"

function Login() {
    return (
        <div className="login">
            <body className="flex justify-center items-center min-h-screen">
                <div className="bg-[#1F2025] text-[#181028] p-8 space-y-8 shadow-2xl rounded-xl max-w-full">
                    <h1 id='logTitle'>Log In</h1>
                    <p>Welcome back! Please enter your login credentials.</p>
                    <form className="space-y-6"> 
                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-gray-900" id="emailLabel">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                             </div>
                        </div>

                        
                            <div>
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900" id="passwordLabel">Password</label>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        

                    </form>
                </div>
            </body>
                
        </div>
          

    );

}



export default Login