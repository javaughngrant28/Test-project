import React from "react";

import Header from "../components/Header";

import SignUpForm from "../components/SignUpForm"

export default function SignUpPage()
{
    return(
        <div    >
            <Header title='QUEUe REGISTRATION' />

            <div className="screen_body">
                <SignUpForm/>
             </div>
            
        </div>
    )
}