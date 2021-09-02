import React from 'react'
import { BannerItems } from './BannerItems.js'

export const DesktopBanner = ({colClass,category,not,itemList,MessageList,Dates,deleteTodo}) => {
    const {ids} = itemList;
    return (
        <div className={colClass}>
        <section className="heading-items px-2 pt-3 d-flex justify-content-between">
            <h3 className="todo text-break">{category}</h3>
            <p className="qunatity text-center pt-2">{not}</p>
        </section>



        <div className="col-12 data d-flex flex-row">


<div className="row flex-coloumn">

    {
        ids.map((BannerItemsList,index)=>{
            return  <BannerItems key={index} Message={MessageList.Msgs[index]} Date = {Dates.TodayTask[index]} category={category} deleteTodo = {deleteTodo} />
        })
    }

 



</div>





















</div>






    </div>
    )
}
