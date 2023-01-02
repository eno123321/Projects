import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import CountriesGame from "./Screens/Countries/CountriesGame";
import Home from "./Screens/RockPaperScissors/Home";
import PlayScreen from "./Screens/RockPaperScissors/PlayScreen";
import RulesScreen from "./Screens/RockPaperScissors/RulesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Country" component={CountriesGame} />
        <Drawer.Screen name="RPS" component={Rps} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

  function Rps() {
    return (
      <>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} options={{}} />
          <Stack.Screen name="PlayScreen" component={PlayScreen} />
          <Stack.Screen name="RulesScreen" component={RulesScreen} />
        </Stack.Navigator>
      </>
    );
  }
}
