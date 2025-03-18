import React from "react";
import { SafeAreaView, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { View } from "react-native-web";

export default function HomeScreen({ navigation }) {
    const professores = [
        { id: "1", name: "Marcelo", role: "Professor" },
        { id: "2", name: "Felipe", role: "Professor" },
        { id: "3", name: "Thiago", role: "Professor" },
        { id: "4", name: "Eduardo", role: "Professor" },
    ];

    const alunos = [
        { id: "1", name: "Enzo", role: "Aluno de Mobile" },
        { id: "2", name: "Laura", role: "Aluno de Back-End" },
        { id: "3", name: "Caio", role: "Aluno de Front-End" },
        { id: "4", name: "Bernardo", role: "Aluno de Projetos" },
        { id: "5", name: "Miguel", role: "Aluno de Mobile" },
        { id: "6", name: "Maria", role: "Aluna de Front-End" },
        { id: "7", name: "João", role: "Aluno de Front-End" },
        { id: "8", name: "Ana", role: "Aluna de Back-End" },
        { id: "9", name: "Carlos", role: "Aluno de Mobile" },
        { id: "10", name: "Julia", role: "Aluna de Projetos" },
        { id: "11", name: "Pedro", role: "Aluno de Mobile" },
        { id: "12", name: "Larissa", role: "Aluna de Back-End" },
    ];

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    return (
        <SafeAreaView>
            <Header />
            <Text style={StyleSheet.sectionTitle}>Professores</Text>
            <FlatList
                style={styles.horintalList}
                data={professores}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.cardContainer, { width: cardWidth }]}>
                        <Card />
                    </View>
                )}
            />

            <Text style={StyleSheet.sectionTitle}>Alunos</Text>
            <FlatList
                data={alunos}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Card employee={item} onPress={() => navigation.navigate("Details", {employee: item})} />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        MarginVertical: 10,
        marginLeft: 20,
        TextAlign: "center",
    },
    cardContainer: {
        marginHorizontal: 10,
        marginBottom: 0,
    },
    horizontalList: {
        paddingBottom: 30,
    },
});