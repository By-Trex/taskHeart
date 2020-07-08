import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'

import {Router,Scene, Actions} from "react-native-router-flux"

import Main from "./screens/main"
import Card from "./screens/CardDetails"
import CardNameWithPhoto from "./screens/CardNameWithPhoto"

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="taskHeart" titleStyle = {styles.titleStyle} >
                <Scene key="Main" component={Main} title = " Main "  initial  />
                <Scene key="CardNameWithPhoto" component={CardNameWithPhoto} title = " Card List "   />
                <Scene key="CardDetails" component={Card} title = " Card Features " onLeft = {() => Actions.pop()} />
            </Scene>
        </Router>
    );
}

export default RouterComponent;
// renderBackButton = {() => {
//     <LeftButton 
//     leftButtonIcon={"arrow-back"} 
//     onLeft={() => Actions.pop()} 
//     leftButtonColor={"white"} 
//     leftButtonIconSize={30} 
//   />
// }}

const styles = StyleSheet.create({
    titleStyle : {
        // justifyContent:"center",
        // alignItems:"center",
        paddingLeft:"40%"

    }
})