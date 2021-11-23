import React from 'react';
import './App.css';
import './global.css';
import {BrowserRouter }from 'react-router-dom';
import Main from './components/main/Main';
// import { Provider } from 'react-redux';
// import { ConfiguresStore } from './redux/configuresStore';



// const store = ConfiguresStore();
// <Provider store={store}>
//     <BrowserRouter>
//         <div className="App">
//             <Main/>
//         </div>
//     </BrowserRouter>
// </Provider>

function App() {
return (
    <div className="App">
            {/* <Provider store={store}> */}
                <BrowserRouter>
                    <div className="App">
                        <Main/>
                    </div>
                </BrowserRouter>
            {/* </Provider>   */}
    </div>
);
}

export default App;