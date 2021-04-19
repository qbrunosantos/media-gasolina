import React from "react";
import PaginaPrincipal from "./PaginaPrincipal.js";
import MediaGasolina from "./MediaGasolina.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PaginaPrincipal"
          component={PaginaPrincipal}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="MediaGasolina"
          component={MediaGasolina}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
