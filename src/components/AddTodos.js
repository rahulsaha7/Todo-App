import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const AddTodos = ({ closeTodoOption,updateDesktopHeadings,desktopHeadings }) => {
  const [TodayTask,setTodayTask] = useState(false)




  const [TodoFormData, setTodoFormData] = useState({
      TodoTitle:"",
      // TodayTask: new Date().getUTCFullYear()+ "/" + new Date().getUTCMonth()+ "/" + new Date().getUTCDate(),
      TodayTask:"",
      category:"",

  })

  // const [alldata, setalldata] = useState(desktopHeadings[0]);


 

  const updateFormData = (e) =>{

  
    e.preventDefault();
    
    let alldata;
    let newData=[];
    let id ;
    let msgno ;


    switch (TodoFormData.category) {
      case "personal":
        alldata=desktopHeadings[0];
        msgno = desktopHeadings[0].msgNo
        id=0;
        break;
        case "bussiness":
          alldata=desktopHeadings[1];
          msgno = desktopHeadings[1].msgNo
          id=1;
          break;
          case "Today's Task" :
          alldata=desktopHeadings[2];
          msgno = desktopHeadings[2].msgNo
          id=2;
          break;
          default:
            break;
    }


   
    
    let ids = alldata.itemList.ids;
    let msgs = alldata.TodoMsg.Msgs;
    let dates = alldata.Dates.TodayTask;
    
    
     msgno = msgno+1;
     newData = ({...alldata,msgNo:msgno});

    // console.log(alldata);
     let newids = ['ids'+msgno];

     ids = ids.concat(newids);
     let itemlist = {...newData.itemList,ids:ids}

    let newmsgs = [TodoFormData.TodoTitle];
    msgs = msgs.concat(newmsgs);
    let todomsg = {...newData.TodoMsg,Msgs:msgs}

    let newdates = [TodoFormData.TodayTask];
    dates = dates.concat(newdates);
    let tododates = {...newData.Dates,TodayTask:dates}

     
    newData = ({...newData,id:id});
     
    newData = ({...newData,Category:TodoFormData.category});
    
    newData = ({...newData,itemList:itemlist});
    newData = ({...newData,TodoMsg:todomsg});
    newData = ({...newData,Dates:tododates})

    switch (TodoFormData.category) {
      case "personal":
        desktopHeadings[0]=newData;
        break;
        case "bussiness":
          desktopHeadings[1]=newData;
          break;
          case "Today's Task" :
            desktopHeadings[2]=newData;
            break;
          default:
            break;
    }

   
    updateDesktopHeadings(desktopHeadings);
  

      
  }
  
  return (
    <>
      <section className="col-12">
        <button
          className="CloseTodo rounded-circle position-fixed"
          onClick={closeTodoOption}
        >
          <i>
            <AiOutlineClose />
          </i>
        </button>
        <form className="h-100"  method="post"  onSubmit = {(e)=>{updateFormData(e)}}  >
         
        <section className="input-holders d-flex align-items-center justify-content-center h-100 flex-column">
          <div className="TodoMsg">
            <input
              type="text"
              className="form-control"
              aria-label="Text input "
              placeholder = "Enter Todo"
              name="TodoTitle"
              required
              value={TodoFormData.TodoTitle}
              onChange={(event)=>{setTodoFormData({...TodoFormData,TodoTitle:event.target.value})}}
            />
          </div>
          <div class="input-group mb-3 ">
            <div class="input-group-text">
              <input
                className="form-check-input TodayTaskCheckbox mt-0 rounded-circle"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
                onChange = { (e) => {setTodayTask(e.target.checked)}}
                id="TodayTaskCheckbox"
                
              />
            </div>
            <input
              type="date"
              
              

              className="form-control"
              aria-label="Text input with checkbox"
              placeholder = "Today's Task"
              name="TodayTask"
              disabled = {!TodayTask}
              required = {TodayTask}
              value={TodoFormData.TodayTask}
              onChange={(event)=>{setTodoFormData({...TodoFormData,TodayTask:event.target.value})}}
            />
          </div>
          <div className="Category">
           
              <select  className="form-control"  name="Category"  id="" hidden={TodayTask} 
              required=" " onChange={(event)=>{setTodoFormData({...TodoFormData,category:event.target.value})}}>
                <option defaultValue="Select Category">SELECT CATEGORY</option>
                <option value="personal">personal</option>
                <option value="bussiness">bussiness</option>
                
              </select>
              <select  className="form-control"  name="Category"  id="" hidden={!TodayTask}
              required={TodayTask}  onChange={(event)=>{setTodoFormData({...TodoFormData,category:event.target.value})}}>
                <option defaultValue="Select Category">SELECT CATEGORY</option>
                
                <option value="Today's Task">Today's Task</option>
              </select>
          </div>
          <button type="submit">submit</button>
        </section>

        

        </form>
      </section>
    </>
  );
};
