import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Laptops from './../pages/Laptops';
import Camera from './../pages/Camera';
import Accesories from './../pages/Accesories';

function Header() {
  return (<>
  <div className="container-l">
  <header className="header-top-strip py-2">
     <div className="row" >
     <div className="col-lg-6 col-sm-6 col-6">
      <p>
      
      Free Shipping Over $100 & Free Returns</p>
     </div>
     <div className="col-lg-6 col-sm-6 col-6">
      <p className="text-end">
      Hotline:<a href="tel:+91 6306952293">+91 6306952293</a></p>
     </div>

     </div>
     

  </header>
  </div>
  <div className="container-l">
  <header className="header-upper-strip py-3 p-3">

     <div className="row" >
     <div className="col-lg-2 col-md-3 col-3 p-3">
      <h1 className="p-2">
        <Link className="text-white">Ayush. </Link>
      </h1>
     </div>
     <div className="col-lg-5 col-md-7 col-9 p-3 ">
        <div className="input-group">
        <input type="text" className="form-control" placeholder="Product's name" aria-label="Product's name" aria-describedby="basic-addon2" />
         <span className="input-group-text p-3" id="basic-addon2">
          <BsSearch className="fs-6  sizech" />
         </span>
        </div>
       </div>
     <div className="col-lg-3 col-md-10 col-12 p-3 gap-15">
     <div className="header-upper-links  d-flex align-items-center p-2 m-0   ">
      <div>
        <Link className="d-flex">
           <box-icon className="ayush" name='git-compare' size='4vh' color='white'></box-icon>
             <p className="text-white mb-0" >
              Compare <br /> Products
             </p>
        </Link>
      </div>
      <div>
        <Link className="d-flex">
            <box-icon className="ayush" name='heart' color='white' size='4vh'></box-icon>
             <p className="text-white mb-0">
              Favourite <br /> Wishlist
             </p>
        </Link>
      </div>
      <div>
        <Link className="d-flex">
              <box-icon className="ayush" name='log-in' color='white' size='4vh' ></box-icon>
             <p className="text-white mb-0">
              Log in<br />Account
             </p>
        </Link>
      </div>
      <div>
        <Link className="d-flex align-item-centre text-white">
              <box-icon className="ayush" name='cart' color='white' size='4vh'></box-icon>
             <div className="d-flex flex-column">
               <span className="badge bg-white text-dark">0</span>
               <p className="mb-0">$500</p>
             </div>
        </Link>
      </div>
      </div>
     </div>
     </div>
     </header>
     </div>
   <div className="container-l">
   <header className="header-bottom py-3">
    <div className="menu-bottom d-flex align-items-center gap-30">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-6">
        <div className="dropdown">
  <button type="button" className="btn btn-transparent dropdown-toggle gap-15 d-flex align-items-center" data-bs-toggle="dropdown">
    <img src="images/images/menu.svg"></img><span>Shop Categories</span>
  </button>
  <ul className="dropdown-menu text-white">
    <li><Link className="dropdown-item" to="/laptop">Laptops</Link></li>
    <li><Link className="dropdown-item" to="/camera">Camera</Link></li>
    <li><Link className="dropdown-item" to="/acce">Accesories</Link></li>
  </ul>
</div>
        </div>
        <div className="col-lg-6 col-md-6 col-6">
         <div className="menu-links">
          <div className="d-flex align-items-center gap-15">
          <NavLink to="/" className="text-white">Home</NavLink>
          <NavLink to="/store" className="text-white">Store</NavLink>
          <NavLink to="/blog" className="text-white">Blog</NavLink>
          <NavLink to="/contact" className="text-white">Contact</NavLink>
          </div>
          </div>
         </div>
        </div>
        </div>
    
    
   </header>
   </div>  
  </>
  );
  
};

export default Header;