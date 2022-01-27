import React from 'react';
import './App.css';
import {User} from "./Tests/06callback";
import axios from "axios";


const Promise = () => {


    // const request = axios.get('https://www.google.by/')
    //
    //
    // console.log('start')
    //
    // request.then((data) => {
    //     console.log(data)
    // })

    console.log('error')

    const function1 = () => {
        console.warn('error')
    }


    return <div>
        <div>promise</div>
        <button onClick={function1}>add</button>
    </div>
}


function App() {


    return (<div className="App">
            {/*<User/>*/}
            <Promise/>
        </div>
    );
}

export default App;
