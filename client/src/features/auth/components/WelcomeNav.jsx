import "../styles/WelcomeNav.css";

function WelcomeNav() {
   
    return (
        <nav className='bg-[#1F2025] flex justify-between items-center h-20 max-w-8xl px-4 font-bold sm:flex  sm:item-center'>
           
           {/* Logo */}
            <h1 id="logo">LvlUp</h1>
            
            {/* Desktop Navigation */}
            <div className='sm:flex pt-1' >
                <a href="#" className='text-[#DC2F02] p-3 t m-2 cursor-pointer duration-300 text-lg'> Meal Plans </a>
                <a href="#" className='text-[#E85D04] p-3 t m-2 cursor-pointer duration-300 text-lg'> Workouts </a>
                <a href="#" className='text-[#F48C06] p-3 t m-2 cursor-pointer duration-300 text-lg'> About Us </a>
                <a href="/login" className='text-[#ffba08] p-3 t m-2 cursor-pointer duration-300 text-lg'> Log In </a>
            </div>

            
            
        </nav>
    );
};

export default WelcomeNav;