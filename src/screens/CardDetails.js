import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import CardFlip from 'react-native-card-flip';

import { resultArrayed, selectedMechanicName , selectCard } from "../actions"
import { connect } from "react-redux"

import { Actions } from 'react-native-router-flux';



class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        //console.log("Kanamayi : "+this.props.selectedCard)
    }
    
    

    render() {
        return (
            <View style={styles.container}>
                <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.card, styles.card1]}
                        onPress={() => this.card.flip()}>
                        <Text style={styles.CardTitle}>Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.card, styles.card2]}
                        onPress={() => this.card.flip()}>
                        <View style={styles.domain}>
                            <Text style = {styles.cardText}> Card Id : </Text>
                            <Text style = {styles.cardText}> A Card </Text>
                        </View>
                        <View style={styles.domain}>
                            <Text style = {styles.cardText}> Card Set : </Text>
                            <Text style = {styles.cardText}> A Card </Text>
                        </View>
                        <View style={styles.domain}>
                            <Text style = {styles.cardText}> Dbf Id : </Text>
                            <Text style = {styles.cardText}> A Card </Text>
                        </View>
                        <View style={styles.domain}>
                            <Text style = {styles.cardText}> Card Id : </Text>
                            <Text style = {styles.cardText}> A Card </Text>
                        </View>
                        <View style={styles.domain}>
                            <Text style = {styles.cardText}> Locale : </Text>
                            <Text style = {styles.cardText}> A Card </Text>
                        </View>
                        <View style={styles.domain}>
                            <Text style = {styles.cardText}> Name : </Text>
                            <Text style = {styles.cardText}> A Card </Text>
                        </View>
                        <View style={styles.domain}>
                            <Text style = {styles.cardText}> Player Class : </Text>
                            <Text style = {styles.cardText}> A Card </Text>
                        </View>
                        <View style={styles.domain}>
                            <Text style = {styles.cardText}> Text : </Text>
                            <Text style = {styles.cardText}> A Card </Text>
                        </View>
                        <View style={styles.domain}>
                            <Text style = {styles.cardText}> Type: : </Text>
                            <Text style = {styles.cardText}> A Card </Text>
                        </View>
                    </TouchableOpacity>
                </CardFlip>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cardContainer: {
        width: 320,
        height: 470,
    },
    card: {
        width: 320,
        height: 470,
        backgroundColor: '#FE474C',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    CardTitle: {
        lineHeight: 470,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    domain: {
        flexDirection:"row",
        padding:"5%"
    },
    cardText:{
        color:"white"
    }
});

const mapStateToProps = ({ taskHeartResponse }) => {
    const { resultArray, item , selectedCard } = taskHeartResponse;
    return {
        resultArray,
        item,
        selectedCard
    };
}

export default connect(mapStateToProps, { resultArrayed, selectedMechanicName , selectCard })(Card)

