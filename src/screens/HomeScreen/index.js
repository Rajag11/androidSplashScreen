import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { styles } from './style';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
export function HomeScreen({ navigation }) {
    console.log("Pakistan Zindabad");
    const [color, setColor] = useState(false);
    //   const Stack = createNativeStackNavigator();
    // x.toString();
    return (
        <SafeAreaView style={color === true ? styles.container : styles.containerColor}>
            <Text style={styles.text}>Hasnat Saghir 19-Arid-830</Text>


        </SafeAreaView>
    );
}

