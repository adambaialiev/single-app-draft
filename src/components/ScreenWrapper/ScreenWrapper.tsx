import React from "react";
import { View, Text, Button } from "react-native";
import useCountryConfig from "../../hooks/useCountryConfig";

interface ScreenWrapperProps {
  title: string;
  onPress?: () => void;
}

export default function ScreenWrapper({ title, onPress }: ScreenWrapperProps) {
  const config = useCountryConfig();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{title}</Text>
      {onPress && <Button title="NEXT" onPress={onPress} />}
    </View>
  );
}
