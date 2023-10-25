import React from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.textContent}>Blog Cards</Text>
            <View style={styles.cardContent}>
                <View>
                    <Text style={styles.titleContent}>What's new in Javascript 2023---</Text>
                </View>
                <Image source={{
                    uri: "https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png"
                }}
                style={[styles.imageComponent]} 
                />
            </View>
            <View>
                <Text numberOfLines={3} style={styles.descriptionContent}>
                    JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries
                </Text>
            </View>
            <View style={styles.urlContainer}>
                <TouchableOpacity
                    onPress={() => {
                        openWebsite("https://www.w3schools.com/js/")
                    }}>
                    <Text style={styles.socialLink}>Open URL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        openWebsite("https://www.javascript.com/")
                    }}>
                    <Text style={styles.socialLink}>Follow Me</Text>
                </TouchableOpacity>
            </View>
         
        </View>
    )

}
const styles = StyleSheet.create({
 
    textContent: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingTop: 10
    },
    cardContent: {
        height: 300,
        width: 350,
        marginHorizontal:20,
        marginVertical:10
    },
    titleContent:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom:10
    },
    imageComponent: {
        height: 250,
        borderRadius: 6,
        
    },
    elevation: {
        elevation:3,
        shadowOffset:{
            width:10,
            height:10
        },
        shadowColor:"#EF5354",
    

    },
    descriptionContent:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 16,
    },
    urlContainer: {
        height: 50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        margin:10,
        
    },
    socialLink: {
        fontSize:16,
        color:"#000000",
        backgroundColor:"grey",
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }

})
export default ActionCard