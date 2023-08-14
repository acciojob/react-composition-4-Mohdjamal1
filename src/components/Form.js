import React,{useState} from "react";

const Form = () => {
    let [user,setUser] =useState({name:'',email:'',password:''});

    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
        // let userName = document.getElementById('name').value;
        // console.log(userName);
       
        // setUser({...user,
        //     name:userName,
        //     email:document.getElementById('email').value,
        //     password:document.getElementById('pass').value
        // })
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='name'>Name</label>
            <input type="text" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} id="name"/>
            </div>
            <div>
            <label htmlFor='email'>Email</label>
            <input type="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} id="email"/>
            </div>
            <div>
            <label htmlFor='pass'>Password</label>
            <input type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} id="pass"/>
            </div>
            <input type='submit' />
        </form>
    </div>
)
}

export default Form;