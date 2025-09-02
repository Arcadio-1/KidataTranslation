export const LoginTrans = {
  header: {
    title: {
      en: "Login",
      de: "Anmeldung",
    },
    subtitle: {
      en: "Log in with your access data",
      de: "Melden Sie sich mit Ihren Zugangsdaten an",
    },
  },
  form: {
    items: {
      email: {
        label: {
          en: "E-mail Address (is also your username)",
          de: "E-Mail-Adresse (ist auch Ihr Benutzername)",
        },
        placeHolder: {
          en: "Enter your E-mail Address here",
          de: "Geben Sie hier Ihre E-Mail-Adresse ein",
        },
        validationMsg: {
          required: {
            en: "E-mail Field Is Required",
            de: "Das E-Mail-Feld ist erforderlich",
          },
          invalid: {
            en: "E-mail Field Is Invalid",
            de: "Das E-Mail-Feld ist ungültig",
          },
        },
      },
      passwordItem: {
        label: {
          en: "Password",
          de: "Passwort",
        },
        placeHolder: {
          en: "Enter your password here",
          de: "Geben Sie hier Ihr Passwort ein",
        },
        validationMsg: {
          required: {
            en: "Password Field Is Required",
            de: "Das Passwort-Feld ist erforderlich",
          },
        },
      },
      RemainSignedInCheckbox: {
        label: {
          en: "Remain signed in",
          de: "Angemeldet bleiben",
        },
      },
    },
    actions: {
      cancel: {
        en: "cancel",
        de: "Abbrechen",
      },
      submit: {
        en: "Login",
        de: "Anmeldung",
      },
    },
    validationMsg: {
      invalidPassword: {
        en: "You Enter Invalid E-mail Or Password",
        de: "Sie haben eine ungültige E-Mail-Adresse oder ein ungültiges Passwort eingegeben",
      },
      invalidEmail: {
        en: "No User Found With This Credentials",
        de: "Kein Benutzer mit diesen Anmeldeinformationen gefunden",
      },
    },
  },
  footer: {
    forgotPasswordLinkLabel: {
      en: "Forgot password",
      de: "Passwort vergessen",
    },
  },
  service: {
    serverError: {
      en: "There was an error contacting the server.",
      de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
    },
    serverSuccess: {
      en: "Logged in as",
      de: "Angemeldet als",
    },
    unauthorized: {
      en: "Unauthorized",
      de: "Nicht autorisiert",
    },
  },
};
