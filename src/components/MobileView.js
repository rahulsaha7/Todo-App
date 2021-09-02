import React from 'react'


import { TodoItem } from './TodoItem.js'
import {BannerView} from './BannerView.js'
import { AddTodoButton } from './AddTodoButton.js';





export const MobileView = ({setDataChangeSuccess,DataChangeSuccess,Banners,setBanners,deleteTodo}) => {

    
    const [Checked, setChecked] = React.useState(false);

   

        
        const setnewDesktopHeadings = (TodoFormData) =>{
            setBanners(TodoFormData);
            alert("Todo Added");
            DataChangeSuccess ? setDataChangeSuccess(false) : setDataChangeSuccess(true);
            
        }


       
        
        
        const {ids} = Banners[2].itemList;

    return (
        <>
            <div className="container-fluid ps-3 m-0 mt-3">
                    <h3 className="title text-white">Hey! What's up</h3>

                    <AddTodoButton  setnewdesktopHeadings = {setnewDesktopHeadings}  desktopHeadings = {Banners}  />
                    <p className="categories-title mt-4">Categories</p>
                    <section className="row mt-2">
                       
                        {
                            Banners.map((BannerList ) => {
                                return <BannerView key = {BannerList.id} not = {BannerList.msgNo} colClass = {BannerList.colClass} borderClass = {BannerList.borderClass} category = {BannerList.Category} Message = {BannerList.TodoMsg} />
                            })
                        }
                       
                       
                      
                    </section>

                    <section className="todolistHolder">
                    <p className="categories-title mt-4">Today's Tasks</p>
                    <div className="row mt-2 h-100 overflow-scroll">
                    
                    {

                        ids.map ((TodoItems,index) => {
                           return <TodoItem TodoTitle = {Banners[2].TodoMsg.Msgs[index]}  Checked = {Checked} setChecked = {setChecked} key = {index} category={Banners[2].Category}  deleteTodo={deleteTodo} />
                        }) 
                    }
                        
                    
                    

                        
                       
                    </div>
                    </section>
                    
                   
            </div>
        </>
    )
}
