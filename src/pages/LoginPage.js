import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm"

export default function LoginPage()
{
    return(
        <div>
             <Header title={"queue login"}/>

             <div className="screen_body">
                <LoginForm/>
             </div>

        </div>
       
        
    )
}