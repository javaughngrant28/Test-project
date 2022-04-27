import React from "react"

export default function SignUpForm()
{
    return(

        <div className="page_div">
        
            <div className="form_div_2">

                <div className="input_label_2">Username</div>
                <input className="input_text" type={'text'}/>

                <div className="input_label_2">Email</div>
                <input className="input_text" type={'text'}/>

                <div className="input_label_2">Password</div>
                <input className="input_text" type={'text'}/>

                <div className="input_label_2">Confirm Password</div>
                <input className="input_text" type={'text'}/>

            </div>

            <div className="logIn_btn_div_2">

            <input className="login_btn" type={'button'} value ={'BACK'}/>
            <input className="login_btn" type={'button'} value ={'FINISHED'}/>
            
        </div>

        </div>

    )
}

