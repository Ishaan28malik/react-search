import React from 'react'
import Routes from './pages/Routes'
import { Provider } from 'react-redux';
import { store } from "./store";

const  App = () => {

    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default App