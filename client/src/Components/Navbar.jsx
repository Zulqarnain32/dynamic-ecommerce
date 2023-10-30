import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
    const handleLogout = () => {
        console.log("logout button is clicked");
        window.localStorage.clear();
        axios.get('https://localhost:5000/auth/logout')
        .then(result => {
             window.location.reload();
             console.log("token is clear " + result);
        }).catch(err => console.log(err))
      }
  return (
    <>
       <div className="navbar-container">
            <div className="logo">
               <Link to = "/" className='logo-text'>Shoping</Link>
            </div>
          <div className="nav-links">
             <Link to = "/add-product" className='nav-link'>Add Product</Link>
             {
                window.localStorage.length > 0 ? (
                    <Link to = "/" className='nav-link login' onClick={handleLogout}>Logout</Link>
                ) : (
                    <Link to = "login" className='nav-link login'>Login</Link>
                )
             }
          </div>
       </div>
    </>
  )
}

export default Navbar