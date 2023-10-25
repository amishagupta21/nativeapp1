import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Treding Places</Text>
            <View style={[styles.card, styles.cardElevation]}>
                <Image source={
                    {
                        uri: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?cs=srgb&dl=pexels-maahid-photos-3881104.jpg&fm=jpg"
                    }
                }
                    style={styles.imageField}
                />
                <Text style={styles.imageName}>Taj Mahal</Text>
                <Text style={styles.imageDescription}>Taj Mahal Photo Gallery. Know the Agra. City Information Agra City Map Tourist Places World Heritage Sites Official Website Accommodation Emergency Services</Text>
                <Text style={styles.imageLabel}>Agra, Uttar Pradesh</Text>
                <Text style={styles.imageFooter}>12 km away</Text>
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
    card: {
        width: 370,
        height: 350,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10
    },
    cardElevation: {
       elevation:3,
       shadowOffset:{
        width:1,
        height:1
       }
    },
    imageField: {
        height: 150,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        marginBottom:10
    },
    imageName: {
        fontSize:24,
        fontWeight:"bold",
        marginHorizontal:10,
        marginBottom:10
    },
    imageDescription: {
        fontSize:16,
        marginHorizontal:10,
        marginBottom:10
    },
    imageLabel: {
        fontSize:14,
        marginHorizontal:10,
        marginBottom:10
    },
    imageFooter: {
        fontSize:14,
        marginHorizontal:10
    }

})
export default FancyCard

