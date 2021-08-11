import React,{Component} from 'react';
import {Provider} from 'react-redux';
import store from './store'
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from './style.js';
import Header from './common/header';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <GlobalStyle/>
                <Header/>
                <BrowserRouter>
                    <Route path="/" exact render={()=><div>HOME</div>}></Route>
                    <Route path="/detail" exact render={()=><div>detail</div>}></Route>
                </BrowserRouter>
            </Provider>
        )
    }
}

// function App() {
//     return (
//         <div className="app">
//             <GlobalStyle/>
//             <Header/>
//              HOLLE WORRD
//         </div>
//     );
// }

export default App;
