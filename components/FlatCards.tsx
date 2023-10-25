import React from "react";
import { View, Text, StyleSheet } from "react-native"

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.cards}>
                <View style={styles.redCard}>
                    <Text>Red</Text>
                </View>
                <View style={styles.greenCard}>
                    <Text>Green</Text>
                </View>
                <View style={styles.blueCard}>
                    <Text>Blue</Text>
                </View>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    cards: {
        flex:1,
        flexDirection:'row' ,
        padding:8
       
    },
    redCard: {
        height: 100,
        width: 100,
        backgroundColor: "#EF5354",
        borderRadius: 5,
        margin: 10,
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    greenCard: {
        height: 100,
        width: 100,
        backgroundColor: "orange",
        borderRadius: 5,
        margin: 10,
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    blueCard: {
        height: 100,
        width: 100,
        backgroundColor: "blue",
        borderRadius: 5,
        margin: 10,
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default FlatCards