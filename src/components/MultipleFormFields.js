import React, { useState } from 'react'

export const MultipleFormFields = () => {
    const [regdata, setregdata] = useState({
            Name:"",
            email:"",
            password:"",
            birthday:""
    });
    const [alldata, setalldata] = useState([]);
    const handelSubmit = (e) =>{
        e.preventDefault();
        const test = ({...regdata,key:new Date().getTime().toString()});
        console.log(alldata);
        setalldata([...alldata,test]);
        console.log(alldata);
    }
    return (
        <>
        <div className="addtodoform mt-3">

                            
      

            <form className="" action="" method="post"  onSubmit = {handelSubmit}>

                    <div className="todotitle px-3">
                        <label htmlFor="todoTitle"></label>
                        <input  className="form-control" type="text" placeholder="Name" name="Name" id="todoTitle"  autoComplete="off" required  
                        value={regdata.Name} onChange={(event)=>{setregdata({...regdata,Name:event.target.value})}}/>
        
                    </div>

                    <div className="todoquantity px-3">
                        <label htmlFor="todoTask"></label>
                        <input type="text" className="form-control" name="email" id="todoTask" placeholder="Type Email" autoComplete="off" required
                        value={regdata.email} onChange={(event)=>{setregdata({...regdata,email:event.target.value})}}/>
                    </div>

                    <div className="todoquantity px-3">
                        <label htmlFor="todoTask"></label>
                        <input type="password" className="form-control" name="password" id="todoTask" placeholder="Type Password" autoComplete="off" required 
                        value={regdata.password} onChange={(event)=>{setregdata({...regdata,password:event.target.value})}}/>
                    </div>

                    <div className="todoquantity px-3">
                        <label htmlFor="todoTask"></label>
                        <input type="text" className="form-control" name="birthday" id="todoTask" placeholder="Type Birthday" autoComplete="off" required 
                        value={regdata.birthday} onChange={(event)=>{setregdata({...regdata,birthday:event.target.value})}} />
                    </div>

                    <div className="submit px-3 mt-2 py-2">
                            <button type="submit" className="btn btn-outline-primary">Add</button>
                    </div>

            </form>
</div>
       </>
    )
}
