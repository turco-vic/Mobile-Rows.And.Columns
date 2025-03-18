import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./pages/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="2TDS1" component={HomeScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}
