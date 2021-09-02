import React from "react";

import { DesktopBanner } from "./DesktopBanner.js";
import { AddTodoButton } from "./AddTodoButton.js";


export const Dashboard = ({
  desktopHeadings,
  setdesktopHeadings,
  DataChangeSuccess,
  setDataChangeSuccess,
  deleteTodo
}) => {
  const setnewDesktopHeadings = (TodoFormData) => {
    setdesktopHeadings(TodoFormData);
    alert("Todo Added");
    DataChangeSuccess
      ? setDataChangeSuccess(false)
      : setDataChangeSuccess(true);
  };


  return (
    <>
      <div className="container-fluid p-0 m-0 mt-3">
        <AddTodoButton
          setnewdesktopHeadings={setnewDesktopHeadings}
          desktopHeadings={desktopHeadings}
        />

        <div className="row">
          <div className="col-12 headings">
            <section className="row">
              {desktopHeadings.map((headingList) => {
                return (
                  <DesktopBanner
                    key={headingList.id}
                    colClass={headingList.colClass}
                    category={headingList.Category}
                    not={headingList.msgNo}
                    itemList={headingList.itemList}
                    MessageList={headingList.TodoMsg}
                    Dates={headingList.Dates}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
