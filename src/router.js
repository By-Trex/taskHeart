import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'

import {Router,Scene, Actions} from "react-native-router-flux"

import Main from "./screens/Main"
import Card from "./screens/CardDetails"
import CardNameWithPhoto from "./screens/CardNameWithPhoto"
import Search from "./screens/Search"



const RouterComponent = () => {
    return (
        <Router  >
            <Scene key="taskHeart" titleStyle = {{justifyContent:"center",alignItems:"center"}}  initial >
                <Scene key="Main" component={Main} title = " Main " initial   />
                <Scene key="CardNameWithPhoto" component={CardNameWithPhoto} title = " Card List " onLeft = {() => Actions.pop()}  />
                <Scene key="CardDetails" component={Card} title = " Card Features " onLeft = {() => Actions.pop()} />
                <Scene key="Search" component={Search} title = " Search " onLeft = {() => Actions.pop()} />
            </Scene>
        </Router>
    );
}

export default RouterComponent;


const styles = StyleSheet.create({
    // titleStyle : {
    //     flex:1,
    //     alignItems:"center",
    //     justifyContent:"center"
    //     textAlign:"center",
    //     alignContent:"center",
    //      marginHorizontal:"40%"

    // }
})