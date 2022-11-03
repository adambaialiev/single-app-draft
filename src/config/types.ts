import { RootStackParamList } from "../navigation/Root";

export enum Country {
  RO = "RO",
  UA = "UA",
}

export interface OnboardingField {
  name: string;
  label: string;
  type:
    | "country-select"
    | "email"
    | "phoneNumber"
    | "toggle"
    | "text"
    | "fop-group-select"
    | "tax-rate-select";
  defaultPhoneCode?: string;
}

export interface OnboardingScreen {
  name: keyof RootStackParamList;
  fields: OnboardingField[];
}

export interface AppConfigCountrySpecific {
  country: Country;
  onboardingFlow: OnboardingScreen[];
}

export interface AppConfig {
  [Country.RO]: AppConfigCountrySpecific;
  [Country.UA]: AppConfigCountrySpecific;
}
