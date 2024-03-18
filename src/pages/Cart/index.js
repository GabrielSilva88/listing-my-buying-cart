import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

export default function Cart() {
    return (
        <View style={styles.container}>
            <Text>
                Pagina Carrinho
            </Text>
            <StatusBar style="auto" />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
