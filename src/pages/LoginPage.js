import React from "react";
import Header from "../components/Header";
import LoginUser from "../components/login-user.component";

export default function LoginPage()
{
    return(
        <div>
             <Header title={"queue login"}/>

             <div className="screen_body">
                <LoginUser/>
             </div>

        </div>
       
        
    )
}