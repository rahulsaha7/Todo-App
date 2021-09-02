import React,{useState, useEffect} from "react";


import { FcMenu } from "react-icons/fc";
// import { FaSistrix } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaThemeisle } from "react-icons/fa";

import {
    Link
} from "react-router-dom";


export const Header = ({SearchData,setSearchData,SearchTodos,defaultTodoNo,updated}) => {

const [view, setview] = useState(false);
const [windowWidth, setWindowWidth] = useState(window.screen.width);
// const [ShowSearch, setShowSearch] = useState(true)
const [Notification, setNotification] = useState("none")




const changeWidth = () => {
    setWindowWidth(window.screen.width);
    
    let sidebar = document.querySelector(".sidebar").style;
    let mainContent =  document.querySelector(".main").style;

    windowWidth < 576 ? sidebar.display = "none" : sidebar.display = "block";
    windowWidth < 576 ? mainContent.marginLeft = "10px" : mainContent.marginLeft = "65px";
    windowWidth < 576 ? mainContent.width = "calc(100vw - 10px )" : mainContent.width = "calc(100vw - 65px )";


}


useEffect(() => {
    window.addEventListener("resize",changeWidth);
    return () => {
        window.removeEventListener("resize",changeWidth);
    }

})

const showSidebar = () =>{


    let sidebar = document.querySelector(".sidebar").style;
    let mainContent =  document.querySelector(".main").style;

    view ? sidebar.display = "none" : sidebar.display = "block";
    view ? mainContent.marginLeft= "10px" : mainContent.marginLeft = "65px";
    view ? mainContent.width = "calc(100vw - 10px )" : mainContent.width = "calc(100vw - 65px )";
    view ? setview(false) : setview(true);

    
}






    return (
        
        <div>
                <section className="navbar d-flex justify-space-between align-items-center" >
                    <button className="menuButton" onClick ={showSidebar}><FcMenu /></button>
                    <p className="theme mb-0 ps-1"><FaThemeisle /></p>
                    <div className="search-notify d-flex flex-row  px-3">
                        {/* <form action="" method="post" className="px-2" onSubmit = {(event)=>{SearchTodos(event)}}>


                    <input
              type="text"
              className="form-control"
              aria-label="Text input "
              placeholder = "Search"
              name="SearchTodo"
              hidden = {ShowSearch}
              required={!ShowSearch}
              value = {SearchData}
              
              onChange={(event)=>{setSearchData(event.target.value)}}

            />
                        </form> */}
                        {/* <button className="me-2" onClick = {()=>{ShowSearch ? setShowSearch(false) : setShowSearch(true)}} > <FaSistrix/> </button> */}
                <li>        
                <Link className="nav-link dropdown-toggle ps-0" id="navbarDropdown" role="button"   aria-expanded="false">
          <button onClick = {()=>{Notification === "none" ? setNotification("block") : setNotification("none")}}><FaBell /></button>
          </Link>
          <ul class=" bg-white p-0" aria-labelledby="navbarDropdown" style={{display:Notification}}>
            <p class="" href="#">{defaultTodoNo > updated ? "Todo added or deleted" : "No New Todo added or deleted" }</p>
            
          </ul>
          </li>
      
                    </div>
                </section>
        </div>
    )
}
