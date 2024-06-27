import "./Logout.css";


function Logout() {
    return (
       <div className=""> 
            <div className="container">
                <button> X </button>
                <div className="title">
                    <h1>Are you sure you want to log out? </h1>
                </div>
                   
                <div className="footer">
                    <button> Cancel</button>
                    <div></div>
                    <button>Log Out</button>
                </div>
            </div>

       </div>





    );

}

export default Logout