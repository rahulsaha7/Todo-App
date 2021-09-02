import React from 'react'
import { TodoItem } from '../TodoItem';

export const Bussiness = ({Banners,deleteTodo}) => {
    const [Checked, setChecked] = React.useState(false);
    const {ids} = Banners[1].itemList;

    return (
    <>
        <div className="container-fluid ps-3 m-0 mt-3">
        <h3 className="title text-white">Hey! What's up</h3>

        <p className="categories-title mt-4">Bussiness</p>
        <section className="row mt-2">
           
            {/* {
                Banners.map((BannerList ) => {
                    return <BannerView key = {BannerList.id} not = {BannerList.msgNo} colClass = {BannerList.colClass} borderClass = {BannerList.borderClass} category = {BannerList.Category} Message = {BannerList.TodoMsg} />
                })
            }
            */}
           
          
        </section>

        <section className="todolistHolder">
        <p className="categories-title mt-4">Todos</p>
        <div className="row mt-2 h-100 overflow-scroll">
        
        {

            ids.map ((TodoItems,index) => {
               return <TodoItem TodoTitle = {Banners[1].TodoMsg.Msgs[index]}  Checked = {Checked} setChecked = {setChecked} key = {index} category={Banners[1].Category}  deleteTodo={deleteTodo}  />
            }) 
        }
            
        
        

            
           
        </div>
        </section>
        
       
</div>
</>
    )
}
