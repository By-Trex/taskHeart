import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity ,TextInput } from 'react-native'
export default class CardNameWithPhoto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Cards: [],
            text: ""
        }

    }

    componentDidMount() {

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
                        Cards : result.Basic
                    })
                })

                console.log("card" +this.state.Cards)

            })
  
            
            .catch(err => {
                console.log(err);
            });
    }

    renderCardDetails = ({ item, index }) => {
        return (
            <TouchableOpacity> style = {[styles.itemContainer, { backgroundColor: index % 2 === 0 ? "#fafafa" : null }]}
                <Image style={styles.avatar}
                    source={null} />
                <View style={styles.textContainer}>
                    <Text style={styles.cardName} >Barış's Card</Text>
                </View>
            </TouchableOpacity>
        )
    }

    searchFilter = (text) => {
        const { Cards } = this.state

        const newData = Cards.filter(item => {
            const listItem = `${item.Basic.name.toLowerCase()}`

            return listItem.indexOf(text.toLowerCase()) > -1
        })

        this.setState({
            Cards : newData
        })
    }

    renderHeader = () => {
        const { text } = this.state
        return(
            <View style = {styles.searchContainer} >
                <TextInput placeholder = " Search "
                           style = {styles.searchInput}
                           value = {text}
                           onChangeText = { text => {
                               this.setState({text})
                               this.searchFilter(text)
                           }}
                />
            </View>
        )
    }

    render() {
        console.log("Cards : " + this.state.Cards )
        return (
            <FlatList
                ListHeaderComponent = {this.renderHeader()}
                renderItem={({ item }) => <Text>{item.Basic}</Text>}
                data={this.state.Cards}
            />
        )
    }
}

const styles = StyleSheet.create({

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    cardName: {
        fontSize: 17
    },
    textContainer: {

    },
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    searchInput:{
        fontSize : 17,
        backgroundColor:"#f9f9f9",
        padding:10

    },
    searchContainer:{
        padding:10
    }
})
