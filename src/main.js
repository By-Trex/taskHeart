import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }


    componentDidMount() {

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
                        this.setState({
                            isLoading: false,
                            dataSource: result.Basic
                        })
                    })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.getCardData()}
                >
                    <Text>Get Data</Text>
                </TouchableOpacity>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>{item.cardId}</Text>}

                />
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
    }
})
