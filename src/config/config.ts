import { AppConfig, AppConfigCountrySpecific, Country } from "./types";

enum AppScreenName {
  SignupScreen = "SignupScreen",
  TaxIdScreen = "TaxIdScreen",
  FOPInfoScreen = "FOPInfoScreen",
}

const romanianConfig: AppConfigCountrySpecific = {
  country: Country.RO,
  onboardingFlow: [
    {
      name: AppScreenName.SignupScreen,
      fields: [
        {
          type: "country-select",
          name: "selectCountry",
          label: "Choose a country of your business residence",
        },
        {
          type: "email",
          name: "email",
          label: "E-mail",
        },
        {
          type: "phoneNumber",
          name: "phoneNumber",
          label: "Phone number",
        },
        {
          type: "toggle",
          name: "keepMeUpdated",
          label: "Keep me updated",
        },
      ],
    },
    {
      name: AppScreenName.TaxIdScreen,
      fields: [
        {
          type: "text",
          name: "taxId",
          label: "Tax ID",
        },
      ],
    },
  ],
};

const ukranianConfig: AppConfigCountrySpecific = {
  country: Country.UA,
  onboardingFlow: [
    {
      name: AppScreenName.SignupScreen,
      fields: [
        {
          type: "country-select",
          name: "selectCountry",
          label: "Choose a country of your business residence",
        },
        {
          type: "email",
          name: "email",
          label: "E-mail",
        },
        {
          type: "phoneNumber",
          name: "phoneNumber",
          label: "Phone number",
        },
        {
          type: "toggle",
          name: "keepMeUpdated",
          label: "Keep me updated",
        },
      ],
    },
    {
      name: AppScreenName.TaxIdScreen,
      fields: [
        {
          type: "text",
          name: "taxId",
          label: "Tax ID",
        },
      ],
    },
    {
      name: AppScreenName.FOPInfoScreen,
      fields: [
        {
          type: "fop-group-select",
          name: "fopGroup",
          label: "FOP Group",
        },
        {
          type: "tax-rate-select",
          name: "taxRate",
          label: "Tax rate",
        },
        {
          type: "toggle",
          name: "vatPayer",
          label: "I'm VAT payer",
        },
        {
          type: "toggle",
          name: "haveEmployees",
          label: "Have Employees?",
        },
      ],
    },
  ],
};

export const appConfig: AppConfig = {
  [Country.RO]: romanianConfig,
  [Country.UA]: ukranianConfig,
};
