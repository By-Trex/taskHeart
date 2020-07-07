import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {Provider} from "react-redux"
import { createStore , applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import reducers from "./src/reducers"

import Router from "./src/router"




export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
    }
    
    

    render() {

        const store = createStore(reducers,{},applyMiddleware(ReduxThunk))

        return (
            <Provider store = {store}>
                <Router/>
            </Provider>
        )
    }
}
