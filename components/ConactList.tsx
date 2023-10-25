import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: "Amisha Gupta",
            Position: "Frontned Developer",
            WorkExperience: 2,
            imageUrl: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=sph"
        },
        {
            uid: 2,
            name: "Pooja Gupta",
            Position: "Backend Developer",
            WorkExperience: 5,
            imageUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
        },
        {
            uid: 3,
            name: "Hemalata Gupta",
            Position: "PowerBI Developer",
            WorkExperience: 8,
            imageUrl: "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
        },
        {
            uid: 4,
            name: "Rahul Gupta",
            Position: "Full stack Developer Developer",
            WorkExperience: 15,
            imageUrl: "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
        }
    ]
    return (
        <View>
            <Text style={styles.headingText}>ContactLis</Text>
            <ScrollView scrollEnabled={false} style={styles.scrollContact}>
                {contacts.map((contact) => {
                    return (
                        <View key={contact.uid} style={styles.userCard}>
                            <Image source={{
                                uri: contact.imageUrl
                            }}
                                style={styles.userImage}
                            />
                            <View>
                                <Text style={styles.userName}>{contact.name}</Text>
                                <Text style={styles.userPosition}>{contact.Position}</Text>
                                <Text style={styles.userWorkExperience}>{contact.WorkExperience}</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingTop: 10,
        marginBottom:10

    },
    scrollContact: {
        paddingHorizontal: 20,
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems:"center",
        marginBottom:10,
        backgroundColor:"#8D3DAF",
          padding:8,
          borderRadius:10
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight:14,
        marginBottom:5,
    },
    userName: {

        fontSize:16,
        fontWeight:"600",
        color:"black"
    },
    userPosition: {
        fontSize:14,
        fontWeight:"600",
        color:"black"
    },
    userWorkExperience: {
        fontSize:14,
        fontWeight:"600",
        color:"black"
    }


})
export default ContactList