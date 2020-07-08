import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux';

import Spinner from "../components/Spinner"


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataSource: []
        }
    }


    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }

    getCardData = () => {

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
                        var resultArray = []
                        var objectKeys = Object.keys(result);
                        for (let k = 0; k < objectKeys.length; k++) {
                            var tempArray = result[objectKeys[k]]
                            if (tempArray.length > 0) {
                                for (let i = 0; i < tempArray.length; i++) {
                                    if (tempArray[i].hasOwnProperty("mechanics")) {
                                        resultArray.push(tempArray[i])
                                    }
                                }
                            }
                        }
                        this.setState({
                            isLoading: false,
                            dataSource: resultArray
                        })

                        console.log(resultArray)
                    })
            })
            .catch(err => {
                console.log(err);
            });
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
                            <FlatList
                                data={this.state.dataSource}
                                renderItem={({ item }) => <Text>{item.mechanics[0].name}</Text>}

                            />
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
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    loader: {
        marginTop: 10,
        alignItems: 'center'
    }
})
