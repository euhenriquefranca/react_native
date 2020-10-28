import React, { useState, useEffect } from "react";
import { Alert, Button, Text, View } from "react-native";
import { css } from "./assets/css/Css";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, Rastreio } from "./views";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Plaza Valencia Academy",
            headerStyle: { backgroundColor: "#F58634" },
            headerTintColor: "#333",
            headerTitleStyle: { fontWeight: "bold", alignSelf: "center" },
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        {/* <Stack.Screen name="Login" component={AreaRestrita} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
