import React from "react";

import Header from "../components/Header";

import CreateUser from "../components/create-user.component"

export default function SignUpPage()
{
    return(
        <div    >
            <Header title='QUEUe REGISTRATION' />

            <div className="screen_body">
                <CreateUser/>
             </div>
            
        </div>
    )
}