import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList, ScrollView, ActivityIndicator } from 'react-native'

import { Actions } from 'react-native-router-flux';

import {resultArrayed} from "../actions"
import { connect } from "react-redux"


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataSource: [],
            mecArray: []
        }
    }


    componentDidMount() {
        console.log("asdad" + this.props.resultArrayed())
    }

    getCardData = () => {
        var setMechanics = new Set();
        fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "9dd53d370cmsh61dbb9bcf21b8c7p13afbejsnd5372152dc49"
            }
        })
            .then(response => {

                response.json()
                    .then(result => {
                        var mechanicsArray = []
                        var resultArray = []
                        var objectKeys = Object.keys(result);
                        for (let k = 0; k < objectKeys.length; k++) {
                            var tempArray = result[objectKeys[k]]
                            if (tempArray.length > 0) {
                                for (let i = 0; i < tempArray.length; i++) {
                                    if (tempArray[i].hasOwnProperty("mechanics")) {
                                        resultArray.push(tempArray[i])
                                        this.props.resultArrayed(resultArray)
                                        console.log("arrasadas : " +this.props.resultArray)
                                        for (let y = 0; y < tempArray[i].mechanics.length; y++) {
                                            setMechanics.add(tempArray[i].mechanics[y].name)

                                        }
                                    }
                                }
                            }
                        }
                        this.setState({
                            isLoading: false,
                            dataSource: resultArray
                        })

                        console.log(resultArray)
                    }).then(() => {
                        var mechanicsArray = this.convertSetToArray(setMechanics)
                        var A = ""
                        this.setState({
                            mecArray: mechanicsArray
                        })
                    })
            })
            .catch(err => {
                console.log(err);
            });
    }

    convertSetToArray(set) {
        var a = [];
        set.forEach(x => a.push(x));
        return a;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.getCardData()}
                    >
                        <Text>Get Data</Text>
                    </TouchableOpacity>
                    {
                        this.state.isLoading ?
                            <View style={styles.loader}>
                                <ActivityIndicator size="large" />
                            </View> :
                            <View style={styles.FlatContainer}>
                                <FlatList
                                    style={{ paddingVertical: 10 }}
                                    data={this.state.mecArray}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity>
                                            <Text>{item}</Text>
                                        </TouchableOpacity>
                                    }

                                />
                            </View>
                    }

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "orange",
        padding: 10,
        marginTop: 15
    },
    loader: {
        marginTop: 10,
        alignItems: 'center'
    },
    FlatContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})


const mapStateToProps = ({ taskHeartResponse }) => {
    const { resultArray } = taskHeartResponse;
    return {
        resultArray
    };
}

export default connect(mapStateToProps, { resultArrayed })(Main)
{/* <Text>{item.mechanics[0].name}</Text> */}

