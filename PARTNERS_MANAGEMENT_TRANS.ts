export const PartnerManagementTrans = {
  constants: {
    partnerStatus: {
      labels: {
        blocked: { en: "Blocked", de: "Gesperrt" },
        notBlocked: { en: "Not Block", de: "Nicht gesperrt" },
      },
    },
  },
  header: {
    title: { en: "Partner management", de: "Partnerverwaltung" },
    subTitle: {
      en: "Customize the results list using the filters below",
      de: "Passen Sie die Ergebnisliste mithilfe der untenstehenden Filter an",
    },
  },
  modals: {
    invitePartner: {
      triggerButton: {
        label: { en: "Invite Partner(s)", de: "Partner einladen" },
      },
      modals: {
        title: { en: "Invite partners", de: "Partner einladen" },
        PendingTitle: {
          en: "sending message...",
          de: "Nachricht wird gesendet...",
        },
        description: {
          en: "Company owner will receive a notification and a confirmation link via email.",
          de: "Der Firmeninhaber erhält eine Benachrichtigung und einen Bestätigungslink per E-Mail.",
        },
        form: {
          items: {
            email: {
              label: { en: "Email", de: "E-Mail" },
              rules: {
                required: {
                  en: "Please enter company Email",
                  de: "Bitte geben Sie die E-Mail des Unternehmens ein.",
                },
                invalid: {
                  en: "Please enter valid Email Address",
                  de: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                },
              },
            },
            extraEmail: {
              label: { en: "Email", de: "E-Mail" },
              rules: {
                required: {
                  en: "Please input company's email or delete this field.",
                  de: "Bitte geben Sie die E-Mail des Unternehmens ein oder löschen Sie dieses Feld.",
                },
                invalid: {
                  en: "Please enter valid Email Address",
                  de: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                },
              },
            },
          },
          action: {
            addMore: { en: "Add more email", de: "Weitere E-Mail hinzufügen" },
            cancel: { en: "cancel", de: "Abbrechen" },
            confirm: { en: "Send invitation", de: "Einladung senden" },
          },
        },
        message: {
          title: { en: "Invitation sent", de: "Einladung gesendet" },
          subTitle: {
            en: "Your invitation has been sent to",
            de: "Ihre Einladung wurde gesendet an",
          },
          action: {
            ok: { en: "ok", de: "OK" },
          },
        },
      },
    },

    remove: {
      title: { en: "Delete partner", de: "Partner löschen" },
      subTitle: {
        en: "Would you like to remove this partner(s) from the list?",
        de: "Möchten Sie diesen Partner bzw. diese Partner aus der Liste entfernen?",
      },
      descriptionOne: {
        en: "From then on, these partners will no longer be available for the “Restricted Display sharing” option",
        de: "Ab dann stehen diese Partner nicht mehr für die Option „Eingeschränkte Displayfreigabe“ zur Verfügung.",
      },
      descriptionTwo: {
        en: "Bookings that have already been paid for remain valid.",
        de: "Bereits bezahlte Buchungen bleiben weiterhin gültig.",
      },
      actions: {
        confirm: { en: "Yes, Remove", de: "Ja, entfernen" },
        cancel: { en: "cancel", de: "Abbrechen" },
      },
    },
    blockAndUnblock: {
      blockIt: {
        title: { en: "Block Partner(s)", de: "Partner sperren" },
        subTitle: {
          en: "Are you sure you want to block this partner(s)?",
          de: "Sind Sie sicher, dass Sie diesen Partner bzw. diese Partner sperren möchten?",
        },
        descriptionOne: {
          en: `Blocked partners will be unavailable for "Limited Display Sharing" during the block period.`,
          de: "Gesperrte Partner stehen während des Sperrzeitraums nicht für die „Eingeschränkte Displayfreigabe“ zur Verfügung.",
        },
        descriptionTwo: {
          en: "You can unblock them at any time.",
          de: "Sie können sie jederzeit entsperren.",
        },
        descriptionThree: {
          en: "Paid bookings will remain valid.",
          de: "Bezahlte Buchungen bleiben gültig.",
        },
        actions: {
          confirm: { en: "Yes, block", de: "Ja, sperren" },
          cancel: { en: "cancel", de: "Abbrechen" },
        },
      },
      unBlockIt: {
        title: { en: "Unblock Partner(s)", de: "Partner entsperren" },
        subTitle: {
          en: "Are you sure you want to unblock this partner(s)?",
          de: "Sind Sie sicher, dass Sie diesen Partner bzw. diese Partner entsperren möchten?",
        },
        description: {
          en: `From then on, these partners will be available for the option “Limited display sharing” again`,
          de: "Ab dann stehen diese Partner wieder für die Option „Eingeschränkte Displayfreigabe“ zur Verfügung.",
        },
        actions: {
          confirm: { en: "Yes, unblock", de: "Ja, entsperren" },
          cancel: { en: "cancel", de: "Abbrechen" },
        },
      },
    },
    sharedDisplays: {
      columns: {
        idAndType: { label: { en: "Id / Type", de: "ID / Typ" } },
        preview: { label: { en: "preview", de: "Vorschau" } },
        titleAndDescription: {
          label: { en: "Title / Description", de: "Titel / Beschreibung" },
        },
        categoryAndData: {
          label: { en: "Category / Data", de: "Kategorie / Daten" },
          content: {
            resolution: { en: "Resolution", de: "Auflösung" },
            size: { en: "Size", de: "Größe" },
            createdOn: { en: "Created on", de: "Erstellt am" },
          },
        },
        positionAndLocation: {
          label: { en: "Position / Location", de: "Position / Ort" },
          content: {
            street: { en: "Street", de: "Straße" },
            district: { en: "District", de: "Bezirk" },
          },
        },
        remove: { label: { en: "Remove", de: "Entfernen" } },
        details: { label: { en: "Details", de: "Details" } },
      },
    },
    removeSharedDisplay: {
      request: {
        title: {
          en: "Remove display from the list",
          de: "Display aus der Liste entfernen",
        },
        subTitle: { en: "", de: "" },
        descriptionOne: {
          en: "The display is then no longer available for restricted sharing. Bookings that have already been paid for remain valid.",
          de: "Das Display ist dann nicht mehr für die eingeschränkte Freigabe verfügbar. Bereits bezahlte Buchungen bleiben gültig.",
        },
        descriptionTwo: {
          en: "Under “Edit display” you can release it again for this partner.",
          de: "Unter „Display bearbeiten“ können Sie es wieder für diesen Partner freigeben.",
        },
        actions: {
          confirm: { en: "Yes, remove", de: "Ja, entfernen" },
          cancel: { en: "cancel", de: "Abbrechen" },
        },
      },
      pending: {
        title: { en: "Removing display...", de: "Display wird entfernt..." },
      },
      response: {
        title: { en: "Display removed", de: "Display entfernt" },
        subTitle: { en: "", de: "" },
        descriptionOne: {
          en: "The display has been removed from the list.",
          de: "Das Display wurde aus der Liste entfernt.",
        },
        descriptionTwo: {
          en: "Under “Edit display” you can release it again for this partner",
          de: "Unter „Display bearbeiten“ können Sie es wieder für diesen Partner freigeben.",
        },
        actions: {
          ok: { en: "OK", de: "OK" },
        },
      },
    },
  },
  tableSearchForm: {
    items: {
      keywords: {
        label: {
          en: "Company ID number, name, email",
          de: "Firmen-ID-Nummer, Name, E-Mail",
        },
        placeHolder: {
          en: "Company ID number, name, email",
          de: "Firmen-ID-Nummer, Name, E-Mail",
        },
      },
      displayId: {
        label: { en: "Display id", de: "Display-ID" },
        placeHolder: { en: "Display id", de: "Display-ID" },
      },
      lastBooking: {
        label: { en: "Last booking", de: "Letzte Buchung" },
        placeHolder: { en: "select period...", de: "Zeitraum auswählen..." },
      },
      status: { label: { en: "Status", de: "Status" } },
    },
    action: {
      search: { label: { en: "search", de: "Suchen" } },
    },
  },
  table: {
    columns: {
      select: { label: { en: "Select all", de: "Alle auswählen" } },
      id: { en: "ID No.", de: "ID-Nr." },
      companyName: { en: "Company name", de: "Firmenname" },
      email: { en: "Email address", de: "E-Mail-Adresse" },
      phone: { en: "Telephone", de: "Telefon" },
      responsiblePerson: {
        en: "Responsible Person",
        de: "Verantwortliche Person",
      },
      kidataAdmin: { en: "KiData Admin", de: "KiData-Admin" },
      displays: { en: "Display(s)", de: "Display(s)" },
      lastBooking: { en: "Last booking", de: "Letzte Buchung" },
      manage: { en: "Manage", de: "Verwalten" },
    },
    layout: {
      actions: {
        remove: {
          label: { en: "Remove", de: "Entfernen" },
          confirmation: {
            title: { en: "Remove Partners", de: "Partner entfernen" },
            description: {
              en: "Are you sure you want to remove selected partners?",
              de: "Möchten Sie die ausgewählten Partner wirklich entfernen?",
            },
            actions: {
              confirm: { en: "Remove", de: "Entfernen" },
              cancel: { en: "Cancel", de: "Abbrechen" },
            },
          },
        },
        block: {
          label: { en: "Block", de: "Sperren" },
          confirmation: {
            title: { en: "Block partners", de: "Partner sperren" },
            description: {
              en: "Are you sure you want to Block selected partners?",
              de: "Sind Sie sicher, dass Sie die ausgewählten Partner sperren möchten?",
            },
            actions: {
              confirm: { en: "Block", de: "Sperren" },
              cancel: { en: "Cancel", de: "Abbrechen" },
            },
          },
        },
        unblock: {
          label: { en: "Unblock", de: "Entsperren" },
          confirmation: {
            title: { en: "Unblock partners", de: "Partner entsperren" },
            description: {
              en: "Are you sure you want to unblock selected partners?",
              de: "Sind Sie sicher, dass Sie die ausgewählten Partner entsperren möchten?",
            },
            actions: {
              confirm: { en: "Unblock", de: "Entsperren" },
              cancel: { en: "Cancel", de: "Abbrechen" },
            },
          },
        },
      },
      selected: ({ selected, total }: { total: number; selected: number }) => {
        return {
          en: `${selected} of ${total} partner(s) selected`,
          de: `${selected} von ${total} Partnern ausgewählt`,
        };
      },
    },
  },
  confirmation: {
    actions: {
      confirm: { en: "Accept invitation", de: "Einladung annehmen" },
      cancel: { en: "Dismiss invitation", de: "Einladung ablehnen" },
    },
  },
} as const;
