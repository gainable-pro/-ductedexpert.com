import { DEFAULT_LOCALE, isValidLocale, Locale } from "./i18n";

export const FORMS_DICTIONARY: Record<Locale, {
    cvcForm: {
        yourDetails: string;
        lastNameLabel: string;
        lastNamePlaceholder: string;
        firstNameLabel: string;
        firstNamePlaceholder: string;
        phoneLabel: string;
        phonePlaceholder: string;
        phoneHint: string;
        emailLabel: string;
        emailPlaceholder: string;
        propertyInfo: string;
        propertyTypeLabel: string;
        selectPlaceholder: string;
        surfaceLabel: string;
        surfacePlaceholder: string;
        addressLabel: string;
        addressPlaceholder: string;
        installationType: string;
        technologiesLabel: string;
        detailsAndFiles: string;
        projectDescLabel: string;
        projectDescPlaceholder: string;
        projectDescHint: string;
        plansPhotosLabel: string;
        uploading: string;
        clickToAddFiles: string;
        gdprPrefix: string;
        privacyPolicyLink: string;
        sending: string;
        submitQuoteBtn: string;
        submitDisclaimer: string;
        // Validation errors
        errLastName: string;
        errFirstName: string;
        errPhone: string;
        errEmail: string;
        errPropertyType: string;
        errSurface: string;
        errAddress: string;
        errTech: string;
        errGdpr: string;
        // Simple form extras
        cityZipOptionalLabel: string;
        cityZipOptionalPlaceholder: string;
        yourRequestTitle: string;
        messageLabel: string;
        messagePlaceholder: string;
        submitSimpleBtn: string;
    };
    wizard: {
        requestSentTitle: string;
        hvacQuoteTitle: string;
        contactProTitle: string;
        sentToCount: (count: number) => string;
        selectProSubtitle: string;
        maxRecipients: string;
        thankYouTitle: string;
        thankYouText: string;
        safetyTipsTitle: string;
        safetyTips: string[];
        closeBtn: string;
    };
    noResults: {
        successTitle: string;
        successText: string;
        dontWorryTitle: string;
        bestExpertsHighlight: string;
        bestExpertsRest: string;
        fillFormNote: string;
        requestTypeLabel: string;
        hvacOption: string;
        engineeringOption: string;
    };
    internationalLead: {
        getQuoteInCity: (city: string) => string;
        subtitle: string;
        thankYouTitle: string;
        transmittedToExpert: (city: string, expert: string) => string;
        transmittedToLocal: (city: string) => string;
        contact24h: string;
        newRequestBtn: string;
    };
    contactPage: {
        heroTitle: string;
        heroSubtitle1: string;
        heroSubtitle2: string;
        successTitle: string;
        successText: string;
        sendAnotherBtn: string;
        cardIndividualTitle: string;
        cardIndividualDesc: string;
        cardProTitle: string;
        cardProDesc: string;
        cardPartnerTitle: string;
        cardPartnerDesc: string;
        formBadge: string;
        changeBtn: string;
        proSectorLabel: string;
        proSectorPlaceholder: string;
        proSectorEngineering: string;
        proSectorInstaller: string;
        proSectorArchitect: string;
        proSectorOther: string;
        civilityLabel: string;
        mr: string;
        mrs: string;
        postalCodeLabel: string;
        cityLabel: string;
        yourMessageLabel: string;
        yourMessagePlaceholder: string;
        attachmentLabel: string;
        clickToUpload: string;
        removeFileBtn: string;
        sendRequestBtn: string;
        responseTime: string;
        supportTitle: string;
        viaFormOnly: string;
        betterTracking: string;
    };
    confirmationPage: {
        title: string;
        subtitle: string;
        noPublicPhone: string;
        adviceTitle: string;
        adviceList: string[];
        backHomeBtn: string;
        findAnotherExpertBtn: string;
    };
}> = {
    en: {
        cvcForm: {
            yourDetails: "Your Contact Details",
            lastNameLabel: "Last Name *",
            lastNamePlaceholder: "Your last name",
            firstNameLabel: "First Name *",
            firstNamePlaceholder: "Your first name",
            phoneLabel: "Phone Number *",
            phonePlaceholder: "+44 20 1234 5678",
            phoneHint: "Required for a fast quote response.",
            emailLabel: "Email *",
            emailPlaceholder: "your@email.com",
            propertyInfo: "Property Information",
            propertyTypeLabel: "Property Type *",
            selectPlaceholder: "Select...",
            surfaceLabel: "Area to Air-Condition / Heat (m²) *",
            surfacePlaceholder: "e.g., 120",
            addressLabel: "Full Property Address *",
            addressPlaceholder: "Street Address, Postal Code, City",
            installationType: "Installation Type",
            technologiesLabel: "Requested Technologies *",
            detailsAndFiles: "Project Details & Files",
            projectDescLabel: "Describe your project (Optional)",
            projectDescPlaceholder: "Specify your needs, number of rooms, constraints...",
            projectDescHint: "The more specific your request, the more accurate your quote will be.",
            plansPhotosLabel: "Floor plans or photos (Optional)",
            uploading: "Uploading...",
            clickToAddFiles: "Click to attach files",
            gdprPrefix: "I agree that my data will be processed to respond to my inquiry and I have read the",
            privacyPolicyLink: "privacy policy",
            sending: "Sending...",
            submitQuoteBtn: "📨 Send My Quote Request",
            submitDisclaimer: "By submitting this form, you agree that your details will be shared with the selected HVAC professionals.",
            errLastName: "Last name is required",
            errFirstName: "First name is required",
            errPhone: "Valid phone number is required",
            errEmail: "Invalid email address",
            errPropertyType: "Property type is required",
            errSurface: "Surface area is required",
            errAddress: "Full address is required",
            errTech: "Please select at least one technology",
            errGdpr: "You must accept the privacy policy.",
            cityZipOptionalLabel: "City / Postal Code (Optional)",
            cityZipOptionalPlaceholder: "e.g., London, SW1A 1AA",
            yourRequestTitle: "Your Inquiry",
            messageLabel: "Message *",
            messagePlaceholder: "Hello, I would like a quote for...",
            submitSimpleBtn: "📨 Send My Inquiry",
        },
        wizard: {
            requestSentTitle: "Inquiry Sent!",
            hvacQuoteTitle: "Quote Request – Air Conditioning & Heating",
            contactProTitle: "Contact a Professional",
            sentToCount: (count) => `Your request will be sent directly to ${count} professional(s)`,
            selectProSubtitle: "Select a professional",
            maxRecipients: "(Max 5 recipients)",
            thankYouTitle: "Thank you for your inquiry!",
            thankYouText: "Your project file has been sent to the selected professionals. They will contact you shortly by phone or email.",
            safetyTipsTitle: "🛡️ Tips before hiring:",
            safetyTips: [
                "Verify professional liability insurance and HVAC certifications.",
                "Compare multiple detailed proposals when possible.",
                "Ask for a complete breakdown of equipment brands, models, and warranty."
            ],
            closeBtn: "Close",
        },
        noResults: {
            successTitle: "Inquiry Sent Successfully",
            successText: "The DuctedExpert.com team is processing your request with priority.",
            dontWorryTitle: "Looking for a certified HVAC expert in your area?",
            bestExpertsHighlight: "Top HVAC & ducted air conditioning specialists in your region, vetted by DuctedExpert.com,",
            bestExpertsRest: "will contact you promptly.",
            fillFormNote: "Fill out this form to receive free quotes from qualified professionals.",
            requestTypeLabel: "What type of project do you have?",
            hvacOption: "Air Conditioning & Heat Pumps",
            engineeringOption: "HVAC & Thermal Engineering Office",
        },
        internationalLead: {
            getQuoteInCity: (city) => `Get Your Free Quote in ${city}`,
            subtitle: "Enter your project details to be contacted by our qualified HVAC contractors.",
            thankYouTitle: "Thank you for your request!",
            transmittedToExpert: (city, expert) => `Your project for ${city} has been sent directly to ${expert}.`,
            transmittedToLocal: (city) => `Your project for ${city} has been sent to our certified local experts.`,
            contact24h: "A certified HVAC specialist will contact you within 24 business hours.",
            newRequestBtn: "New Request",
        },
        contactPage: {
            heroTitle: "Contact Us",
            heroSubtitle1: "Have a question, project inquiry, or partnership proposal?",
            heroSubtitle2: "Our international team is here to help.",
            successTitle: "Message Sent!",
            successText: "Thank you for contacting us. We will get back to you within 48 hours.",
            sendAnotherBtn: "Send Another Message",
            cardIndividualTitle: "I am a Homeowner / Client",
            cardIndividualDesc: "Have a ducted air conditioning or heat pump project? Ask your questions here.",
            cardProTitle: "I am an HVAC Professional",
            cardProDesc: "HVAC installer or thermal engineering office. Join the DuctedExpert.com network.",
            cardPartnerTitle: "Partnership / Media",
            cardPartnerDesc: "Business proposal, manufacturer partnership, or press inquiry.",
            formBadge: "Contact Form",
            changeBtn: "Change",
            proSectorLabel: "Your Field of Activity *",
            proSectorPlaceholder: "Select your specialty",
            proSectorEngineering: "HVAC & Thermal Engineering Office",
            proSectorInstaller: "HVAC & Heat Pump Installer",
            proSectorArchitect: "Architect / Project Manager",
            proSectorOther: "Other Building Professional",
            civilityLabel: "Title",
            mr: "Mr.",
            mrs: "Ms. / Mrs.",
            postalCodeLabel: "Postal / ZIP Code",
            cityLabel: "City",
            yourMessageLabel: "Your Message *",
            yourMessagePlaceholder: "Describe your inquiry in detail...",
            attachmentLabel: "Attachment (Optional)",
            clickToUpload: "Click to upload a file",
            removeFileBtn: "Remove file",
            sendRequestBtn: "Send My Message",
            responseTime: "Reply within 24–48h",
            supportTitle: "Support",
            viaFormOnly: "Via online form",
            betterTracking: "For fast & dedicated follow-up",
        },
        confirmationPage: {
            title: "Thank You! Your Request Has Been Recorded.",
            subtitle: "Your project file has been sent to the selected HVAC professionals:",
            noPublicPhone: "Direct email contact",
            adviceTitle: "🛡️ Tips before hiring:",
            adviceList: [
                "Verify certifications: Ensure the installer holds valid F-Gas / heat pump certifications.",
                "Liability insurance: Always request up-to-date professional insurance coverage.",
                "Detailed quote: The quote should specify the brand, model, capacity, and included services."
            ],
            backHomeBtn: "Back to Home",
            findAnotherExpertBtn: "Find Another Expert",
        }
    },
    de: {
        cvcForm: {
            yourDetails: "Ihre Kontaktdaten",
            lastNameLabel: "Nachname *",
            lastNamePlaceholder: "Ihr Nachname",
            firstNameLabel: "Vorname *",
            firstNamePlaceholder: "Ihr Vorname",
            phoneLabel: "Telefonnummer *",
            phonePlaceholder: "+49 151 12345678",
            phoneHint: "Erforderlich für eine schnelle Rückmeldung.",
            emailLabel: "E-Mail *",
            emailPlaceholder: "ihre@email.de",
            propertyInfo: "Angaben zur Immobilie",
            propertyTypeLabel: "Gebäudetyp *",
            selectPlaceholder: "Auswählen...",
            surfaceLabel: "Zu klimatisierende Fläche (m²) *",
            surfacePlaceholder: "z. B. 120",
            addressLabel: "Vollständige Adresse des Objekts *",
            addressPlaceholder: "Straße, Postleitzahl, Stadt",
            installationType: "Art der Installation",
            technologiesLabel: "Gewünschte Technologien *",
            detailsAndFiles: "Details & Anhänge",
            projectDescLabel: "Beschreiben Sie Ihr Projekt (Optional)",
            projectDescPlaceholder: "Beschreiben Sie Ihre Wünsche, Raumaufteilung oder Besonderheiten...",
            projectDescHint: "Je genauer Ihre Angaben, desto präziser das Angebot.",
            plansPhotosLabel: "Grundrisse oder Fotos (Optional)",
            uploading: "Wird hochgeladen...",
            clickToAddFiles: "Klicken, um Dateien hinzuzufügen",
            gdprPrefix: "Ich stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu und habe die",
            privacyPolicyLink: "Datenschutzerklärung",
            sending: "Wird gesendet...",
            submitQuoteBtn: "📨 Kostenloses Angebot anfordern",
            submitDisclaimer: "Mit dem Absenden werden Ihre Angaben an die ausgewählten Fachbetriebe übermittelt.",
            errLastName: "Nachname ist erforderlich",
            errFirstName: "Vorname ist erforderlich",
            errPhone: "Gültige Telefonnummer erforderlich",
            errEmail: "Ungültige E-Mail-Adresse",
            errPropertyType: "Gebäudetyp ist erforderlich",
            errSurface: "Fläche ist erforderlich",
            errAddress: "Vollständige Adresse erforderlich",
            errTech: "Bitte wählen Sie mindestens eine Technologie",
            errGdpr: "Bitte akzeptieren Sie die Datenschutzerklärung.",
            cityZipOptionalLabel: "Stadt / Postleitzahl (Optional)",
            cityZipOptionalPlaceholder: "z. B. München, 80331",
            yourRequestTitle: "Ihre Anfrage",
            messageLabel: "Nachricht *",
            messagePlaceholder: "Guten Tag, ich bitte um ein Angebot für...",
            submitSimpleBtn: "📨 Anfrage absenden",
        },
        wizard: {
            requestSentTitle: "Anfrage gesendet!",
            hvacQuoteTitle: "Angebotsanfrage – Klimaanlagen & Wärmepumpen",
            contactProTitle: "Fachbetrieb kontaktieren",
            sentToCount: (count) => `Ihre Anfrage wird an ${count} Fachbetrieb(e) gesendet`,
            selectProSubtitle: "Wählen Sie einen Fachbetrieb",
            maxRecipients: "(Max. 5 Empfänger)",
            thankYouTitle: "Vielen Dank für Ihre Anfrage!",
            thankYouText: "Ihre Projektdaten wurden an die ausgewählten Fachbetriebe übermittelt. Diese melden sich in Kürze telefonisch oder per E-Mail bei Ihnen.",
            safetyTipsTitle: "🛡️ Tipps vor der Auftragsvergabe:",
            safetyTips: [
                "Prüfen Sie Fachzertifizierungen (z. B. Kälteschein / F-Gase) und Betriebshaftpflicht.",
                "Vergleichen Sie nach Möglichkeit mehrere detaillierte Angebote.",
                "Achten Sie auf genaue Angaben zu Marke, Leistung und Garantie."
            ],
            closeBtn: "Schließen",
        },
        noResults: {
            successTitle: "Anfrage erfolgreich gesendet",
            successText: "Das Team von DuctedExpert.com bearbeitet Ihre Anfrage prioritär.",
            dontWorryTitle: "Sie suchen einen Klima-Fachbetrieb in Ihrer Region?",
            bestExpertsHighlight: "Die besten Klima- und Wärmepumpen-Experten Ihrer Region, ausgewählt von DuctedExpert.com,",
            bestExpertsRest: "melden sich zeitnah bei Ihnen.",
            fillFormNote: "Füllen Sie dieses Formular aus, um schnellstmöglich kontaktiert zu werden.",
            requestTypeLabel: "Welche Art von Projekt planen Sie?",
            hvacOption: "Klimaanlagen & Wärmepumpen",
            engineeringOption: "TGA- & Klimatechnik-Ingenieurbüro",
        },
        internationalLead: {
            getQuoteInCity: (city) => `Kostenloses Angebot in ${city} anfordern`,
            subtitle: "Geben Sie Ihre Projektdaten ein, um von qualifizierten Fachbetrieben kontaktiert zu werden.",
            thankYouTitle: "Vielen Dank für Ihre Anfrage!",
            transmittedToExpert: (city, expert) => `Ihre Anfrage für ${city} wurde an ${expert} übermittelt.`,
            transmittedToLocal: (city) => `Ihre Anfrage für ${city} wurde an unsere lokalen Experten übermittelt.`,
            contact24h: "Ein zertifizierter Fachbetrieb meldet sich innerhalb von 24 Werktagsstunden bei Ihnen.",
            newRequestBtn: "Neue Anfrage",
        },
        contactPage: {
            heroTitle: "Kontaktieren Sie uns",
            heroSubtitle1: "Haben Sie eine Frage, wünschen Sie ein Angebot oder eine Partnerschaft?",
            heroSubtitle2: "Unser Team steht Ihnen gerne zur Verfügung.",
            successTitle: "Nachricht gesendet!",
            successText: "Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 48 Stunden bei Ihnen.",
            sendAnotherBtn: "Weitere Nachricht senden",
            cardIndividualTitle: "Privatkunde / Bauherr",
            cardIndividualDesc: "Sie planen eine Kanal-Klimaanlage oder Wärmepumpe? Stellen Sie uns Ihre Fragen.",
            cardProTitle: "Klima-Fachbetrieb / Planer",
            cardProDesc: "TGA-Ingenieurbüro oder Kälte-Klima-Fachbetrieb. Werden Sie Teil von DuctedExpert.com.",
            cardPartnerTitle: "Partnerschaft / Sonstiges",
            cardPartnerDesc: "Kooperationsanfragen, Hersteller-Partnerschaften oder Presse.",
            formBadge: "Kontaktformular",
            changeBtn: "Ändern",
            proSectorLabel: "Ihr Tätigkeitsbereich *",
            proSectorPlaceholder: "Wählen Sie Ihren Bereich",
            proSectorEngineering: "TGA- & Thermik-Ingenieurbüro",
            proSectorInstaller: "Kälte-Klima- & Wärmepumpen-Fachbetrieb",
            proSectorArchitect: "Architekt / Bauleiter",
            proSectorOther: "Sonstiger Bauberuf",
            civilityLabel: "Anrede",
            mr: "Herr",
            mrs: "Frau",
            postalCodeLabel: "Postleitzahl",
            cityLabel: "Stadt",
            yourMessageLabel: "Ihre Nachricht *",
            yourMessagePlaceholder: "Beschreiben Sie Ihr Anliegen...",
            attachmentLabel: "Anhang (Optional)",
            clickToUpload: "Klicken, um eine Datei hochzuladen",
            removeFileBtn: "Datei entfernen",
            sendRequestBtn: "Nachricht senden",
            responseTime: "Antwort innerhalb von 24–48 Std.",
            supportTitle: "Support",
            viaFormOnly: "Über das Online-Formular",
            betterTracking: "Für eine schnelle Bearbeitung",
        },
        confirmationPage: {
            title: "Vielen Dank! Ihre Anfrage wurde gespeichert.",
            subtitle: "Ihre Projektdaten wurden an folgende Fachbetriebe übermittelt:",
            noPublicPhone: "Direktkontakt per E-Mail",
            adviceTitle: "🛡️ Tipps vor der Beauftragung:",
            adviceList: [
                "Zertifizierungen prüfen: Achten Sie auf gültige Kälte-Klima-Zertifikate.",
                "Versicherungsschutz: Fragen Sie nach einer aktuellen Betriebshaftpflicht.",
                "Detailliertes Angebot: Marke, Modell und Leistungen sollten genau aufgeführt sein."
            ],
            backHomeBtn: "Zur Startseite",
            findAnotherExpertBtn: "Weiteren Experten suchen",
        }
    },
    fi: {
        cvcForm: {
            yourDetails: "Yhteystietosi",
            lastNameLabel: "Sukunimi *",
            lastNamePlaceholder: "Sukunimesi",
            firstNameLabel: "Etunimi *",
            firstNamePlaceholder: "Etunimesi",
            phoneLabel: "Puhelinnumero *",
            phonePlaceholder: "+358 40 1234567",
            phoneHint: "Vaaditaan nopeaa yhteydenottoa varten.",
            emailLabel: "Sähköposti *",
            emailPlaceholder: "sinun@sahkoposti.fi",
            propertyInfo: "Kohteen tiedot",
            propertyTypeLabel: "Kiinteistön tyyppi *",
            selectPlaceholder: "Valitse...",
            surfaceLabel: "Pinta-ala (m²) *",
            surfacePlaceholder: "esim. 120",
            addressLabel: "Kohteen tarkka osoite *",
            addressPlaceholder: "Katuosoite, Postinumero, Kaupunki",
            installationType: "Järjestelmän tyyppi",
            technologiesLabel: "Toivotut teknologiat *",
            detailsAndFiles: "Lisätiedot & Liitteet",
            projectDescLabel: "Kuvaile projektiasi (Valinnainen)",
            projectDescPlaceholder: "Kerro tarpeistasi, huoneiden määrästä tai erityistoiveista...",
            projectDescHint: "Mitä tarkempi kuvaus, sitä osuvamman tarjouksen saat.",
            plansPhotosLabel: "Pohjapiirustukset tai valokuvat (Valinnainen)",
            uploading: "Ladataan...",
            clickToAddFiles: "Klikkaa lisätäksesi tiedostoja",
            gdprPrefix: "Hyväksyn tietojeni käsittelyn tarjouspyyntööni vastaamiseksi ja olen lukenut",
            privacyPolicyLink: "tietosuojaselosteen",
            sending: "Lähetetään...",
            submitQuoteBtn: "📨 Lähetä tarjouspyyntö",
            submitDisclaimer: "Lähettämällä lomakkeen hyväksyt tietojesi välittämisen valituille LVI-yrityksille.",
            errLastName: "Sukunimi vaaditaan",
            errFirstName: "Etunimi vaaditaan",
            errPhone: "Kelvollinen puhelinnumero vaaditaan",
            errEmail: "Virheellinen sähköpostiosoite",
            errPropertyType: "Kiinteistön tyyppi vaaditaan",
            errSurface: "Pinta-ala vaaditaan",
            errAddress: "Osoite vaaditaan",
            errTech: "Valitse vähintään yksi teknologia",
            errGdpr: "Sinun on hyväksyttävä tietosuojaseloste.",
            cityZipOptionalLabel: "Kaupunki / Postinumero (Valinnainen)",
            cityZipOptionalPlaceholder: "esim. Helsinki, 00100",
            yourRequestTitle: "Tarjouspyyntösi",
            messageLabel: "Viesti *",
            messagePlaceholder: "Hei, haluaisin tarjouksen...",
            submitSimpleBtn: "📨 Lähetä viesti",
        },
        wizard: {
            requestSentTitle: "Pyyntö lähetetty!",
            hvacQuoteTitle: "Tarjouspyyntö – Ilmastointi & Lämpöpumput",
            contactProTitle: "Ota yhteyttä ammattilaiseen",
            sentToCount: (count) => `Tarjouspyyntösi lähetetään ${count} ammattilaiselle`,
            selectProSubtitle: "Valitse ammattilainen",
            maxRecipients: "(Enint. 5 vastaanottajaa)",
            thankYouTitle: "Kiitos tarjouspyynnöstäsi!",
            thankYouText: "Tietosi on välitetty valituille ammattilaisille. He ottavat sinuun yhteyttä puhelimitse tai sähköpostitse.",
            safetyTipsTitle: "🛡️ Vinkkejä ennen sopimusta:",
            safetyTips: [
                "Varmista asentajan kylmäaineluvat (Tukes) ja vastuuvakuutus.",
                "Vertaile useampaa eriteltyä tarjousta.",
                "Tarkista laitteiden merkki, malli ja takuuehdot tarjouksesta."
            ],
            closeBtn: "Sulje",
        },
        noResults: {
            successTitle: "Tarjouspyyntö lähetetty onnistuneesti",
            successText: "DuctedExpert.com käsittelee pyyntösi ensisijaisena.",
            dontWorryTitle: "Etsitkö LVI- ja ilmastointiasiantuntijaa alueeltasi?",
            bestExpertsHighlight: "Alueesi parhaat DuctedExpert.com-verkoston asiantuntijat",
            bestExpertsRest: "ottavat sinuun pian yhteyttä.",
            fillFormNote: "Täytä tämä lomake saadaksesi maksuttoman tarjouksen.",
            requestTypeLabel: "Mitä tarjouspyyntösi koskee?",
            hvacOption: "Ilmastointi & Lämpöpumput",
            engineeringOption: "LVI- ja Lämpösuunnittelutoimisto",
        },
        internationalLead: {
            getQuoteInCity: (city) => `Pyydä ilmainen tarjous paikkakunnalla ${city}`,
            subtitle: "Täytä projektisi tiedot, niin asiantuntevat asentajamme ottavat yhteyttä.",
            thankYouTitle: "Kiitos tarjouspyynnöstäsi!",
            transmittedToExpert: (city, expert) => `Tarjouspyyntösi (${city}) on lähetetty yritykselle ${expert}.`,
            transmittedToLocal: (city) => `Tarjouspyyntösi (${city}) on välitetty paikallisille asiantuntijoillemme.`,
            contact24h: "Sertifioitu LVI-asentaja ottaa yhteyttä 24 tunnin kuluessa.",
            newRequestBtn: "Uusi tarjouspyyntö",
        },
        contactPage: {
            heroTitle: "Ota yhteyttä",
            heroSubtitle1: "Kysymys, tarjouspyyntö tai yhteistyöehdotus?",
            heroSubtitle2: "Tiimimme auttaa sinua mielellään.",
            successTitle: "Viesti lähetetty!",
            successText: "Kiitos yhteydenotostasi. Palaamme asiaan 48 tunnin kuluessa.",
            sendAnotherBtn: "Lähetä toinen viesti",
            cardIndividualTitle: "Olen Yksityisasiakas",
            cardIndividualDesc: "Suunnitteletko kanavailmastointia tai lämpöpumppua? Kysy meiltä.",
            cardProTitle: "Olen LVI-Ammattilainen",
            cardProDesc: "LVI-suunnittelutoimisto tai asennusliike. Liity DuctedExpert.com-verkostoon.",
            cardPartnerTitle: "Kumppanuus / Muu",
            cardPartnerDesc: "Kaupallinen yhteistyö tai kumppanuusehdotus.",
            formBadge: "Yhteydenottolomake",
            changeBtn: "Vaihda",
            proSectorLabel: "Toimialasi *",
            proSectorPlaceholder: "Valitse toimiala",
            proSectorEngineering: "LVI-suunnittelutoimisto",
            proSectorInstaller: "LVI- ja lämpöpumppuasentaja",
            proSectorArchitect: "Arkkitehti / Projektinjohto",
            proSectorOther: "Muu rakennusalan ammattilainen",
            civilityLabel: "Titteli",
            mr: "Herra",
            mrs: "Rouva / Neiti",
            postalCodeLabel: "Postinumero",
            cityLabel: "Kaupunki",
            yourMessageLabel: "Viestisi *",
            yourMessagePlaceholder: "Kirjoita viestisi tähän...",
            attachmentLabel: "Liitetiedosto (Valinnainen)",
            clickToUpload: "Klikkaa ladataksesi tiedoston",
            removeFileBtn: "Poista tiedosto",
            sendRequestBtn: "Lähetä viesti",
            responseTime: "Vastaus 24–48h kuluessa",
            supportTitle: "Asiakastuki",
            viaFormOnly: "Lomakkeen kautta",
            betterTracking: "Nopeaa käsittelyä varten",
        },
        confirmationPage: {
            title: "Kiitos! Tarjouspyyntösi on tallennettu.",
            subtitle: "Tietosi on välitetty seuraaville LVI-ammattilaisille:",
            noPublicPhone: "Yhteydenotto sähköpostitse",
            adviceTitle: "🛡️ Vinkkejä ennen sopimusta:",
            adviceList: [
                "Tarkista pätevyydet: Varmista yrityksen kylmäaine- ja LVI-luvat.",
                "Vastuuvakuutus: Pyydä voimassa oleva vastuuvakuutustodistus.",
                "Kirjallinen tarjous: Tarjouksessa tulee näkyä laitteen merkki, malli ja asennussisältö."
            ],
            backHomeBtn: "Takaisin etusivulle",
            findAnotherExpertBtn: "Etsi toinen asiantuntija",
        }
    },
    es: {
        cvcForm: {
            yourDetails: "Sus Datos de Contacto",
            lastNameLabel: "Apellidos *",
            lastNamePlaceholder: "Sus apellidos",
            firstNameLabel: "Nombre *",
            firstNamePlaceholder: "Su nombre",
            phoneLabel: "Teléfono *",
            phonePlaceholder: "+34 600 12 34 56",
            phoneHint: "Obligatorio para un contacto rápido.",
            emailLabel: "Email *",
            emailPlaceholder: "su@email.com",
            propertyInfo: "Información del Inmueble",
            propertyTypeLabel: "Tipo de inmueble *",
            selectPlaceholder: "Seleccione...",
            surfaceLabel: "Superficie a climatizar (m²) *",
            surfacePlaceholder: "Ej: 120",
            addressLabel: "Dirección completa del inmueble *",
            addressPlaceholder: "Dirección, Código Postal, Ciudad",
            installationType: "Tipo de Instalación",
            technologiesLabel: "Tecnologías deseadas *",
            detailsAndFiles: "Detalles y Archivos",
            projectDescLabel: "Describa su proyecto (Opcional)",
            projectDescPlaceholder: "Indique sus necesidades, número de estancias, características...",
            projectDescHint: "Cuanto más precisa sea su solicitud, más ajustado será el presupuesto.",
            plansPhotosLabel: "Planos o fotos (Opcional)",
            uploading: "Subiendo archivo...",
            clickToAddFiles: "Haga clic para añadir archivos",
            gdprPrefix: "Acepto que mis datos sean tratados para responder a mi solicitud y he leído la",
            privacyPolicyLink: "política de privacidad",
            sending: "Enviando...",
            submitQuoteBtn: "📨 Enviar mi solicitud de presupuesto",
            submitDisclaimer: "Al enviar este formulario, acepta que sus datos se transmitan a las empresas seleccionadas.",
            errLastName: "El apellido es obligatorio",
            errFirstName: "El nombre es obligatorio",
            errPhone: "Se requiere un número de teléfono válido",
            errEmail: "Email inválido",
            errPropertyType: "El tipo de inmueble es obligatorio",
            errSurface: "La superficie es obligatoria",
            errAddress: "La dirección completa es obligatoria",
            errTech: "Seleccione al menos una tecnología",
            errGdpr: "Debe aceptar la política de privacidad.",
            cityZipOptionalLabel: "Ciudad / Código Postal (Opcional)",
            cityZipOptionalPlaceholder: "Ej: Madrid, 28001",
            yourRequestTitle: "Su Solicitud",
            messageLabel: "Mensaje *",
            messagePlaceholder: "Hola, me gustaría solicitar un presupuesto para...",
            submitSimpleBtn: "📨 Enviar mi solicitud",
        },
        wizard: {
            requestSentTitle: "¡Solicitud enviada!",
            hvacQuoteTitle: "Solicitud de presupuesto – Climatización y Aerotermia",
            contactProTitle: "Contactar con un profesional",
            sentToCount: (count) => `Su solicitud se enviará a ${count} profesional(es)`,
            selectProSubtitle: "Seleccione un profesional",
            maxRecipients: "(Máx. 5 destinatarios)",
            thankYouTitle: "¡Gracias por su solicitud!",
            thankYouText: "Su expediente ha sido transmitido a los profesionales seleccionados. Le contactarán próximamente por teléfono o email.",
            safetyTipsTitle: "🛡️ Consejos antes de contratar:",
            safetyTips: [
                "Verifique el seguro de responsabilidad civil y las certificaciones de gases fluorados.",
                "Compare varias propuestas detalladas si es posible.",
                "Compruebe las marcas, modelos y garantías incluidas en el presupuesto."
            ],
            closeBtn: "Cerrar",
        },
        noResults: {
            successTitle: "Solicitud enviada con éxito",
            successText: "El equipo de DuctedExpert.com tramita su solicitud con prioridad.",
            dontWorryTitle: "¿Busca un experto en climatización en su zona?",
            bestExpertsHighlight: "Los mejores expertos de su región, seleccionados por DuctedExpert.com,",
            bestExpertsRest: "se pondrán en contacto con usted rápidamente.",
            fillFormNote: "Rellene este formulario para recibir presupuestos gratuitos.",
            requestTypeLabel: "¿Cuál es su tipo de solicitud?",
            hvacOption: "Climatización y Aerotermia",
            engineeringOption: "Ingeniería Térmica y Oficina Técnica",
        },
        internationalLead: {
            getQuoteInCity: (city) => `Obtenga su presupuesto en ${city}`,
            subtitle: "Indique los detalles de su proyecto para ser contactado por nuestros instaladores cualificados.",
            thankYouTitle: "¡Gracias por su solicitud!",
            transmittedToExpert: (city, expert) => `Su solicitud para ${city} ha sido transmitida a ${expert}.`,
            transmittedToLocal: (city) => `Su solicitud para ${city} ha sido transmitida a nuestros expertos locales.`,
            contact24h: "Un instalador certificado le contactará en un plazo de 24 horas laborables.",
            newRequestBtn: "Nueva solicitud",
        },
        contactPage: {
            heroTitle: "Contáctenos",
            heroSubtitle1: "¿Tiene una pregunta, un proyecto o una propuesta de colaboración?",
            heroSubtitle2: "Nuestro equipo está a su disposición.",
            successTitle: "¡Mensaje enviado!",
            successText: "Gracias por contactarnos. Le responderemos en un plazo de 48 horas.",
            sendAnotherBtn: "Enviar otro mensaje",
            cardIndividualTitle: "Soy un Particular",
            cardIndividualDesc: "¿Tiene un proyecto de aire acondicionado por conductos o aerotermia? Escríbanos.",
            cardProTitle: "Soy un Profesional",
            cardProDesc: "Ingeniería térmica o empresa instaladora HVAC. Únase a DuctedExpert.com.",
            cardPartnerTitle: "Colaboración / Otro",
            cardPartnerDesc: "Propuesta comercial, fabricantes o prensa.",
            formBadge: "Formulario de contacto",
            changeBtn: "Cambiar",
            proSectorLabel: "Su sector de actividad *",
            proSectorPlaceholder: "Seleccione su especialidad",
            proSectorEngineering: "Ingeniería térmica / Oficina técnica",
            proSectorInstaller: "Instalador de climatización / HVAC",
            proSectorArchitect: "Arquitecto / Director de obra",
            proSectorOther: "Otro profesional de la construcción",
            civilityLabel: "Tratamiento",
            mr: "Sr.",
            mrs: "Sra.",
            postalCodeLabel: "Código Postal",
            cityLabel: "Ciudad",
            yourMessageLabel: "Su Mensaje *",
            yourMessagePlaceholder: "Detalle su consulta aquí...",
            attachmentLabel: "Archivo adjunto (Opcional)",
            clickToUpload: "Haga clic para subir un archivo",
            removeFileBtn: "Eliminar archivo",
            sendRequestBtn: "Enviar mi solicitud",
            responseTime: "Respuesta en 24–48h",
            supportTitle: "Soporte",
            viaFormOnly: "Mediante formulario online",
            betterTracking: "Para asegurar un mejor seguimiento",
        },
        confirmationPage: {
            title: "¡Gracias! Su solicitud ha sido registrada.",
            subtitle: "Su expediente ha sido transmitido a los siguientes profesionales:",
            noPublicPhone: "Contacto directo por email",
            adviceTitle: "🛡️ Consejos antes de contratar:",
            adviceList: [
                "Verifique las cualificaciones: Asegúrese de que el instalador cuenta con las certificaciones oficiales.",
                "Seguro de responsabilidad civil: Solicite un certificado de seguro actualizado.",
                "Presupuesto detallado: El presupuesto debe especificar marca, modelo y prestaciones incluidas."
            ],
            backHomeBtn: "Volver al inicio",
            findAnotherExpertBtn: "Buscar otro experto",
        }
    },
    it: {
        cvcForm: {
            yourDetails: "I Tuoi Dati di Contatto",
            lastNameLabel: "Cognome *",
            lastNamePlaceholder: "Il tuo cognome",
            firstNameLabel: "Nome *",
            firstNamePlaceholder: "Il tuo nome",
            phoneLabel: "Telefono *",
            phonePlaceholder: "+39 333 1234567",
            phoneHint: "Obbligatorio per un contatto rapido.",
            emailLabel: "Email *",
            emailPlaceholder: "tua@email.it",
            propertyInfo: "Informazioni sull'Immobile",
            propertyTypeLabel: "Tipologia di immobile *",
            selectPlaceholder: "Seleziona...",
            surfaceLabel: "Superficie da climatizzare (m²) *",
            surfacePlaceholder: "Es: 120",
            addressLabel: "Indirizzo completo dell'immobile *",
            addressPlaceholder: "Indirizzo, CAP, Città",
            installationType: "Tipo di Impianto",
            technologiesLabel: "Tecnologie richieste *",
            detailsAndFiles: "Dettagli e Allegati",
            projectDescLabel: "Descrivi il tuo progetto (Opzionale)",
            projectDescPlaceholder: "Specifica le tue esigenze, numero di stanze, vincoli...",
            projectDescHint: "Più precisa è la richiesta, più accurato sarà il preventivo.",
            plansPhotosLabel: "Planimetrie o foto (Opzionale)",
            uploading: "Caricamento in corso...",
            clickToAddFiles: "Clicca per aggiungere file",
            gdprPrefix: "Accetto che i miei dati siano trattati per rispondere alla mia richiesta e ho letto la",
            privacyPolicyLink: "privacy policy",
            sending: "Invio in corso...",
            submitQuoteBtn: "📨 Invia la mia richiesta di preventivo",
            submitDisclaimer: "Inviando questo modulo, accetti che le tue informazioni siano trasmesse alle aziende selezionate.",
            errLastName: "Il cognome è obbligatorio",
            errFirstName: "Il nome è obbligatorio",
            errPhone: "Inserisci un numero di telefono valido",
            errEmail: "Email non valida",
            errPropertyType: "La tipologia di immobile è obbligatoria",
            errSurface: "La superficie è obbligatoria",
            errAddress: "L'indirizzo completo è obbligatorio",
            errTech: "Seleziona almeno una tecnologia",
            errGdpr: "Devi accettare la privacy policy.",
            cityZipOptionalLabel: "Città / CAP (Opzionale)",
            cityZipOptionalPlaceholder: "Es: Milano, 20121",
            yourRequestTitle: "La Tua Richiesta",
            messageLabel: "Messaggio *",
            messagePlaceholder: "Buongiorno, vorrei richiedere un preventivo per...",
            submitSimpleBtn: "📨 Invia la mia richiesta",
        },
        wizard: {
            requestSentTitle: "Richiesta inviata!",
            hvacQuoteTitle: "Richiesta di preventivo – Climatizzazione & Pompe di Calore",
            contactProTitle: "Contatta un professionista",
            sentToCount: (count) => `La tua richiesta sarà inviata a ${count} professionista/i`,
            selectProSubtitle: "Seleziona un professionista",
            maxRecipients: "(Max 5 destinatari)",
            thankYouTitle: "Grazie per la tua richiesta!",
            thankYouText: "La tua pratica è stata trasmessa ai professionisti selezionati. Ti contatteranno a breve per telefono o email.",
            safetyTipsTitle: "🛡️ Consigli prima di affidare i lavori:",
            safetyTips: [
                "Verifica l'assicurazione professionale e il patentino F-Gas.",
                "Confronta più proposte dettagliate se possibile.",
                "Controlla marchi, modelli e garanzie indicati nel preventivo."
            ],
            closeBtn: "Chiudi",
        },
        noResults: {
            successTitle: "Richiesta inviata con successo",
            successText: "Il team di DuctedExpert.com gestisce la tua richiesta con priorità.",
            dontWorryTitle: "Cerchi un esperto di climatizzazione nella tua zona?",
            bestExpertsHighlight: "I migliori esperti della tua regione, selezionati da DuctedExpert.com,",
            bestExpertsRest: "ti ricontatteranno rapidamente.",
            fillFormNote: "Compila questo modulo per ricevere preventivi gratuiti.",
            requestTypeLabel: "Qual è il tipo di richiesta?",
            hvacOption: "Climatizzazione & Pompe di Calore",
            engineeringOption: "Studio Termotecnico & Progettazione HVAC",
        },
        internationalLead: {
            getQuoteInCity: (city) => `Ottieni il tuo preventivo a ${city}`,
            subtitle: "Inserisci i dettagli del tuo progetto per essere contattato dai nostri installatori qualificati.",
            thankYouTitle: "Grazie per la tua richiesta!",
            transmittedToExpert: (city, expert) => `La tua richiesta per ${city} è stata trasmessa a ${expert}.`,
            transmittedToLocal: (city) => `La tua richiesta per ${city} è stata trasmessa ai nostri esperti locali.`,
            contact24h: "Un installatore certificato ti contatterà entro 24 ore lavorative.",
            newRequestBtn: "Nuova richiesta",
        },
        contactPage: {
            heroTitle: "Contattaci",
            heroSubtitle1: "Hai una domanda, una richiesta di preventivo o una proposta di partnership?",
            heroSubtitle2: "Il nostro team è a tua disposizione.",
            successTitle: "Messaggio inviato!",
            successText: "Grazie per averci contattato. Ti risponderemo entro 48 ore.",
            sendAnotherBtn: "Invia un altro messaggio",
            cardIndividualTitle: "Sono un Privato",
            cardIndividualDesc: "Hai un progetto di climatizzazione canalizzata o pompa di calore? Scrivici qui.",
            cardProTitle: "Sono un Professionista",
            cardProDesc: "Studio termotecnico o installatore HVAC. Unisciti alla rete DuctedExpert.com.",
            cardPartnerTitle: "Partnership / Altro",
            cardPartnerDesc: "Proposte commerciali, partnership o stampa.",
            formBadge: "Modulo di contatto",
            changeBtn: "Cambia",
            proSectorLabel: "Il tuo settore di attività *",
            proSectorPlaceholder: "Seleziona la tua professione",
            proSectorEngineering: "Studio termotecnico / Progettista HVAC",
            proSectorInstaller: "Installatore climatizzazione / Termoidraulico",
            proSectorArchitect: "Architetto / Direttore lavori",
            proSectorOther: "Altro professionista dell'edilizia",
            civilityLabel: "Titolo",
            mr: "Sig.",
            mrs: "Sig.ra",
            postalCodeLabel: "CAP",
            cityLabel: "Città",
            yourMessageLabel: "Il Tuo Messaggio *",
            yourMessagePlaceholder: "Descrivi la tua richiesta qui...",
            attachmentLabel: "Allegato (Opzionale)",
            clickToUpload: "Clicca per caricare un file",
            removeFileBtn: "Rimuovi file",
            sendRequestBtn: "Invia la mia richiesta",
            responseTime: "Risposta entro 24–48h",
            supportTitle: "Supporto",
            viaFormOnly: "Tramite modulo online",
            betterTracking: "Per garantire una gestione ottimale",
        },
        confirmationPage: {
            title: "Grazie! La tua richiesta è stata registrata.",
            subtitle: "La tua richiesta è stata trasmessa ai seguenti professionisti:",
            noPublicPhone: "Contatto diretto via email",
            adviceTitle: "🛡️ Consigli prima di affidare i lavori:",
            adviceList: [
                "Verifica le qualifiche: Assicurati che l'installatore possieda le certificazioni F-Gas.",
                "Polizza assicurativa: Richiedi sempre una copertura assicurativa professionale valida.",
                "Preventivo dettagliato: Il preventivo deve indicare marca, modello e prestazioni incluse."
            ],
            backHomeBtn: "Torna alla Home",
            findAnotherExpertBtn: "Trova un altro esperto",
        }
    }
};

export function getFormsDictionary(locale?: string | null) {
    if (isValidLocale(locale)) {
        return FORMS_DICTIONARY[locale];
    }
    return FORMS_DICTIONARY[DEFAULT_LOCALE];
}
