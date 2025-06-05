export const ResetPasswordTrans = {
  header: {
    title: { en: "Reset Password", de: "Passwort zurücksetzen" },
    subtitle: {
      en: "You have requested a password reset for",
      de: "Sie haben eine Passwortzurücksetzung für beantragt",
    },
  },
  form: {
    items: {
      password: {
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
          invalid: {
            en: "Password is not strong enough",
            de: "Das Passwort ist nicht sicher genug",
          },
          characters8: {
            en: "Password length of at least 8 characters",
            de: "Passwortlänge von mindestens 8 Zeichen",
          },
          capital: {
            en: "At least one capital letter",
            de: "Mindestens ein Großbuchstabe",
          },
          lowercase: {
            en: "At least one lowercase letter",
            de: "Mindestens ein Kleinbuchstabe",
          },
          special: {
            en: "At least one special character",
            de: "Mindestens ein Sonderzeichen",
          },
          number: {
            en: "At least one number",
            de: "Mindestens eine Zahl",
          },
        },
      },
      confirmPassword: {
        label: {
          en: "Confirm password",
          de: "Passwort bestätigen",
        },
        placeHolder: {
          en: "Confirm your password here",
          de: "Bestätigen Sie hier Ihr Passwort",
        },
        validationMsg: {
          required: {
            en: "Please confirm your password",
            de: "Bitte bestätigen Sie Ihr Passwort",
          },
          invalid: {
            en: "Passwords do not match",
            de: "Passwörter stimmen nicht überein",
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
        en: "Reset password",
        de: "Passwort zurücksetzen",
      },
    },
  },
  successMessage: {
    title: {
      en: "Your password has been successfully reset!",
      de: "Ihr Passwort wurde erfolgreich zurückgesetzt!",
    },
    subtitle: {
      en: "For security reasons, an email was sent to confirm this change to your account",
      de: "Aus Sicherheitsgründen wurde eine E-Mail zur Bestätigung dieser Änderung an Ihr Konto gesendet",
    },
    action: {
      ok: {
        en: "Continue to login",
        de: "Zum Login fortfahren",
      },
    },
  },
};
