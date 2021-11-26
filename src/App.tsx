// import React from 'react';
import './App.css';
import {Accordion2} from './components/AcordionWithUseState/Acordion2';
import {RatingWithUseState} from "./components/RatingWithUseState/RatingWithUseState";
import {Rating, RatingValuePropsType} from "./components/Rating/Rating";
import {useState} from "react";
import {OnOff} from "./components/OnPff/OnOff";
import {OnOffWithUseState} from "./components/OnPffWithUseState/OnOffWithUseState";

function App() {


    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(1)
    let [collapsed, setCollapsed] = useState(false)
    let [on, setOnOff] = useState(false)
    return (
        <div className="App">
            <OnOffWithUseState/>
            <OnOff on={on} seOn={setOnOff}/>

            <Rating value={ratingValue} oneClick={setRatingValue}/>

            {/*<AppTitle title={'My App'}/>*/}
            {/*<AppTitle title={'Your App'}/>*/}
            {/*Article 1*/}
            {/*<RatingWithUseState value={3}/>*/}


            <Accordion2 title={'Rating'} value={collapsed} oneClick={setCollapsed}/>

            Article 1
            <RatingWithUseState/>


        </div>
    )
}


export default App;
