import React, { Component } from 'react'
import { Text, View, ScrollView, ActivityIndicator, StyleSheet, FlatList, TextInput } from 'react-native'

import { debounce } from "lodash";


export default class Search extends Component {

    constructor(props) {

        super(props);
        this.state = {
            item: "",
            cards: [],
            filterCard: [],
            isLoading: false
        }


    }


    componentDidMount() {

    }

    handleChange = debounce((item) => {
        this.searchFilter(item)
    }, 2000)

    renderHeader = () => {
        const { item } = this.state
        return ( 
            <View style={styles.searchContainer} >
                <TextInput placeholder=" Search "
                    style={styles.searchInput}
                    value={item}
                    onChangeText={item => {
                        this.setState({ item })
                        this.handleChange(item)
                    }}
                />
            </View>
        )
    }

    searchFilter = (text) => {

        this.setState({
            isLoading: true
        })

        var uri = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${text}`
        fetch(uri, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "9dd53d370cmsh61dbb9bcf21b8c7p13afbejsnd5372152dc49"
            }
        })
            .then(response => {
                response.json()
                    .then(result => {
                        if (text === "") {
                            this.setState({
                                cards: []
                            })
                        } else
                            this.setState({
                                cards: result
                            })
                    })
            }).then(() => this.setState({
                isLoading: false
            }))
            .catch(err => {
                console.log(err);
            });



    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {
                        this.state.isLoading ?
                            <View style={styles.loader}>
                                <ActivityIndicator size="large" />
                            </View> :
                            <FlatList
                                ListHeaderComponent={this.renderHeader()}
                                renderItem={({ item }) => <View style={styles.flatText}><Text>{item.name}</Text></View>
                                }
                                data={this.state.cards}
                            />
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchInput: {
        fontSize: 17,
        backgroundColor: "#f9f9f9",
        padding: 10

    },
    searchContainer: {
        padding: 10
    },
    flatText: {
        justifyContent: "center",
        alignItems: "center", flex: 1
    },
    loader: {
        marginTop: 10,
        alignItems: 'center'
    },
})
