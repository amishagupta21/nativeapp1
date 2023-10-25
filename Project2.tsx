import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native"
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCards";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ConactList";

const ProjectFirst = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards/>
                <ElevatedCards/>
                <FancyCard/>
                <ActionCard/>
                <ContactList/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ProjectFirst