import React  from "react";
import ReactDOM  from "react-dom/client";
import Header from './src/Header'
import Body from './src/Body'

// header
//  logo
// navitems

const App = () => {
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>) 