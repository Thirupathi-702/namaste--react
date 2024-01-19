import { useState } from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={FoodFireLogo}
      alt="Food Fire Logo"
      title="Food Fire"
    />
  </a>
);
const Header=()=>{
    const [isloggedin,setIsLoggedin]=useState(true);
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact
                    </li>
                    <li>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </li>
                    <li>
                        {isloggedin?(
                            <button className="logout-btn"
                            onClick={()=>setIsLoggedin(false)}>logout</button>
                        ):(
                            <button className="login-btn" onClick={()=>setIsLoggedin(true)}>
                                Login
                            </button>
                        )}
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default Header;