export const RegisterTrans = {
  header: {
    title: { en: "Create Account", de: "Konto erstellen" },
    subtitle: {
      text: {
        en: "Already have an account?",
        de: "Haben Sie bereits ein Konto?",
      },
      link: {
        en: "Login here",
        de: "Hier anmelden",
      },
    },
  },
  form: {
    items: {
      email: {
        label: {
          en: "E-mail address (Is also your username)",
          de: "E-Mail-Adresse (ist auch Ihr Benutzername)",
        },
        placeHolder: {
          en: "Enter a valid Email address",
          de: "Geben Sie eine gültige E-Mail-Adresse ein",
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
      registerType: {
        label: {
          en: "Select Your Registration Type",
          de: "Wählen Sie Ihren Registrierungstyp",
        },
        items: {
          company: {
            label: {
              en: "Register as a Company Owner",
              de: "Registrieren Sie sich als Unternehmensinhaber",
            },
            description: {
              en: "If you own a company, you will be required to provide additional business details during registration.",
              de: "Wenn Sie ein Unternehmen besitzen, müssen Sie während der Registrierung zusätzliche Unternehmensinformationen angeben.",
            },
          },
          user: {
            label: {
              en: "Register as a Company User",
              de: "Registrieren Sie sich als Firmenbenutzer",
            },
            description: {
              en: "If you are employed by a company registered with Kidata, please select this option. Note that you must be invited by your company to complete this registration.",
              de: "Wenn Sie in einem bei Kidata registrierten Unternehmen beschäftigt sind, wählen Sie bitte diese Option. Bitte beachten Sie, dass Sie von Ihrem Unternehmen eingeladen werden müssen, um sich als Firmenbenutzer zu registrieren.",
            },
          },
        },
        validationMsg: {
          required: {
            en: "Registration Type Field Is Required",
            de: "Das Feld für den Registrierungstyp ist erforderlich",
          },
          invalid: {
            en: "Registration Type Is Invalid",
            de: "Der Registrierungstyp ist ungültig",
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
            en: "Password do not match",
            de: "Passwort stimmt nicht überein",
          },
        },
      },
      terms: {
        text1: {
          en: `With your registration you agree to our`,
          de: "Mit Ihrer Registrierung stimmen Sie unseren",
        },
        link1: {
          en: "general terms and conditions.",
          de: "Allgemeinen Geschäftsbedingungen zu.",
        },
        text2: {
          en: "Please read our Privacy Policy, our ",
          de: "Bitte lesen Sie unsere Datenschutzerklärung, unseren ",
        },
        link2: {
          en: "notice on cookies",
          de: "Hinweis zu Cookies",
        },
        text3: {
          en: "and our",
          de: "und unsere",
        },
        link3: {
          en: "Interest-Based Advertising Notice",
          de: "Hinweise zur interessenbezogenen Werbung",
        },
        validationMsg: {
          required: {
            en: "Please Check The Terms And service Field",
            de: "Bitte überprüfen Sie das Feld Bedingungen und Service.",
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
        en: "Create Account",
        de: "Konto erstellen",
      },
    },
    validationMsg: {
      duplicatedEmail: {
        en: "Sorry, the email address you provided is already associated with an existing account. Please sign in using your existing account or use a different email address to create a new account.",
        de: "Entschuldigung, die von Ihnen angegebene E-Mail-Adresse ist bereits mit einem bestehenden Konto verknüpft. Bitte melden Sie sich mit Ihrem bestehenden Konto an oder verwenden Sie eine andere E-Mail-Adresse, um ein neues Konto zu erstellen.",
      },
    },
  },
  successMessage: {
    title: { en: "Verification Link Sent!", de: "Bestätigungslink gesendet!" },
    subtitle: {
      en: "We've sent a verification link to your email address",
      de: "Wir haben einen Bestätigungslink an Ihre E-Mail-Adresse gesendet",
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
  service: {
    serverError: {
      en: "There was an error contacting the server.",
      de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
    },
    unauthorized: {
      en: "Unauthorized",
      de: "Nicht autorisiert",
    },
  },
};
