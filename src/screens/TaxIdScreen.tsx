import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import { AppScreenProps, RootStackParamList } from "../navigation/Root";
import { setIsOnboarded } from "../store/auth/authSlice";

type TaxIdScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "TaxIdScreen"
>;

export default function TaxIdScreen({ fields, nextScreen }: AppScreenProps) {
  const navigation = useNavigation<TaxIdScreenNavigationProps["navigation"]>();
  const dispatch = useDispatch();
  const onPress = () => {
    if (nextScreen) {
      navigation.navigate(nextScreen);
      return;
    }
    dispatch(setIsOnboarded(true));
    navigation.navigate("TabNavigation");
  };
  return <ScreenWrapper title="TAX ID SCREEN" onPress={onPress} />;
}
