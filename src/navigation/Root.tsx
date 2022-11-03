import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "../hooks/useAppSelector";
import { OnboardingField, OnboardingScreen } from "../config/types";
import SignupScreen from "../screens/SignupScreen";
import TaxIdScreen from "../screens/TaxIdScreen";
import FOPInfoScreen from "../screens/FOPInfoScreen";
import useCountryConfig from "../hooks/useCountryConfig";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

export interface AppScreenProps {
  fields: OnboardingField[];
  nextScreen?: keyof RootStackParamList;
}

export type RootStackParamList = {
  FOPInfoScreen: undefined;
  SignupScreen: undefined;
  TaxIdScreen: undefined;
  TabNavigation: undefined;
};

const screenNameToComponentMap: { [key: string]: FC<AppScreenProps> } = {
  SignupScreen: SignupScreen,
  TaxIdScreen: TaxIdScreen,
  FOPInfoScreen: FOPInfoScreen,
};

export default function Root() {
  const countryConfig = useCountryConfig();
  const auth = useAppSelector((state) => state.auth);
  return (
    <Stack.Navigator>
      {!auth.isOnboarded &&
        countryConfig.onboardingFlow.map((screen, index) => (
          <Stack.Screen name={screen.name}>
            {() => {
              const Screen = screenNameToComponentMap[screen.name];
              const nextItem: OnboardingScreen | undefined =
                countryConfig.onboardingFlow[index + 1] ?? undefined;

              return (
                <Screen
                  fields={screen.fields}
                  key={screen.name}
                  nextScreen={nextItem?.name}
                />
              );
            }}
          </Stack.Screen>
        ))}
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
}
