import React,{Component} from 'react';
import {Provider} from 'react-redux';
import store from './store'
import GlobalStyle from './style.js';
import Header from './common/header';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <GlobalStyle/>
                <Header/>
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
