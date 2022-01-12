// import React from 'react';
import './App.css';
import {ReactMemo} from "./components/UseMemo/ReactMemo";
import {UseMemoTest} from "./components/UseMemoTest/UseMemoTest";
import {ReactMemoContainer} from "./components/ReactMemoContainer/ReactMemoContainer";


function App() {


    return (
        <div className="App">
            {/*<OnOffWithUseState setOn={setOnOff}/>{on.toString()}*/}
            {/*<OnOff on={on} setOn={setOnOff}/>*/}
            {/*<Rating value={ratingValue} oneClick={setRatingValue}/>*/}
            {/*<AppTitle title={'My App'}/>*/}
            {/*<AppTitle title={'Your App'}/>*/}
            {/*Article 1*/}
            {/*<RatingWithUseState value={3}/>*/}
            {/*<Accordion2 title={'Rating'} value={collapsed} oneClick={setCollapsed}/>*/}
            {/*Article 1*/}
            {/*<RatingWithUseState/>*/}
            <ReactMemoContainer/>
            {/*<ReactMemo/>*/}
            {/*<UseMemoTest/>*/}
        </div>
    )
}


export default App;
