import "./login.css";
import React from "react";
import {useForm} from "react-hook-form"
import { useHistory } from "react-router";




export default function Login(){
    const { register, handleSubmit}= useForm();
    
   
    const history=useHistory();
    const onSubmit=data=>{
        history.push('/home');
        alert(JSON.stringify(data));
      
    }
 return(
    <div className="login-wrapper">
    <h1 className="title">Please Log In</h1>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="formItem">
      <label> Username</label>
        <input type="text" placeholder="Username" {...register('UserName',{required:true})} />
        
       </div>
       <div className="formItem">
      <label> Password</label>
        <input type="password" placeholder="Password" {...register('Password',{required:true})} />
        
       </div>
      <div>
        <button type="submit" className="button">Submit</button>
      </div>
    </form>
  </div>
 );
}