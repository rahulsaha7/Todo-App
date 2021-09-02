import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";

export const BannerItems = ({Message,Date,category,deleteTodo}) => {



  
  return (
    <div className="col-12 mt-4">
      <section className="heading-items px-2 py-2">
        <div className="d-flex justify-content-between">
          <button className="edit" onClick={ ()=>{deleteTodo(Message,category)}}>
            <RiDeleteBin3Line />
          </button>

          <button className="delete">
            <RiEdit2Line />
          </button>
          
        </div>
        {
          Message
           
        }
        <div className="d-flex justify-content-between mt-2 py-2">
          <section className="time px-2 py-1">{category}</section>
          <section className="profiles">{Date}</section>
        </div>
      </section>
    </div>
  );
};
