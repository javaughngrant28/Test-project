import React from "react";
import Header from "../components/Header";

import MealTimeBlock from '../components/MealTimeBlock'

import TwoBtns from '../components/TwoBtns'

export default function HomeAdmin()
{
    return(
        <div>
            <Header title={"queue lobby"}/>

            <div className="screen_body">
                
                    <MealTimeBlock/>

                    <TwoBtns/>

             </div>

        </div>
    )
}