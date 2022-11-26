
import { HomeScreen } from "./src/screens/HomeScreen"
import * as React from 'react';
import { StyleSheet } from "react-native";
import { SecondScreen } from "./src/screens/SecondScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  const Stack = createNativeStackNavigator();
  // x.toString();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen style={styles.text} name="h" component={HomeScreen} />
        <Stack.Screen name="second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export const styles = StyleSheet.create({



  text: {
    textAlign: "center",
    backgroundColor: "#ffffff"
  }

});


export default App;

