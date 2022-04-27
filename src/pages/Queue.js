import React from "react";

import Header from "../components/Header";

import UnserPostion from "../components/UserPosition";

import ButtonType1 from "../components/ButtonType1";

export default function Queue()
{
    return(
        <div>
          <Header title={"queue list"}/>
            
            <div className="screen_body">

            
                <UnserPostion/>

                <ButtonType1/>
            
                
            </div>

        </div>
    )
}