// import React from 'react';
import './App.css';
import {Acordion} from "./components/Acordion/Acordion";
import {Rating} from "./Rating";
import {AppTitle} from "./components/AppTitle/AppTitle";
import {OnOff} from "./components/OnPff/OnOff";
import { Acordion2 } from './components/AcordionWithUseState/Acordion2';

function App() {


    return (
        <div className="App">

            {/*<AppTitle title={'My App'}/>*/}
            {/*<AppTitle title={'Your App'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}

            {/*<Acordion title={'Rating'} collapsed={true}/>*/}

            <Acordion2 title={'Rating'}/>
            <Acordion2 title={'Menu'}/>
            Article 1
            <Rating />
            <Rating />
            <Rating />
            <Rating />


            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}


        </div>
    )
}


export default App;
