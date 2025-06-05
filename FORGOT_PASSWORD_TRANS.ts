export const ForgotPasswordTrans = {
  header: {
    title: { en: "Forgot Password", de: "Passwort vergessen" },
    subtitle: {
      en: "Enter the email address associated with your KiData account",
      de: "Geben Sie die mit Ihrem KiData-Konto verknüpfte E-Mail-Adresse ein",
    },
  },
  form: {
    items: {
      email: {
        label: {
          en: "E-mail address (is also your username)",
          de: "E-Mail-Adresse (ist auch Ihr Benutzername)",
        },
        placeHolder: {
          en: "Enter your email address here",
          de: "Geben Sie hier Ihre E-Mail-Adresse ein",
        },
        validationMsg: {
          required: {
            en: "Email Field Is Required",
            de: "Das E-Mail-Feld ist erforderlich",
          },
          invalid: {
            en: "Email Field Is Invalid",
            de: "Das E-Mail-Feld ist ungültig",
          },
        },
      },
    },
    actions: {
      cancel: {
        en: "cancel",
        de: "Abbrechen",
      },
      submit: {
        en: "Next",
        de: "Weiter",
      },
    },
    validationMsg: {
      invalidEmail: {
        en: "No User Found With This Credentials",
        de: "Kein Benutzer mit diesen Anmeldeinformationen gefunden",
      },
    },
  },
  successMessage: {
    title: {
      en: "Reset Password Link Sent!",
      de: "Link zum Zurücksetzen des Passworts gesendet!",
    },
    subtitle: {
      en: "We've sent a reset password link to your email address",
      de: "Wir haben einen Link zum Zurücksetzen des Passworts an Ihre E-Mail-Adresse gesendet",
    },
    subtitle2: {
      en: "Please check your inbox or spam folder and click the link to verify your account.",
      de: "Bitte überprüfen Sie Ihren Posteingang oder Spam-Ordner und klicken Sie auf den Link, um Ihr Konto zu verifizieren.",
    },
    footer: {
      subtitle: {
        en: "Didn't receive the email?",
        de: "Keine E-Mail erhalten?",
      },
      text1: {
        en: 'Double-check your email address for typos. If you still can\'t find the email from "noreply@kidata.de," check your spam folder.',
        de: 'Überprüfen Sie Ihre E-Mail-Adresse auf Tippfehler. Wenn Sie die E-Mail von "noreply@kidata.de" immer noch nicht finden können, überprüfen Sie Ihren Spam-Ordner.',
      },
    },
    action: {
      ok: {
        en: "OK",
        de: "OK",
      },
    },
  },
};
