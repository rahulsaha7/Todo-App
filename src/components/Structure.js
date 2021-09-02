import React, { useState, useEffect } from "react";
import "../styles/Structure.css";
import { Header } from "../components/Header.js";

import { Dashboard } from "./Dashboard.js";
import { Sidebar } from "../components/Sidebar.js";
import {Personal} from './Categories/Personal.js'
import {Bussiness} from './Categories/Bussiness.js'
import { Analytics } from "./Analytics.js";



import { MobileView } from "./MobileView.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const getDataFromLocalStorage = () =>{
  let Heading = localStorage.getItem('Headings');
      if(Heading){
          return JSON.parse(localStorage.getItem('Headings'));
      }else{
          return [
              {
      
                  id:0,
                  msgNo:0,
                  Category:"personal",
                  colClass:"col-3",
                  itemList: {
                  ids:[
                     
                  ]
                  },
                  TodoMsg:{
                      Msgs:[
                       
                      ] 
                    },
                    Dates:{
                      TodayTask:[
                        
                      ]
                    },
                  borderClass:"border-span-2"
              
              },
              {
                  id:1,
                  msgNo:0,
                  Category:"Bussiness",
                  colClass:"col-3",
                  itemList : {
                      ids:[
                         
                      ]
                  },
                  TodoMsg:{
                    Msgs:[
                      
                    ] 
                  },
                  Dates:{
                      TodayTask:[
                        
                      ]
                    },
                  borderClass:"border-span"
                  
              },
              {
              
                  id:2,
                  msgNo:0,
                  Category:"Today's Task",
                  colClass:"col-3",
                  itemList: {
                  ids:[
                     
                  ]
                  },
                  TodoMsg:{
                      Msgs:[
                       
                      ] 
                    },
                    Dates:{
                      TodayTask:[
                        
                      ]
                    },
                  borderClass:"border-span-2"
              
              },
          ]
      }
}





export const Structure = () => {
  const [Width, setWidth] = useState(window.screen.width);
  const [DataChangeSuccess, setDataChangeSuccess] = useState(false);
  const [desktopHeadings, setdesktopHeadings] = useState(getDataFromLocalStorage());
  const [SearchData, setSearchData] = useState("");
  const [dataCount, setdataCount] = useState([
    {
      default:0,
      prevoius:0
    },
  ]);




  const deleteTodo = (Message, TodoCategory) => {
    let index;
    switch (TodoCategory) {
      case "personal":
        index = 0;
        break;

      case "Today's Task":
        index = 2;
        break;

      case "bussiness":
        index = 1;
        break;
      default:
        alert("something Went Wrong");
        break;
    }

    let TodoIndex = desktopHeadings[index].TodoMsg.Msgs.findIndex(
      (elements) => elements === Message
    );
    let deleteIds = desktopHeadings[index].itemList.ids[TodoIndex];
    let deleteDates = desktopHeadings[index].Dates.TodayTask[TodoIndex];

    let NewData = {
      ...desktopHeadings[index],
      msgNo: desktopHeadings[index].msgNo - 1,
    };
    let Msgs = desktopHeadings[index].TodoMsg.Msgs.filter((TodoDeleteIndex) => {
      return TodoDeleteIndex !== Message;
    });
    let ids = desktopHeadings[index].itemList.ids.filter((TodoDeleteIndex) => {
      return TodoDeleteIndex !== deleteIds;
    });
    let TodayTask = desktopHeadings[index].Dates.TodayTask.filter(
      (TodoDeleteIndex) => {
        return TodoDeleteIndex !== deleteDates;
      }
    );
    NewData = { ...NewData, TodoMsg: { Msgs } };
    NewData = { ...NewData, itemList: { ids } };
    NewData = { ...NewData, Dates: { TodayTask } };
    desktopHeadings[index] = NewData;
    setdesktopHeadings(desktopHeadings);

    DataChangeSuccess
      ? setDataChangeSuccess(false)
      : setDataChangeSuccess(true);
  };

   


  const SearchTodos = (e) =>{
    e.preventDefault();
    console.log(SearchData);
    console.log(desktopHeadings[2].TodoMsg.Msgs.findIndex(elements => elements=== SearchData) );
    setSearchData("");
  }
  
  

  const ChangeWidth = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", ChangeWidth);
    return () => {
      window.removeEventListener("resize", ChangeWidth);
    };
  });

  useEffect(() => {
    let data1 = dataCount[0].default;
    let data2 = dataCount[0].default;
    data1=data1+1;
    data1 = ({...dataCount,default:data1});
     data1 = ({...data1,prevoius:data2});
     
     dataCount[0]=data1;
    
    localStorage.setItem('Headings',JSON.stringify(desktopHeadings));
}, [DataChangeSuccess])

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 header">
            <Header SearchData={SearchData} setSearchData={setSearchData} SearchTodos = {SearchTodos} defaultTodoNo = {dataCount[0].default} updated = {dataCount[0].prevoius} />
          </div>
          <div className="col-12 main-content">
            <div className="row main-content-holder">
              <div className="col-12 sidebar">
                <Sidebar Width={Width} />
              </div>
              <div className="col-12 main">
            <Switch>
              <Route exact path = "/"  render = {props=>(

                  Width > 576 ? <Dashboard  {...props}  setDataChangeSuccess={setDataChangeSuccess} DataChangeSuccess = {DataChangeSuccess} desktopHeadings={desktopHeadings} setdesktopHeadings={setdesktopHeadings}  deleteTodo={deleteTodo}  /> : <MobileView setDataChangeSuccess={setDataChangeSuccess} DataChangeSuccess={DataChangeSuccess} Banners = {desktopHeadings} setBanners = {setdesktopHeadings} deleteTodo={deleteTodo}  /> 

              )}/>
               

               <Switch>
                        <Route exact path="/category/personal" render= {props=>(
                            <Personal {...props} Banners={desktopHeadings}   deleteTodo={deleteTodo} />
                        )} />
                        <Route exact path="/category/bussiness" render= {props=>(
                            <Bussiness {...props} Banners={desktopHeadings}  deleteTodo={deleteTodo} />
                        )} />
                        <Route exact path= "/Analytics" component ={Analytics}  />
               </Switch>
              
            
            


            </Switch>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
