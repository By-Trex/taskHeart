import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Router,Scene} from "react-native-router-flux"
import Main from "./main"

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="taskHeart">
                <Scene key="Main" component={Main} />
            </Scene>
        </Router>
    );
}

export default RouterComponent;
