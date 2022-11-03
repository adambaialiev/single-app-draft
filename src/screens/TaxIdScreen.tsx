import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import { AppScreenProps, RootStackParamList } from "../navigation/Root";

type TaxIdScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "TaxIdScreen"
>;

export default function TaxIdScreen({ fields, nextScreen }: AppScreenProps) {
  const navigation = useNavigation<TaxIdScreenNavigationProps["navigation"]>();
  const onPress = () => {
    if (nextScreen) {
      navigation.navigate(nextScreen);
    }
  };
  return <ScreenWrapper title="TAX ID SCREEN" onPress={onPress} />;
}
