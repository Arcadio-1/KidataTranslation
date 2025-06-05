export const CompanyRegistrationTrans = {
  progressSteps: {
    companyData: {
      en: "Company Data",
      de: "Unternehmensdaten",
    },
    administrator: {
      en: "Administrator",
      de: "Verwalter",
    },
    businessModel: {
      en: "Business model",
      de: "Geschäftsmodell",
    },
    paymentInformation: {
      en: "Payment information",
      de: "Zahlungsinformationen",
    },
    confirmation: {
      en: "Company confirmation",
      de: "Firmenbestätigung",
    },
  },
  forms: {
    steps: {
      companyData: {
        addressData: {
          header: {
            title: {
              en: "Address data",
              de: "Adressdaten",
            },
            subtitle: {
              en: "Please enter the address data of your company (registered office)",
              de: "Bitte geben Sie die Adressdaten Ihres Unternehmens (Hauptsitz) ein",
            },
          },
          items: {
            companyName: {
              label: {
                en: "Company Name",
                de: "Firmenname",
              },
              placeHolder: {
                en: "Enter your company name",
                de: "Geben Sie Ihren Firmennamen ein",
              },
              validationMsg: {
                required: {
                  en: "Company name field is required",
                  de: "Das Feld Firmenname ist erforderlich",
                },
                invalid: {
                  en: "Company name field is invalid",
                  de: "Das Feld Firmenname ist ungültig",
                },
              },
            },
            companyForm: {
              label: {
                en: "Company form",
                de: "Rechtsform",
              },
              placeHolder: {
                en: "Select your company form",
                de: "Wählen Sie Ihre Rechtsform",
              },
            },
            street: {
              label: {
                en: "Street",
                de: "Straße",
              },
              placeHolder: {
                en: "Enter street name",
                de: "Geben Sie den Straßennamen ein",
              },
              validationMsg: {
                required: {
                  en: "Street name field is required",
                  de: "Das Feld Straßenname ist erforderlich",
                },
                invalid: {
                  en: "Street field is invalid",
                  de: "Das Feld Straße ist ungültig",
                },
              },
            },
            number: {
              label: {
                en: "Number",
                de: "Hausnummer",
              },
              placeHolder: {
                en: "Enter street number",
                de: "Geben Sie die Hausnummer ein",
              },
              validationMsg: {
                required: {
                  en: "Street number field is required",
                  de: "Das Feld Hausnummer ist erforderlich",
                },
                invalid: {
                  en: "Street number field is invalid",
                  de: "Das Feld Hausnummer ist ungültig",
                },
              },
            },
            addressSupplement: {
              label: {
                en: "Address Supplement",
                de: "Adresszusatz",
              },
              placeHolder: {
                en: "Address supplement of the company headquarters (if available)",
                de: "Adresszusatz der Firmenzentrale (falls vorhanden)",
              },
              validationMsg: {
                required: {
                  en: "Address Supplement field is required",
                  de: "Das Feld Adresszusatz ist erforderlich",
                },
                invalid: {
                  en: "Address Supplement field is invalid",
                  de: "Das Feld Adresszusatz ist ungültig",
                },
              },
            },
            zip: {
              label: {
                en: "Zip",
                de: "PLZ (Postleitzahl)",
              },
              placeHolder: {
                en: "Enter zip code",
                de: "Geben Sie die PLZ ein",
              },
              validationMsg: {
                required: {
                  en: "Zip code field is required",
                  de: "Das Feld PLZ ist erforderlich",
                },
                invalid: {
                  en: "Zip code field is invalid",
                  de: "Das Feld PLZ ist ungültig",
                },
              },
            },
            city: {
              label: {
                en: "City / Headquarters",
                de: "Stadt / Hauptsitz",
              },
              placeHolder: {
                en: "Enter the location",
                de: "Geben Sie den Ort ein",
              },
              validationMsg: {
                required: {
                  en: "City field is required",
                  de: "Das Feld Stadt ist erforderlich",
                },
                invalid: {
                  en: "City field is invalid",
                  de: "Das Feld Stadt ist ungültig",
                },
              },
            },
            federalState: {
              label: {
                en: "Federal State",
                de: "Bundesland",
              },
              placeHolder: {
                en: "Choose a state",
                de: "Wählen Sie ein Bundesland",
              },
              validationMsg: {
                required: {
                  en: "State field is required",
                  de: "Das Feld Bundesland ist erforderlich",
                },
              },
            },
            country: {
              label: {
                en: "Country",
                de: "Land",
              },
              placeHolder: {
                en: "Choose a country",
                de: "Wählen Sie ein Land",
              },
              validationMsg: {
                required: {
                  en: "Country field is required",
                  de: "Das Feld Land ist erforderlich",
                },
              },
            },
            phone: {
              label: {
                en: "Phone",
                de: "Telefon",
              },
              placeHolder: {
                en: "Phone number",
                de: "Telefonnummer",
              },
              validationMsg: {
                required: {
                  en: "Phone field is required",
                  de: "Das Feld Telefonnummer ist erforderlich",
                },
                invalid: {
                  en: "Phone number field is invalid",
                  de: "Das Feld Telefonnummer ist ungültig",
                },
              },
            },
            mobile: {
              label: {
                en: "Mobile",
                de: "Mobiltelefon",
              },
              placeHolder: {
                en: "Mobile number",
                de: "Mobiltelefonnummer",
              },
              validationMsg: {
                required: {
                  en: "Mobile field is required",
                  de: "Das Feld Mobiltelefonnummer ist erforderlich",
                },
                invalid: {
                  en: "Mobile number field is invalid",
                  de: "Das Feld Mobiltelefonnummer ist ungültig",
                },
              },
            },
            fax: {
              label: {
                en: "Fax",
                de: "Fax",
              },
              placeHolder: {
                en: "Fax number",
                de: "Faxnummer",
              },
              validationMsg: {
                required: {
                  en: "Fax field is required",
                  de: "Das Feld Faxnummer ist erforderlich",
                },
                invalid: {
                  en: "Fax number field is invalid",
                  de: "Das Feld Faxnummer ist ungültig",
                },
              },
            },
            website: {
              label: {
                en: "Website",
                de: "Website",
              },
              placeHolder: {
                en: "Enter website URL",
                de: "Geben Sie die Website-URL ein",
              },
              validationMsg: {
                required: {
                  en: "Website URL field is required",
                  de: "Das Feld Website-URL ist erforderlich",
                },
                invalid: {
                  en: "Website URL field is invalid",
                  de: "Das Feld Website-URL ist ungültig",
                },
              },
            },
            email: {
              label: {
                en: "Email",
                de: "E-Mail",
              },
              placeHolder: {
                en: "Enter email address",
                de: "Geben Sie die E-Mail-Adresse ein",
              },
              validationMsg: {
                required: {
                  en: "Email field is required",
                  de: "Das Feld E-Mail-Adresse ist erforderlich",
                },
                invalid: {
                  en: "Email field is invalid",
                  de: "Das Feld E-Mail-Adresse ist ungültig",
                },
              },
            },
          },
        },
        responsiblePerson: {
          header: {
            title: {
              en: "Imprint / Legal and content responsible person",
              de: "Impressum / Rechtlich und inhaltlich Verantwortliche Person",
            },
            subtitle: {
              en: "Please enter the name of the manager, board member or owner",
              de: "Bitte geben Sie den Namen des Geschäftsführers, Vorstandsmitglieds oder Eigentümers ein",
            },
          },
          items: {
            salutation: {
              label: {
                en: "Salutation",
                de: "Anrede",
              },
              placeHolder: {
                en: "Enter Salutation (e.g. Mr., Ms., Dr.)",
                de: "Anrede eingeben (z.B. Herr, Frau, Dr.)",
              },
              validationMsg: {
                required: {
                  en: "Salutation field is required",
                  de: "Das Anrede-Feld ist erforderlich",
                },
                invalid: {
                  en: "Salutation field is invalid",
                  de: "Das Anrede-Feld ist ungültig",
                },
              },
            },
            title: {
              label: {
                en: "Title",
                de: "Titel",
              },
              placeHolder: {
                en: "Your title",
                de: "Ihr Titel",
              },
              validationMsg: {
                required: {
                  en: "Title field is required",
                  de: "Das Feld Titel ist erforderlich",
                },
                invalid: {
                  en: "Title field is invalid",
                  de: "Das Feld Titel ist ungültig",
                },
              },
            },
            firstName: {
              label: {
                en: "First name",
                de: "Vorname",
              },
              placeHolder: {
                en: "First name of the responsible person in the company",
                de: "Vorname der verantwortlichen Person im Unternehmen",
              },
              validationMsg: {
                required: {
                  en: "First name field is required",
                  de: "Das Feld Vorname ist erforderlich",
                },
                invalid: {
                  en: "First name field is invalid",
                  de: "Das Feld Vorname ist ungültig",
                },
              },
            },
            lastName: {
              label: {
                en: "Last name",
                de: "Nachname",
              },
              placeHolder: {
                en: "Last name of the responsible person in the company",
                de: "Nachname der verantwortlichen Person im Unternehmen",
              },
              validationMsg: {
                required: {
                  en: "Last name field is required",
                  de: "Das Feld Nachname ist erforderlich",
                },
                invalid: {
                  en: "Last name field is invalid",
                  de: "Das Feld Nachname ist ungültig",
                },
              },
            },
            position: {
              label: {
                en: "Position / Function in the company",
                de: "Position / Funktion im Unternehmen",
              },
              placeHolder: {
                en: "Position of the responsible person in the company",
                de: "Position der verantwortlichen Person im Unternehmen",
              },
              validationMsg: {
                required: {
                  en: "Position field is required",
                  de: "Das Feld Position ist erforderlich",
                },
                invalid: {
                  en: "Position field is invalid",
                  de: "Das Feld Position ist ungültig",
                },
              },
            },
          },
        },
        logo: {
          header: {
            title: {
              en: "Company Logo",
              de: "Firmenlogo",
            },
            subtitle: {
              en: "Please upload your company logo if available.",
              de: "Bitte laden Sie Ihr Firmenlogo hoch, falls verfügbar.",
            },
          },
          items: {
            companyLogo: {
              label: {
                en: "Upload Your company logo",
                de: "Laden Sie Ihr Firmenlogo hoch",
              },
              placeHolder: {
                en: "Upload",
                de: "Hochladen",
              },
              validationMsg: {
                required: {
                  en: "Logo field is required",
                  de: "Das Feld für das Logo ist erforderlich",
                },
                invalid: {
                  en: "Logo field is invalid",
                  de: "Das Feld für das Logo ist ungültig",
                },
              },
            },
          },
        },

        service: {
          serverError: {
            en: "There was an error contacting the server.",
            de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
          },
          serverSuccess: {
            en: "Company data submitted successfully.",
            de: "Unternehmensdaten erfolgreich übermittelt.",
          },
          unauthorized: {
            en: "Unauthorized",
            de: "Nicht autorisiert",
          },
        },
      },
      administrator: {
        header: {
          title: {
            en: "Administrator and contact person for KiData",
            de: "Administrator und Ansprechpartner für KiData",
          },
          subtitle: {
            en: "Contact person for this KiData account",
            de: "Ansprechpartner für dieses KiData-Konto",
          },
          takeOver: {
            en: "Take over data from imprint",
            de: "Daten aus dem Impressum übernehmen",
          },
        },
        items: {
          salutation: {
            label: {
              en: "Salutation",
              de: "Anrede",
            },
            placeHolder: {
              en: "Enter Salutation (e.g. Mr., Ms., Dr.)",
              de: "Anrede eingeben (z.B. Herr, Frau, Dr.)",
            },
            validationMsg: {
              required: {
                en: "Salutation field is required",
                de: "Das Anrede-Feld ist erforderlich",
              },
              invalid: {
                en: "Salutation field is invalid",
                de: "Das Anrede-Feld ist ungültig",
              },
            },
          },
          title: {
            label: {
              en: "Title",
              de: "Titel",
            },
            placeHolder: {
              en: "Your title",
              de: "Ihr Titel",
            },
            validationMsg: {
              required: {
                en: "Title field is required",
                de: "Das Feld Titel ist erforderlich",
              },
              invalid: {
                en: "Title field is invalid",
                de: "Das Feld Titel ist ungültig",
              },
            },
          },
          firstName: {
            label: {
              en: "First name",
              de: "Vorname",
            },
            placeHolder: {
              en: "First name of the responsible person in the company",
              de: "Vorname der verantwortlichen Person im Unternehmen",
            },
            validationMsg: {
              required: {
                en: "First name field is required",
                de: "Das Feld Vorname ist erforderlich",
              },
              invalid: {
                en: "First name field is invalid",
                de: "Das Feld Vorname ist ungültig",
              },
            },
          },
          lastName: {
            label: {
              en: "Last name",
              de: "Nachname",
            },
            placeHolder: {
              en: "Last name of the responsible person in the company",
              de: "Nachname der verantwortlichen Person im Unternehmen",
            },
            validationMsg: {
              required: {
                en: "Last name field is required",
                de: "Das Feld Nachname ist erforderlich",
              },
              invalid: {
                en: "Last name field is invalid",
                de: "Das Feld Nachname ist ungültig",
              },
            },
          },
          position: {
            label: {
              en: "Position / Function in the company",
              de: "Position / Funktion im Unternehmen",
            },
            placeHolder: {
              en: "Position of the responsible person in the company",
              de: "Position der verantwortlichen Person im Unternehmen",
            },
            validationMsg: {
              required: {
                en: "Position field is required",
                de: "Das Feld Position ist erforderlich",
              },
              invalid: {
                en: "Position field is invalid",
                de: "Das Feld Position ist ungültig",
              },
            },
          },
          mobile: {
            label: {
              en: "Mobile (How can we reach you?)",
              de: "Mobilnummer (Wie können wir Sie erreichen?)",
            },
            placeHolder: {
              en: "Mobile number",
              de: "Mobiltelefonnummer",
            },
            validationMsg: {
              required: {
                en: "Mobile field is required",
                de: "Das Feld Mobilnummer ist erforderlich",
              },
              invalid: {
                en: "Mobile field is invalid",
                de: "Das Feld Mobilnummer ist ungültig",
              },
            },
          },
          phone: {
            label: {
              en: "Phone",
              de: "Telefonnummer",
            },
            placeHolder: {
              en: "Mobile number",
              de: "Handynummer",
            },
            validationMsg: {
              required: {
                en: "Mobile field is required",
                de: "Handynummer ist erforderlich.",
              },
              invalid: {
                en: "Mobile field is invalid",
                de: "Handynummer ist ungültig.",
              },
            },
          },
          email: {
            label: {
              en: "Your e-mail address for contacting us",
              de: "Ihre E-Mail-Adresse für Anfragen",
            },
            placeHolder: {
              en: "Enter your email address",
              de: "Geben Sie Ihre E-Mail-Adresse ein",
            },
            validationMsg: {
              required: {
                en: "Email field is required",
                de: "Das Feld E-Mail-Adresse ist erforderlich",
              },
              invalid: {
                en: "Email field is invalid",
                de: "Das Feld E-Mail-Adresse ist ungültig",
              },
            },
          },
          username: {
            label: {
              en: "Username",
              de: "Benutzername",
            },
            placeHolder: {
              en: "Your username",
              de: "Ihr Benutzername",
            },
            validationMsg: {
              required: {
                en: "username field is required",
                de: "Das Benutzername-Feld ist erforderlich",
              },
              invalid: {
                en: "This username is already taken.",
                de: "Dieser Benutzername ist bereits vergeben.",
              },
            },
          },
        },
        service: {
          serverError: {
            en: "There was an error contacting the server.",
            de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
          },
          serverSuccess: {
            en: "Administrator data submitted successfully.",
            de: "Administratordaten erfolgreich übermittelt.",
          },
          unauthorized: {
            en: "Unauthorized",
            de: "Nicht autorisiert",
          },
        },
      },
      businessModel: {
        header: {
          title: {
            en: "Business model",
            de: "Geschäftsmodell",
          },
          subtitle: {
            en: "Choose your business model on this page and click the corresponding button",
            de: "Wählen Sie auf dieser Seite Ihr Geschäftsmodell aus und klicken Sie auf die entsprechende Schaltfläche",
          },
        },
        items: {
          businessModel: {
            actions: {
              details: {
                en: "Details",
                de: "Details",
              },
              select: {
                en: "Select",
                de: "Auswählen",
              },
            },
            validationMsg: {
              required: {
                en: "Select One of Business model items",
                de: "Wählen Sie ein Geschäftsmodell aus",
              },
              invalid: {
                en: "Selected Business model is invalid",
                de: "Das ausgewählte Geschäftsmodell ist ungültig",
              },
            },
          },
        },
        service: {
          serverError: {
            en: "There was an error contacting the server.",
            de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
          },
          serverSuccess: {
            en: "Business model data submitted successfully.",
            de: "Geschäftsmodelldaten erfolgreich übermittelt.",
          },
          unauthorized: {
            en: "Unauthorized",
            de: "Nicht autorisiert",
          },
        },
      },
      paymentInformation: {
        billingAddressRecipient: {
          header: {
            title: {
              en: "Billing address recipient",
              de: "Rechnungsempfänger (in der Rechnungsadresse)",
            },
          },
          items: {
            isDiffer: {
              label: {
                en: "The billing address is a different address than the company address",
                de: "Die Rechnungsadresse unterscheidet sich von der Firmenadresse.",
              },
            },
            salutation: {
              label: {
                en: "Salutation",
                de: "Anrede",
              },
              placeHolder: {
                en: "Enter Salutation (e.g. Mr., Ms., Dr.)",
                de: "Anrede eingeben (z.B. Herr, Frau, Dr.)",
              },
              validationMsg: {
                required: {
                  en: "Salutation field is required",
                  de: "Das Anrede-Feld ist erforderlich",
                },
                invalid: {
                  en: "Salutation field is invalid",
                  de: "Das Anrede-Feld ist ungültig",
                },
              },
            },
            title: {
              label: {
                en: "Title",
                de: "Titel",
              },
              placeHolder: {
                en: "Your title",
                de: "Ihr Titel",
              },
              validationMsg: {
                required: {
                  en: "Title field is required",
                  de: "Das Feld Titel ist erforderlich",
                },
                invalid: {
                  en: "Title field is invalid",
                  de: "Das Feld Titel ist ungültig",
                },
              },
            },
            firstName: {
              label: {
                en: "First name",
                de: "Vorname",
              },
              placeHolder: {
                en: "First name of the responsible person in the company",
                de: "Vorname der verantwortlichen Person im Unternehmen",
              },
              validationMsg: {
                required: {
                  en: "First name field is required",
                  de: "Das Feld Vorname ist erforderlich",
                },
                invalid: {
                  en: "First name field is invalid",
                  de: "Das Feld Vorname ist ungültig",
                },
              },
            },
            lastName: {
              label: {
                en: "Last name",
                de: "Nachname",
              },
              placeHolder: {
                en: "Last name of the responsible person in the company",
                de: "Nachname der verantwortlichen Person im Unternehmen",
              },
              validationMsg: {
                required: {
                  en: "Last name field is required",
                  de: "Das Feld Nachname ist erforderlich",
                },
                invalid: {
                  en: "Last name field is invalid",
                  de: "Das Feld Nachname ist ungültig",
                },
              },
            },
            street: {
              label: {
                en: "Street",
                de: "Straße",
              },
              placeHolder: {
                en: "Enter street name",
                de: "Geben Sie den Straßennamen ein",
              },
              validationMsg: {
                required: {
                  en: "Street name field is required",
                  de: "Das Feld Straßenname ist erforderlich",
                },
                invalid: {
                  en: "Street field is invalid",
                  de: "Das Feld Straße ist ungültig",
                },
              },
            },
            number: {
              label: {
                en: "Number",
                de: "Hausnummer",
              },
              placeHolder: {
                en: "Enter street number",
                de: "Geben Sie die Hausnummer ein",
              },
              validationMsg: {
                required: {
                  en: "Street number field is required",
                  de: "Das Feld Hausnummer ist erforderlich",
                },
                invalid: {
                  en: "Street number field is invalid",
                  de: "Das Feld Hausnummer ist ungültig",
                },
              },
            },
            addressSupplement: {
              label: {
                en: "Address Supplement",
                de: "Adresszusatz",
              },
              placeHolder: {
                en: "Address supplement of the company headquarters (if available)",
                de: "Adresszusatz der Firmenzentrale (falls vorhanden)",
              },
              validationMsg: {
                required: {
                  en: "Address Supplement field is required",
                  de: "Das Feld Adresszusatz ist erforderlich",
                },
                invalid: {
                  en: "Address Supplement field is invalid",
                  de: "Das Feld Adresszusatz ist ungültig",
                },
              },
            },
            zip: {
              label: {
                en: "Zip",
                de: "PLZ (Postleitzahl)",
              },
              placeHolder: {
                en: "Enter zip code",
                de: "Geben Sie die PLZ ein",
              },
              validationMsg: {
                required: {
                  en: "Zip code field is required",
                  de: "Das Feld PLZ ist erforderlich",
                },
                invalid: {
                  en: "Zip code field is invalid",
                  de: "Das Feld PLZ ist ungültig",
                },
              },
            },
            city: {
              label: {
                en: "City / Headquarters",
                de: "Stadt / Hauptsitz",
              },
              placeHolder: {
                en: "Enter the location",
                de: "Geben Sie den Ort ein",
              },
              validationMsg: {
                required: {
                  en: "City field is required",
                  de: "Das Feld Stadt ist erforderlich",
                },
                invalid: {
                  en: "City field is invalid",
                  de: "Das Feld Stadt ist ungültig",
                },
              },
            },
            federalState: {
              label: {
                en: "Federal State",
                de: "Bundesland",
              },
              placeHolder: {
                en: "Choose a state",
                de: "Wählen Sie ein Bundesland",
              },
              validationMsg: {
                required: {
                  en: "State field is required",
                  de: "Das Feld Bundesland ist erforderlich",
                },
              },
            },
            country: {
              label: {
                en: "Country",
                de: "Land",
              },
              placeHolder: {
                en: "Choose a country",
                de: "Wählen Sie ein Land",
              },
              validationMsg: {
                required: {
                  en: "Country field is required",
                  de: "Das Feld Land ist erforderlich",
                },
              },
            },
          },
        },
        paymentInformation: {
          header: {
            title: {
              en: "Payment Information",
              de: "Zahlungsinformationen",
            },
            subtitle: {
              en: "Please enter your payment information",
              de: "Bitte geben Sie Ihre Zahlungsinformationen ein",
            },
          },
          items: {
            paymentMethod: {
              label: {
                en: "Payment method",
                de: "Zahlungsmethode",
              },
              placeHolder: {
                en: "Please select your payment method",
                de: "Bitte wählen Sie Ihre Zahlungsmethode aus",
              },
              validationMsg: {
                required: {
                  en: "Payment method field is required",
                  de: "Das Feld Zahlungsmethode ist erforderlich",
                },
                invalid: {
                  en: "Payment method field is invalid",
                  de: "Das Feld Zahlungsmethode ist ungültig",
                },
              },
            },
            accountOwner: {
              label: {
                en: "Account owner",
                de: "Kontoinhaber",
              },
              placeHolder: {
                en: "Please enter the account holder",
                de: "Bitte geben Sie den Kontoinhaber ein",
              },
              validationMsg: {
                required: {
                  en: "Account owner field is required",
                  de: "Das Feld Kontoinhaber ist erforderlich",
                },
                invalid: {
                  en: "Account owner field is invalid",
                  de: "Das Feld Kontoinhaber ist ungültig",
                },
              },
            },
            IBAN: {
              label: {
                en: "IBAN",
                de: "IBAN",
              },
              placeHolder: {
                en: "Please enter your IBAN",
                de: "Bitte geben Sie Ihre IBAN ein",
              },
              validationMsg: {
                required: {
                  en: "IBAN field is required",
                  de: "Das Feld IBAN ist erforderlich",
                },
                invalid: {
                  en: "IBAN field is invalid",
                  de: "Das Feld IBAN ist ungültig",
                },
              },
            },
            BIC: {
              label: {
                en: "BIC",
                de: "BIC",
              },
              placeHolder: {
                en: "Please enter your BIC",
                de: "Bitte geben Sie Ihre BIC ein",
              },
              validationMsg: {
                required: {
                  en: "BIC field is required",
                  de: "Das Feld BIC ist erforderlich",
                },
                invalid: {
                  en: "BIC field is invalid",
                  de: "Das Feld BIC ist ungültig",
                },
              },
            },
          },
        },
        agree: {
          label: {
            en: "We agree to receive further information about KiData via email",
            de: "Ich stimme zu, weitere Informationen zu KiData per E-Mail zu erhalten",
          },
          validationMsg: {
            required: {
              en: "Checking agreement field is required",
              de: "Zustimmung erforderlich",
            },
          },
        },
        service: {
          serverError: {
            en: "There was an error contacting the server.",
            de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
          },
          serverSuccess: {
            en: "Payment Information submitted",
            de: "Zahlungsinformationen erfolgreich übermittelt",
          },
          unauthorized: {
            en: "Unauthorized",
            de: "Nicht autorisiert",
          },
        },
      },
      confirmation: {
        basicRegistration: {
          header: {
            title: {
              en: "Basic Registration",
              de: "Grundregistrierung",
            },
            subtitle: {
              en: "Manage your company's legal documentation. If you don't have a registered company or prefer to complete this later, you may skip this step.",
              de: "Verwalten Sie die rechtlichen Unterlagen Ihres Unternehmens. Wenn Sie kein registriertes Unternehmen haben oder dies lieber später erledigen möchten, können Sie diesen Schritt überspringen.",
            },
          },
          action: {
            openModal: {
              en: "Register with Basic Company Registration",
              de: "Mit Basis-Unternehmensregistrierung registrieren",
            },
          },
          modal: {
            success: {
              title: {
                en: "Your profile has been created successfully",
                de: "Ihr Profil wurde erfolgreich erstellt",
              },
              subtitle: {
                en: "Registering as a basic company limits your interactions on Kidata. For example, you won't be able to share your displays or book advertisements on other companies’ screens.",
                de: "Die Registrierung als Basisunternehmen schränkt Ihre Interaktionen auf Kidata ein. Zum Beispiel können Sie Ihre Displays nicht teilen oder Werbung auf den Bildschirmen anderer Unternehmen buchen.",
              },
              description: {
                en: "You can complete a full registration later via the company settings.",
                de: "Eine vollständige Registrierung können Sie später über die Unternehmenseinstellungen abschließen.",
              },
              actions: {
                confirm: {
                  en: "Continue to Dashboard",
                  de: "Zum Dashboard fortfahren",
                },
              },
            },
            confirmation: {
              title: {
                en: "Basic Company Registration",
                de: "Basis-Unternehmensregistrierung",
              },
              subtitle: {
                en: "Registering as a basic company limits your interactions on Kidata. For example, you won't be able to share your displays or book advertisements on other companies’ screens.",
                de: "Die Registrierung als Basisunternehmen schränkt Ihre Interaktionen auf Kidata ein. Zum Beispiel können Sie Ihre Displays nicht teilen oder Werbung auf den Bildschirmen anderer Unternehmen buchen.",
              },
              description: {
                en: "You can complete a full registration later via the company settings.",
                de: "Eine vollständige Registrierung können Sie später über die Unternehmenseinstellungen abschließen.",
              },
              actions: {
                cancel: { en: "Cancel", de: "Abbrechen" },
                confirm: { en: "Register", de: "Registrieren" },
              },
            },
          },
        },
        industry: {
          header: {
            title: {
              en: "Industry",
              de: "Branche",
            },
            subtitle: {
              en: "Enter the description of your industry here and select the appropriate default industry",
              de: "Geben Sie hier eine Beschreibung Ihrer Branche ein und wählen Sie die passende Standardbranche aus",
            },
          },
          items: {
            name: {
              label: {
                en: "Your industry name",
                de: "Branchenname",
              },
              placeHolder: {
                en: "Enter the correct name of your industry",
                de: "Geben Sie den genauen Namen Ihrer Branche ein",
              },
              validationMsg: {
                required: {
                  en: "Industry name field is required",
                  de: "Das Feld Branchenname ist erforderlich",
                },
                invalid: {
                  en: "Industry name field is invalid",
                  de: "Das Feld Branchenname ist ungültig",
                },
              },
            },
            description: {
              label: {
                en: "Description",
                de: "Beschreibung",
              },
              placeHolder: {
                en: "Describe your industry",
                de: "Beschreiben Sie Ihre Branche",
              },
              validationMsg: {
                required: {
                  en: "Description field is required",
                  de: "Das Feld Beschreibung ist erforderlich",
                },
                invalid: {
                  en: "Description field is invalid",
                  de: "Das Feld Beschreibung ist ungültig",
                },
              },
            },
            industry: {
              label: {
                en: "Select industry (from industry list)",
                de: "Branche auswählen (aus Branchenliste)",
              },
              placeHolder: {
                en: "Choose your industry",
                de: "Wählen Sie Ihre Branche",
              },
              validationMsg: {
                required: {
                  en: "Industry field is required",
                  de: "Das Feld Branche ist erforderlich",
                },
                invalid: {
                  en: "Industry field is invalid",
                  de: "Das Feld Branche ist ungültig",
                },
              },
            },
          },
        },
        proof: {
          header: {
            title: {
              en: "Proof",
              de: "Nachweis",
            },
            subtitle: {
              en: "Please upload the required documents here",
              de: "Bitte laden Sie hier die erforderlichen Dokumente hoch.",
            },
          },
          items: {
            businessLicense: {
              label: {
                en: "Upload Your Business License",
                de: "Gewerbeanmeldung hochladen",
              },
              placeHolder: {
                en: "Upload",
                de: "Hochladen",
              },
              validationMsg: {
                required: {
                  en: "Business License field is required",
                  de: "Das Feld Gewerbeanmeldung ist erforderlich",
                },
                invalid: {
                  en: "Business License field is invalid",
                  de: "Das Feld Gewerbeanmeldung ist ungültig",
                },
              },
            },
            IDCard: {
              label: {
                en: "Upload Your ID Card",
                de: "Personalausweis hochladen",
              },
              placeHolder: {
                en: "Upload",
                de: "Hochladen",
              },
              validationMsg: {
                required: {
                  en: "ID Card field is required",
                  de: "Das Feld Personalausweis ist erforderlich",
                },
                invalid: {
                  en: "ID Card field is invalid",
                  de: "Das Feld Personalausweis ist ungültig",
                },
              },
            },
          },
        },
        taxIdentificationNumbers: {
          header: {
            title: {
              en: "Tax Identification Numbers",
              de: "Steuernummern",
            },
            subtitle: {
              en: "Please enter your company tax ID number and VAT ID number here.",
              de: "Bitte geben Sie hier Ihre Steuernummer und Ihre Umsatzsteuer-Identifikationsnummer (USt-IdNr.) ein.",
            },
          },
          items: {
            TaxIdentificationNumber: {
              label: {
                en: "Tax identification number",
                de: "Steuernummer",
              },
              placeHolder: {
                en: "Please enter your company tax ID number.",
                de: "Bitte geben Sie Ihre Steuernummer ein.",
              },
              validationMsg: {
                required: {
                  en: "Tax identification number field is required",
                  de: "Das Feld Steuernummer ist erforderlich",
                },
                invalid: {
                  en: "Tax identification number field is invalid",
                  de: "Das Feld Steuernummer ist ungültig",
                },
              },
            },
            salesTaxIdentificationNumber: {
              label: {
                en: "A sales tax identification number (DE no.)",
                de: "Umsatzsteuer-Identifikationsnummer (USt-IdNr.)",
              },
              placeHolder: {
                en: "Please enter your company VAT number.",
                de: "Bitte geben Sie Ihre USt-IdNr. ein.",
              },
              validationMsg: {
                required: {
                  en: "Sales tax identification number field is required",
                  de: "Das Feld USt-IdNr. ist erforderlich",
                },
                invalid: {
                  en: "Sales tax identification number field is invalid",
                  de: "Das Feld USt-IdNr. ist ungültig",
                },
              },
            },
          },
        },
        service: {
          serverError: {
            en: "There was an error contacting the server.",
            de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
          },
          serverSuccess: {
            en: "Confirmation Information submitted",
            de: "Bestätigungsinformationen übermittelt",
          },
          unauthorized: {
            en: "Unauthorized",
            de: "Nicht autorisiert",
          },
        },
      },
      final: {
        header: {
          title: {
            en: "Your profile has been created successfully",
            de: "Ihr Profil wurde erfolgreich erstellt",
          },
          subtitle: {
            en: "As soon as we have checked your login details, you will receive a message to the e-mail address you provided...",
            de: "Sobald wir Ihre Anmeldedaten überprüft haben, erhalten Sie eine Nachricht an die von Ihnen angegebene E-Mail-Adresse...",
          },
          description: {
            en: "Take advantage of our free trial until you activate",
            de: "Nutzen Sie unsere kostenlose Testphase, bis Sie aktiviert werden",
          },
        },
        action: {
          submit: {
            en: "Continue to Dashboard",
            de: "Zum Dashboard weitergehen",
          },
        },
      },
    },
  },
};
