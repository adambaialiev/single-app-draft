import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import { AppScreenProps, RootStackParamList } from "../navigation/Root";

type SignupScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "SignupScreen"
>;

export default function SignupScreen({ fields, nextScreen }: AppScreenProps) {
  const navigation = useNavigation<SignupScreenNavigationProps["navigation"]>();
  const onPress = () => {
    if (nextScreen) {
      navigation.navigate(nextScreen);
    }
  };
  return <ScreenWrapper title="SIGN UP SCREEN" onPress={onPress} />;
}
