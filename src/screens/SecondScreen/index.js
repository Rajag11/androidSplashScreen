import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { styles } from './style';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
export function SecondScreen() {
    console.log("Pakistan Zindabad");
    const [color, setColor] = useState(false);
    //   const Stack = createNativeStackNavigator();
    // x.toString();
    return (
        <SafeAreaView style={color === true ? styles.container : styles.containerColor}>
            <Text onPress={() => { setColor((prev) => !prev) }}>this is SecondScreen</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

