import { useAppSelector } from "./useAppSelector";

export default function useCountryConfig() {
  return useAppSelector(
    (state) => state.config.config[state.config.currentCountry]
  );
}
