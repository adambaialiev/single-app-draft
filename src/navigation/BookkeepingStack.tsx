import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookkeepingScreen from "../screens/BookkeepingScreen";

const Stack = createNativeStackNavigator();

export default function BookkeepingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookkeepingScreen" component={BookkeepingScreen} />
    </Stack.Navigator>
  );
}
