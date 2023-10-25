import React from "react"
import { View,Text, StyleSheet, ScrollView} from "react-native"

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.cards,styles.cardElevated]}>
                    <Text>Tap Here</Text>
                </View>
                <View style={[styles.cards,styles.cardElevated]}>
                    <Text>Tap Here</Text>
                </View>
                <View style={[styles.cards,styles.cardElevated]}>
                    <Text>Tap Here</Text>
                </View>
                <View style={[styles.cards,styles.cardElevated]}>
                    <Text>Tap Here</Text>
                </View>
                <View style={[styles.cards,styles.cardElevated]}>
                    <Text>Tap Here</Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    container:{
        padding:10
    },
    cards:{
        height:100,
        width:100,
        backgroundColor:"green",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        borderRadius:5
    },
    cardElevated:{
        backgroundColor:"#EF5354",
        elevation:5,
        shadowOffset:{
            width:10,
            height:10
        },
        shadowColor:"black",
        shadowOpacity:0.4,
        shadowRadius:2
    }
})
export default ElevatedCards