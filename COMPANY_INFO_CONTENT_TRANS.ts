export const CompanyInfoContentTrans = {
  header: {
    title: { en: "Company information", de: "Firmeninformationen" },
  },
  item: {
    companyName: {
      label: { en: "Company name", de: "Firmenname" },
    },
    creationData: {
      label: { en: "Creation date", de: "Gründungsdatum" },
    },
    address: {
      title: { en: "Address details", de: "Adressdetails" },
      items: {
        street: {
          label: { en: "Street controll ", de: "Straße" },
        },
        number: {
          label: { en: "No.", de: "Nr." },
        },
        location: {
          label: { en: "Location", de: "Ort" },
        },
        zipCode: {
          label: { en: "ZIP code", de: "Postleitzahl" },
        },
        email: {
          label: { en: "Email", de: "E-Mail" },
        },
        phone: {
          label: { en: "Phone", de: "Telefonnummer" },
        },
      },
    },
    responsiblePerson: {
      title: { en: "Responsible person", de: "Verantwortliche Person" },
      items: {
        firstName: {
          label: { en: "First name", de: "Vorname" },
        },
        lastName: {
          label: { en: "Last name", de: "Nachname" },
        },
      },
    },
    administrator: {
      title: { en: "Administrator", de: "Administrator" },
      items: {
        firstName: {
          label: { en: "First name", de: "Vorname" },
        },
        lastName: {
          label: { en: "Last name", de: "Nachname" },
        },
        phone: {
          label: { en: "Phone", de: "Telefonnummer" },
        },
        userName: { label: { en: "Username", de: "Benutzername" } },
      },
    },
  },
} as const;
