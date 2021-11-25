// import React from 'react';
import './App.css';
import {Acordion} from "./components/Acordion/Acordion";
import {Rating} from "./Rating";
import {AppTitle} from "./components/AppTitle/AppTitle";
import {OnOff} from "./components/OnPff/OnOff";

function App() {


    return (
        <div className="App">

            {/*<AppTitle title={'My App'}/>*/}
            {/*<AppTitle title={'Your App'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}

            {/*<Acordion title={'Rating'} collapsed={true}/>*/}


            {/*Article 1*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff />

        </div>
    )
}


export default App;
