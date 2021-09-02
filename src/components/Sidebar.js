
import {
    Link
} from "react-router-dom";


import { IoMdAnalytics } from 'react-icons/io';
import {BiHomeAlt} from 'react-icons/bi';
import {MdEventBusy} from 'react-icons/md';
import {MdPersonalVideo} from 'react-icons/md';

import {FcTodoList} from 'react-icons/fc';
export const Sidebar = ({Width}) => {

    const showDropdown = () =>{
            let dropDown = document.querySelector(".dropdownMenu").style;
            let sidebar = document.querySelector(".sidebar").style;
            if(Width < 576)
                sidebar.display === "block" ? dropDown.display === "block" ? dropDown.display = "none" : dropDown.display="block" : dropDown.display="none"
    }
    return (
      
            <div className="sidebar-content">

               

                

                <section className="menu-list mt-3 d-flex flex-column justify-content-between">

                    <nav className="manu-item-holder">
                        <ul className="menu-items px-2">


 
                            <li className="py-2 mt-1 activate">
                                
                                <Link to="/" className="dashboard"><BiHomeAlt /></Link>
                                
                            </li>




                            <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle ps-0" id="navbarDropdown" role="button"   aria-expanded="false">
          <button to="/Lead" className="Lead" onClick = {showDropdown}><FcTodoList /></button>
          </Link>
          <ul class="dropdownMenu p-0" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item " to="/category/personal">{<MdPersonalVideo />}</Link></li>
            <li><Link class="dropdown-item" to="/category/bussiness">{<MdEventBusy/>}</Link></li>
          </ul>
        </li>

                           




                            <li className="py-2  mt-1">
                                
                                <Link to="/Analytics" className="Employee"><IoMdAnalytics /></Link>
                                
                            </li>






                           




                          







                            

                           
                        </ul>
                    </nav>

                    <nav className="menu-item-holder">
                        
                        {/* <button><FaSignInAlt /></button> */}
                        <p className="mt-2 h-100">v1.0.1</p>
                        
                    </nav>

                </section>
            </div>
     
    )
}
