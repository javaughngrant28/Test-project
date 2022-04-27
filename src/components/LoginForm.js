import React from "react";

export default function LoginForm()
{
    return(

        <div className="page_div">
        
        <div className="form_div">

            <div className="input_label">Email</div>
            <input className="input_btn" type={'text'}/>

            <div className="input_label">Password</div>
            <input className="input_btn" type={'text'}/>

        </div>

        <div className="logIn_btn_div">
            <input className="login_btn" type={'button'} value ={'LOGIN'}/>
        </div>

        <div className="registration_ling_div">
            <a href="#" className="registration_ling">Don't have an account? <span className="registration_span">Register</span> here</a>
        </div>

        </div>
        

        
    )
}