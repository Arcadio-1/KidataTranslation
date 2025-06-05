export const CategoryTrans = {
  actionTrigger: {
    create: { en: "create new category", de: "Neue Kategorie erstellen" },
    edit: { en: "edit category", de: "Kategorie bearbeiten" },
  },
  modal: {
    header: {
      create: {
        title: {
          en: "Create New Category",
          de: "Neue Kategorie erstellen",
        },
        subTitle: {
          en: "Create a category for your digital signage device here",
          de: "Erstellen Sie hier eine Kategorie für Ihr Digital Signage Gerät",
        },
      },
      edit: {
        title: {
          en: "Edit Category",
          de: "Kategorie bearbeiten",
        },
        subTitle: {
          en: "Here you can change the title, color, and keywords of your category or delete your category",
          de: "Hier können Sie Titel, Farbe und Keywords Ihrer Kategorie ändern oder die Kategorie löschen",
        },
      },
    },
    form: {
      items: {
        title: {
          label: {
            en: "Title",
            de: "Titel",
          },
          placeHolder: {
            en: "Enter a title for your category",
            de: "Geben Sie einen Titel für Ihre Kategorie ein",
          },
          validationMsg: {
            required: {
              en: "Title field is required",
              de: "Titelfeld erforderlich",
            },
            invalid: {
              en: "Title field is invalid",
              de: "Titelfeld ungültig",
            },
          },
        },
        description: {
          label: {
            en: "Description",
            de: "Beschreibung",
          },
          placeHolder: {
            en: "Enter a description for this category",
            de: "Geben Sie eine Beschreibung für diese Kategorie ein",
          },
          validationMsg: {
            required: {
              en: "Description field is required",
              de: "Beschreibungsfeld erforderlich",
            },
            invalid: {
              en: "Description field is invalid",
              de: "Beschreibungsfeld ungültig",
            },
          },
        },
        color: {
          label: {
            en: "Category color",
            de: "Kategoriefarbe",
          },
          placeHolder: {
            en: "Custom Color",
            de: "Benutzerdefinierte Farbe",
          },
          validationMsg: {
            required: {
              en: "color field is required",
              de: "Farbfeld erforderlich",
            },
            invalid: {
              en: "color field is invalid",
              de: "Farbfeld ungültig",
            },
          },
        },
        keywords: {
          label: {
            en: "Keywords",
            de: "Schlüsselwörter",
          },
          placeHolder: {
            en: "Enter your keywords here, separated by commas (,).",
            de: "Geben Sie hier Ihre Schlüsselwörter ein, getrennt durch Kommas (,).",
          },
          validationMsg: {
            required: {
              en: "keywords field is required",
              de: "Schlüsselwörter erforderlich",
            },
            invalid: {
              en: "keywords field is invalid",
              de: "Schlüsselwörter ungültig",
            },
          },
        },
      },
      message: {
        deleteConfirmation: {
          title: {
            text1: {
              en: "Delete",
              de: "Löschen",
            },
            text2: {
              en: "category",
              de: "Kategorie",
            },
          },
          subTitle: {
            en: "Do you really want to delete this category?",
            de: "Möchten Sie diese Kategorie wirklich löschen?",
          },
        },
      },
      actions: {
        cancel: {
          en: "Cancel",
          de: "Abbrechen",
        },
        create: {
          en: "Create category",
          de: "Kategorie erstellen",
        },
        save: {
          en: "Save and exit",
          de: "Speichern und beenden",
        },
        delete: {
          en: "Delete category",
          de: "Kategorie löschen",
        },
        deleteConfirmation: {
          en: "Yes, delete",
          de: "Ja, löschen",
        },
      },
    },
    services: {
      create: {
        success: {
          en: "Category Created successfully",
          de: "Kategorie erfolgreich erstellt",
        },
        error: {
          en: "Category Create Failed",
          de: "Fehler beim Erstellen der Kategorie",
        },
      },
      edit: {
        success: {
          en: "Category Edited successfully",
          de: "Kategorie erfolgreich bearbeitet",
        },
        error: {
          en: "Category Edit Failed",
          de: "Fehler beim Bearbeiten der Kategorie",
        },
      },
      delete: {
        success: {
          en: "Category Deleted successfully",
          de: "Kategorie erfolgreich gelöscht",
        },
        error: {
          en: "Category Delete Failed",
          de: "Fehler beim Löschen der Kategorie",
        },
      },
    },
  },
};
