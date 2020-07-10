import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'

import {Router,Scene, Actions} from "react-native-router-flux"

import Main from "./screens/Main"
import Card from "./screens/CardDetails"
import CardNameWithPhoto from "./screens/CardNameWithPhoto"
import Search from "./screens/Search"



const RouterComponent = () => {
    return (
        <Router>
            <Scene key="taskHeart" titleStyle = {styles.titleStyle} >
                <Scene key="Main" component={Main} title = " Main "    />
                <Scene key="CardNameWithPhoto" component={CardNameWithPhoto} title = " Card List " onLeft = {() => Actions.pop()}  />
                <Scene key="CardDetails" component={Card} title = " Card Features " onLeft = {() => Actions.pop()} />
                <Scene key="Search" component={Search} title = " Search " onLeft = {() => Actions.pop()} initial/>
            </Scene>
        </Router>
    );
}

export default RouterComponent;


const styles = StyleSheet.create({
    titleStyle : {
        // justifyContent:"center",
        // alignItems:"center",
        paddingLeft:"40%"

    }
})