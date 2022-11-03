import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookkeepingStack from "./BookkeepingStack";
import HomeStack from "./HomeStack";
import InvoicesStack from "./InvoicesStack";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false, title: "Home" }}
      />
      <Tab.Screen
        name="InvoicesStack"
        component={InvoicesStack}
        options={{ headerShown: false, title: "Invoices" }}
      />
      <Tab.Screen
        name="BookKeepingStack"
        component={BookkeepingStack}
        options={{ headerShown: false, title: "Bookkeeping" }}
      />
    </Tab.Navigator>
  );
}
