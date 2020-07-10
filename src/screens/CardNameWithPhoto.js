import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, TextInput, Button, ActivityIndicator } from 'react-native'


import { resultArrayed, selectedMechanicName, selectCard } from "../actions"
import { connect } from "react-redux"
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';

class CardNameWithPhoto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Cards: [],
            text: "",
            itemName: "",
            CardsFinal: [],
            CardsFinalFilter: [],
            isLoading: true
        }

    }

    componentDidMount() {
        var cardsName = []
        const { resultArray, item } = this.props
        const { Cards, itemName, CardsFinal } = this.state
        console.log("Arrays " + this.props.resultArray)
        console.log("item : " + this.props.item)
        this.setState({
            Cards: resultArray,
            itemName: item
        }, () => {
            const { Cards, itemName, CardsFinal } = this.state
            for (let i = 0; i < Cards.length; i++) {
                for (let k = 0; k < Cards[i].mechanics.length; k++) {
                    if (Cards[i].mechanics[k].name === itemName) {
                        CardsFinal.push(Cards[i])

                    }
                }
            }
            this.setState({
                isLoading: false,
                CardsFinalFilter: CardsFinal
            })
        }

        )

    }

    // renderCardDetails = ({ item, index }) => {                                                                            // THİS AREA FOR LİSTİNG PHOTO AND NAME
    //     return (
    //         <TouchableOpacity> style = {[styles.itemContainer, { backgroundColor: index % 2 === 0 ? "#fafafa" : null }]}
    //             <Image style={styles.avatar}
    //                 source={null} />
    //             <View style={styles.textContainer}>
    //                 <Text style={styles.cardName} >Barış's Card</Text>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }

    searchFilter = (text) => {                                                                                                 // THİS AREA FOR FİLTER WİTHOUT SERVİCE
        // const { Cards, CardsFinal } = this.state

        // const newData = CardsFinal.filter(item => {
        //     const listItem = `${item.name.toLowerCase()}`

        //     return listItem.indexOf(text.toLowerCase()) > -1
        // })

        // this.setState({
        //     CardsFinalFilter: newData,
        // })


    }

    renderHeader = () => {
        const { text } = this.state
        return (
            <View style={styles.searchContainer} >
                <TextInput placeholder=" Search "
                    style={styles.searchInput}
                    value={text}
                    onChangeText={text => {
                        this.setState({ text })
                        this.searchFilter(text)
                    }}
                />
            </View>
        )
    }

    getItemFeatures = (selectedCard) => {
        this.props.selectCard(selectedCard)
        Actions.CardDetails()
    }


    render() {
        console.log("Cards : " + this.state.Cards)
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Actions.Search()}
                    >
                        <Text>Search</Text>
                    </TouchableOpacity>
                    {
                        this.state.isLoading ?
                            <View style={styles.loader}>
                                <ActivityIndicator size="large" />
                            </View> :
                            <FlatList
                                // ListHeaderComponent={this.renderHeader()}   ----------------------------->        // THİS AREA FOR FİLTER WİTHOUT SERVİCE
                                renderItem={({ item }) =>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => this.getItemFeatures(item)} >
                                        <Text >{item.name}</Text>
                                    </TouchableOpacity>
                                }
                                data={this.state.CardsFinalFilter}
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
        backgroundColor: "orange",
        padding: 10,
        marginTop: 15
    },
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
    searchInput: {
        fontSize: 17,
        backgroundColor: "#f9f9f9",
        padding: 10

    },
    searchContainer: {
        padding: 10
    },
    loader: {
        marginTop: 10,
        alignItems: 'center'
    },
})

const mapStateToProps = ({ taskHeartResponse }) => {
    const { resultArray, item, selectedCard } = taskHeartResponse;
    return {
        resultArray,
        item,
        selectedCard
    };
}

export default connect(mapStateToProps, { resultArrayed, selectedMechanicName, selectCard })(CardNameWithPhoto)


