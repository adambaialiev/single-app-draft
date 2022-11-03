import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import useCountryConfig from "../hooks/useCountryConfig";
import { AppScreenProps, RootStackParamList } from "../navigation/Root";

type FOPInfoScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "FOPInfoScreen"
>;

export default function FOPInfoScreen({ fields, nextScreen }: AppScreenProps) {
  const navigation =
    useNavigation<FOPInfoScreenNavigationProps["navigation"]>();

  const onPress = () => {
    if (nextScreen) {
      navigation.navigate(nextScreen);
      return;
    }
    navigation.navigate("TabNavigation");
  };

  return <ScreenWrapper title="FOP INFO SCREEN" onPress={onPress} />;
}
