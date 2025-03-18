import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Aula de Mobile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "red",
        padding: 10,
        alignItems: "center"
    },
    headerText: {
        color: "white",
        textAlign: "center"
    }
});