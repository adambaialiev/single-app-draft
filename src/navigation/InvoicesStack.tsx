import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InvoicesScreen from "../screens/InvoicesScreen";

const Stack = createNativeStackNavigator();

export default function InvoicesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InvoicesScreen" component={InvoicesScreen} />
    </Stack.Navigator>
  );
}
