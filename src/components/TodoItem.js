import React from 'react'


import {FcEditImage} from 'react-icons/fc'
import {FcDeleteRow} from 'react-icons/fc'

export const TodoItem = ({TodoTitle,Checked,setChecked,category,deleteTodo}) => {


    return (
        <section className="col-12 mt-2">
        <div className="ps-3 py-3 tasks d-flex align-items-center">

        
            

            <div className="taskTitle d-flex align-items-center ms-3">
                <p className="text-white mb-0 text-break">{TodoTitle}</p>
            </div>


            <div className="update-delete-button w-50 d-flex justify-content-end">
                                        <button className="edit">
                                            <FcEditImage />


                                        </button>
                                            <button className="delete" onClick={()=>{deleteTodo(TodoTitle,category)}} >
                                                <FcDeleteRow />
                                            </button>
                                    </div>
        
           


        </div>
</section>
    )
}
