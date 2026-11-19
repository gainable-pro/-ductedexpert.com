import { DEFAULT_LOCALE, isValidLocale, Locale } from "./i18n";

export const DASHBOARD_DICTIONARY: Record<Locale, {
    sidebar: {
        proPortal: string;
        manageVisibility: string;
        administration: string;
        myProfile: string;
        leads: string;
        media: string;
        seoArticles: string;
        seoVisibility: string;
        invoices: string;
        logout: string;
        newPost: string;
    };
    pendingAdmin: {
        title: string;
        registeredOn: string;
        approveBtn: string;
    };
    profile: {
        pageTitle: string;
        pageSubtitle: string;
        viewOnlineBtn: string;
        generalInfo: string;
        saveChanges: string;
        savedSuccess: string;
        saveError: string;
        companyName: string;
        companyId: string;
        repLastName: string;
        repFirstName: string;
        emailReadOnly: string;
        phone: string;
        contactPresentation: string;
        address: string;
        postalCode: string;
        city: string;
        description: string;
        website: string;
        seoTitle: string;
        aiBoosterBtn: string;
        seoGeneratedSuccess: string;
        seoHelperText: string;
        metaTitleLabel: string;
        metaTitlePlaceholder: string;
        metaDescLabel: string;
        metaDescPlaceholder: string;
        locationTitle: string;
        differentWorkshopLabel: string;
        workshopAddress: string;
        workshopPostalCode: string;
        workshopCity: string;
        nationalCoverageLabel: string;
        radiusTitle: string;
        radiusSubtitle: string;
        enterCityForMap: string;
        billingCardTitle: string;
        billingCardSubtitle: string;
        goToBillingBtn: string;
    };
    leads: {
        title: string;
        subtitle: string;
        pleaseLogin: string;
        noLeads: string;
        receivedOn: string;
        contactHeading: string;
        projectHeading: string;
        attachmentsHeading: string;
    };
    media: {
        title: string;
        subtitle: string;
        saveAll: string;
        saving: string;
        savedSuccess: string;
        saveError: string;
        logoTitle: string;
        uploadLogo: string;
        noLogo: string;
        videoTitle: string;
        uploadVideo: string;
        noVideo: string;
        deleteVideo: string;
        galleryTitle: string;
        addPhotoBtn: string;
        galleryHelper: string;
        emptyGallery: string;
    };
    articles: {
        title: string;
        subtitle: string;
        monthlyQuota: string;
        unlimited: string;
        writeBtn: string;
        loading: string;
        noArticlesTitle: string;
        noArticlesSubtitle: string;
        createFirstBtn: string;
        statusPublished: string;
        statusPending: string;
        statusRejected: string;
        statusDraft: string;
        shareBtn: string;
        linkCopied: string;
        rejectionReason: string;
        viewBtn: string;
        editBtn: string;
        deleteConfirm: string;
        // New Article Editor
        backToList: string;
        newArticleTitle: string;
        newArticleSubtitle: string;
        aiBoxTitle: string;
        aiBoxSubtitle: string;
        topicLabel: string;
        topicPlaceholder: string;
        generateAiBtn: string;
        generatingBtn: string;
        generalSectionTitle: string;
        articleTitleLabel: string;
        targetCityLabel: string;
        introLabel: string;
        bodySectionTitle: string;
        addSectionBtn: string;
        sectionHeadingLabel: string;
        sectionContentLabel: string;
        faqSectionTitle: string;
        addQuestionBtn: string;
        questionLabel: string;
        answerLabel: string;
        mediaSeoTitle: string;
        coverImageLabel: string;
        videoUrlLabel: string;
        metaDescLabel: string;
        saveDraftBtn: string;
        publishBtn: string;
    };
    seoPage: {
        title: string;
        subtitle: string;
        websiteUrlLabel: string;
        targetCityLabel: string;
        analyzeBtn: string;
        analyzingBtn: string;
        scoreLabel: string;
        clicksLabel: string;
        impressionsLabel: string;
        ctrLabel: string;
        positionLabel: string;
        recommendationsTitle: string;
        viewFixBtn: string;
        markFixedBtn: string;
        fixedBadge: string;
    };
    billing: {
        title: string;
        subtitle: string;
        subscriptionCardTitle: string;
        commitment12Months: string;
        statusActive: string;
        startDateLabel: string;
        anniversaryDateLabel: string;
        cancelScheduledTitle: string;
        cancelScheduledText: string;
        requestCancelBtn: string;
        cancelLockedTitle: string;
        cancelLockedText: string;
        invoiceHistoryTitle: string;
        noInvoices: string;
        dateCol: string;
        amountCol: string;
        actionCol: string;
        // Subscribe View
        billingPortalBadge: string;
        subscribeTitle: string;
        subscribeSubtitle: string;
        paymentSuccessTitle: string;
        paymentSuccessText: string;
        annualToggle: string;
        twoMonthsFree: string;
        monthlyToggle: string;
        selectedBadge: string;
        hvacFormulaBadge: string;
        hvacPlanTitle: string;
        hvacPlanDesc: string;
        hvacFeatures: string[];
        selectedFormulaLabel: string;
        stripeSecureDesc: string;
        payAndSubscribeBtn: string;
        redirectingStripe: string;
    };
}> = {
    en: {
        sidebar: {
            proPortal: "Pro Portal",
            manageVisibility: "Manage your visibility & leads",
            administration: "Administration",
            myProfile: "My Profile",
            leads: "Inquiries / Leads",
            media: "My Media",
            seoArticles: "SEO Articles",
            seoVisibility: "SEO Visibility",
            invoices: "Billing & Invoices",
            logout: "Sign Out",
            newPost: "New Post",
        },
        pendingAdmin: {
            title: "Pending Account Validations",
            registeredOn: "Registered on",
            approveBtn: "Validate & Activate",
        },
        profile: {
            pageTitle: "My Public Profile",
            pageSubtitle: "Manage the information and SEO displayed on your dedicated company page.",
            viewOnlineBtn: "View my live profile",
            generalInfo: "General Information",
            saveChanges: "Save Changes",
            savedSuccess: "Profile updated successfully!",
            saveError: "Error saving profile.",
            companyName: "Company Name",
            companyId: "Registration / Tax ID",
            repLastName: "Representative Last Name",
            repFirstName: "Representative First Name",
            emailReadOnly: "Email (Read-only)",
            phone: "Phone Number",
            contactPresentation: "Contact Details & Description",
            address: "Street Address",
            postalCode: "Postal / ZIP Code",
            city: "City",
            description: "Company Description",
            website: "Website URL",
            seoTitle: "Search Engine Optimization (SEO)",
            aiBoosterBtn: "Orbimatic AI SEO Booster ✨",
            seoGeneratedSuccess: "SEO tags generated with AI!",
            seoHelperText: "These meta tags appear on Google and AI search engines. Customize them or use AI to optimize your ranking.",
            metaTitleLabel: "Meta Title (Max 60 chars)",
            metaTitlePlaceholder: "SEO-optimized title for Google",
            metaDescLabel: "Meta Description (Max 160 chars)",
            metaDescPlaceholder: "Compelling summary that drives clicks from Google search results",
            locationTitle: "Geolocation & Service Area",
            differentWorkshopLabel: "My service branch / operational address is different from my headquarters",
            workshopAddress: "Operational Street Address",
            workshopPostalCode: "Operational Postal Code",
            workshopCity: "Operational City",
            nationalCoverageLabel: "⚡ National / Country-wide coverage (Engineering studies, remote design, etc.)",
            radiusTitle: "Service Radius",
            radiusSubtitle: "How far from your city do you operate?",
            enterCityForMap: "Enter your city to display the interactive service map",
            billingCardTitle: "Billing & Subscription",
            billingCardSubtitle: "Manage your invoices, payment methods, and expert subscription.",
            goToBillingBtn: "Manage Billing",
        },
        leads: {
            title: "My Inquiries (Leads)",
            subtitle: "View all qualified client inquiries received via DuctedExpert.com & partner network.",
            pleaseLogin: "Please sign in to access your leads.",
            noLeads: "No inquiries received yet.",
            receivedOn: "Received on",
            contactHeading: "Client Contact",
            projectHeading: "Project Details",
            attachmentsHeading: "Attachments",
        },
        media: {
            title: "My Media",
            subtitle: "Manage your files (Company Logo, Presentation Video, Photo Gallery) shown on your public profile.",
            saveAll: "Save All Media",
            saving: "Saving...",
            savedSuccess: "Your media files have been saved!",
            saveError: "Error saving media.",
            logoTitle: "Company Logo",
            uploadLogo: "Upload my logo",
            noLogo: "No logo uploaded",
            videoTitle: "Presentation Video",
            uploadVideo: "Upload a video",
            noVideo: "No video uploaded",
            deleteVideo: "Remove video",
            galleryTitle: "Project Photo Gallery",
            addPhotoBtn: "+ Add Photo",
            galleryHelper: "Upload photos of your ducted air conditioning installations, heat pumps, and projects to build client trust.",
            emptyGallery: "Your photo gallery is empty. Add project photos to showcase your expertise.",
        },
        articles: {
            title: "SEO Articles",
            subtitle: "Boost your local & international Google visibility by publishing expert HVAC articles.",
            monthlyQuota: "Monthly quota (published)",
            unlimited: "Unlimited",
            writeBtn: "Write Article",
            loading: "Loading articles...",
            noArticlesTitle: "No SEO articles published yet",
            noArticlesSubtitle: "Start publishing expert articles to rank on local & international HVAC keywords.",
            createFirstBtn: "Create my first SEO article",
            statusPublished: "Published",
            statusPending: "Pending Review",
            statusRejected: "Rejected",
            statusDraft: "Draft",
            shareBtn: "Share",
            linkCopied: "Article link copied to clipboard!",
            rejectionReason: "Reason",
            viewBtn: "View Live",
            editBtn: "Edit",
            deleteConfirm: "Are you sure you want to delete this article?",
            backToList: "Back to articles",
            newArticleTitle: "Write a New SEO Article",
            newArticleSubtitle: "Create or AI-generate high-ranking technical HVAC content tailored to your target city.",
            aiBoxTitle: "AI SEO Assistant: Full Article Generation",
            aiBoxSubtitle: "Enter a topic and target city (e.g., 'Ducted air conditioning installation in London') and let our AI write a complete SEO-optimized article.",
            topicLabel: "Article Topic & Target City",
            topicPlaceholder: "e.g., Concealed ducted air conditioning and heat pump installation in London",
            generateAiBtn: "Generate with AI ✨",
            generatingBtn: "Generating SEO article...",
            generalSectionTitle: "1. Main SEO Information",
            articleTitleLabel: "Article Title (H1)",
            targetCityLabel: "Target City (Local SEO)",
            introLabel: "Introduction",
            bodySectionTitle: "2. Article Sections (H2 & Content)",
            addSectionBtn: "+ Add Section",
            sectionHeadingLabel: "Section Heading (H2)",
            sectionContentLabel: "Section Content",
            faqSectionTitle: "3. Structured FAQ (Rich Snippets & AI Search)",
            addQuestionBtn: "+ Add FAQ Question",
            questionLabel: "Question",
            answerLabel: "Expert Answer",
            mediaSeoTitle: "4. Cover Image & Google Meta Tags",
            coverImageLabel: "Cover Image",
            videoUrlLabel: "YouTube or Video URL (Optional)",
            metaDescLabel: "Google Meta Description (Max 160 chars)",
            saveDraftBtn: "Save as Draft",
            publishBtn: "Publish SEO Article",
        },
        seoPage: {
            title: "SEO Visibility & Live Technical Audit",
            subtitle: "Monitor your search visibility, analyze your website's technical SEO, and boost your rankings on Google & AI search engines.",
            websiteUrlLabel: "Your Company Website URL",
            targetCityLabel: "Primary Target City",
            analyzeBtn: "Run Live SEO Audit",
            analyzingBtn: "Auditing...",
            scoreLabel: "Technical SEO Score",
            clicksLabel: "Estimated Clicks",
            impressionsLabel: "Search Impressions",
            ctrLabel: "Average CTR",
            positionLabel: "Avg. Local Position",
            recommendationsTitle: "Priority Technical & SEO Recommendations",
            viewFixBtn: "View Fix",
            markFixedBtn: "Mark as Fixed",
            fixedBadge: "Fixed",
        },
        billing: {
            title: "Invoices & Subscription",
            subtitle: "Manage your DuctedExpert.com subscription and download your invoices.",
            subscriptionCardTitle: "My Expert Subscription",
            commitment12Months: "12-month commitment",
            statusActive: "Active",
            startDateLabel: "Start Date",
            anniversaryDateLabel: "Renewal / Anniversary Date",
            cancelScheduledTitle: "Cancellation scheduled.",
            cancelScheduledText: "Your subscription will end on",
            requestCancelBtn: "Cancel Subscription",
            cancelLockedTitle: "Option locked (12-month commitment)",
            cancelLockedText: "Cancellation can be requested starting 1 month before your anniversary date:",
            invoiceHistoryTitle: "Invoice History",
            noInvoices: "No invoices available yet.",
            dateCol: "Date",
            amountCol: "Amount",
            actionCol: "Invoice PDF",
            billingPortalBadge: "Billing & Account Activation",
            subscribeTitle: "Activate Your Expert Subscription",
            subscribeSubtitle: "Activate your professional profile on DuctedExpert.com to receive direct qualified leads and unlock all SEO tools.",
            paymentSuccessTitle: "Payment confirmed!",
            paymentSuccessText: "Your subscription is now active. Your invoice is available below.",
            annualToggle: "Annual (12-month plan)",
            twoMonthsFree: "Privilege Discount",
            monthlyToggle: "Monthly",
            selectedBadge: "Selected",
            hvacFormulaBadge: "Ducted HVAC & Air Conditioning Plan",
            hvacPlanTitle: "Pro HVAC & Heat Pump Expert",
            hvacPlanDesc: "For ducted air conditioning, heat pump, and VRV/VRF contractors.",
            hvacFeatures: [
                "Priority listing in the International HVAC Directory & Map",
                "Direct client quote requests with 0% commission",
                "SEO-optimized company profile & Verified Expert badge",
                "AI SEO Article generator & Live Technical SEO Audit tools"
            ],
            selectedFormulaLabel: "Selected Plan",
            stripeSecureDesc: "Secure payment powered by Stripe. Instant downloadable PDF invoice.",
            payAndSubscribeBtn: "Pay & Activate Subscription",
            redirectingStripe: "Redirecting to Stripe...",
        }
    },
    de: {
        sidebar: {
            proPortal: "Profi-Bereich",
            manageVisibility: "Sichtbarkeit & Leads verwalten",
            administration: "Administration",
            myProfile: "Mein Profil",
            leads: "Anfragen / Leads",
            media: "Meine Medien",
            seoArticles: "SEO-Artikel",
            seoVisibility: "SEO-Sichtbarkeit",
            invoices: "Rechnungen & Abo",
            logout: "Abmelden",
            newPost: "Neuer Beitrag",
        },
        pendingAdmin: {
            title: "Ausstehende Kontoprüfungen",
            registeredOn: "Registriert am",
            approveBtn: "Prüfen & Aktivieren",
        },
        profile: {
            pageTitle: "Mein Öffentliches Profil",
            pageSubtitle: "Verwalten Sie Ihre Unternehmensdaten und SEO-Einstellungen für Ihre Profilseite.",
            viewOnlineBtn: "Öffentliches Profil ansehen",
            generalInfo: "Allgemeine Informationen",
            saveChanges: "Änderungen speichern",
            savedSuccess: "Profil erfolgreich aktualisiert!",
            saveError: "Fehler beim Speichern.",
            companyName: "Firmenname",
            companyId: "Handelsregister- / Steuernummer",
            repLastName: "Nachname des Ansprechpartners",
            repFirstName: "Vorname des Ansprechpartners",
            emailReadOnly: "E-Mail (Schreibgeschützt)",
            phone: "Telefonnummer",
            contactPresentation: "Kontaktdaten & Beschreibung",
            address: "Straße und Hausnummer",
            postalCode: "Postleitzahl",
            city: "Stadt",
            description: "Unternehmensbeschreibung",
            website: "Webseite",
            seoTitle: "Suchmaschinenoptimierung (SEO)",
            aiBoosterBtn: "Orbimatic KI-SEO-Booster ✨",
            seoGeneratedSuccess: "SEO-Tags erfolgreich mit KI generiert!",
            seoHelperText: "Diese Meta-Daten erscheinen bei Google. Passen Sie sie an oder nutzen Sie die KI zur Optimierung.",
            metaTitleLabel: "Meta-Titel (Max. 60 Zeichen)",
            metaTitlePlaceholder: "Für Google optimierter Titel",
            metaDescLabel: "Meta-Beschreibung (Max. 160 Zeichen)",
            metaDescPlaceholder: "Kurze, klickstarke Beschreibung für Google",
            locationTitle: "Standort & Einsatzgebiet",
            differentWorkshopLabel: "Mein Einsatzstandort / Niederlassung weicht vom Firmensitz ab",
            workshopAddress: "Adresse des Einsatzstandorts",
            workshopPostalCode: "PLZ (Standort)",
            workshopCity: "Stadt (Standort)",
            nationalCoverageLabel: "⚡ Landesweite Abdeckung (TGA-Fachplanung, Berechnungen usw.)",
            radiusTitle: "Einsatzradius",
            radiusSubtitle: "Bis zu welcher Entfernung sind Sie tätig?",
            enterCityForMap: "Geben Sie Ihre Stadt ein, um die Karte anzuzeigen",
            billingCardTitle: "Abrechnung & Abonnement",
            billingCardSubtitle: "Verwalten Sie Ihre Rechnungen, Zahlungsmittel und Ihr Abonnement.",
            goToBillingBtn: "Zur Abrechnung",
        },
        leads: {
            title: "Meine Kundenanfragen (Leads)",
            subtitle: "Hier finden Sie alle Angebotsanfragen über DuctedExpert.com.",
            pleaseLogin: "Bitte melden Sie sich an.",
            noLeads: "Noch keine Anfragen erhalten.",
            receivedOn: "Erhalten am",
            contactHeading: "Kundenkontakt",
            projectHeading: "Projektdetails",
            attachmentsHeading: "Anhänge",
        },
        media: {
            title: "Meine Medien",
            subtitle: "Verwalten Sie Logo, Vorstellungsvideo und Fotogalerie Ihres Profils.",
            saveAll: "Alle Medien speichern",
            saving: "Speichern...",
            savedSuccess: "Ihre Medien wurden gespeichert!",
            saveError: "Fehler beim Speichern.",
            logoTitle: "Firmenlogo",
            uploadLogo: "Logo hochladen",
            noLogo: "Kein Logo vorhanden",
            videoTitle: "Vorstellungsvideo",
            uploadVideo: "Video hochladen",
            noVideo: "Kein Video vorhanden",
            deleteVideo: "Video löschen",
            galleryTitle: "Referenz-Fotogalerie",
            addPhotoBtn: "+ Foto hinzufügen",
            galleryHelper: "Fügen Sie Fotos Ihrer Klima- und Wärmepumpen-Installationen hinzu.",
            emptyGallery: "Ihre Galerie ist leer. Laden Sie Referenzfotos hoch.",
        },
        articles: {
            title: "SEO-Artikel",
            subtitle: "Steigern Sie Ihre Sichtbarkeit bei Google durch Fachartikel über Klimatechnik & Wärmepumpen.",
            monthlyQuota: "Monatliches Kontingent",
            unlimited: "Unbegrenzt",
            writeBtn: "Artikel verfassen",
            loading: "Laden...",
            noArticlesTitle: "Noch keine SEO-Artikel vorhanden",
            noArticlesSubtitle: "Veröffentlichen Sie Fachartikel, um Ihr lokales SEO zu stärken.",
            createFirstBtn: "Ersten SEO-Artikel erstellen",
            statusPublished: "Veröffentlicht",
            statusPending: "In Prüfung",
            statusRejected: "Abgelehnt",
            statusDraft: "Entwurf",
            shareBtn: "Teilen",
            linkCopied: "Artikellink kopiert!",
            rejectionReason: "Grund",
            viewBtn: "Ansehen",
            editBtn: "Bearbeiten",
            deleteConfirm: "Diesen Artikel wirklich löschen?",
            backToList: "Zurück zur Übersicht",
            newArticleTitle: "Neuen SEO-Artikel erstellen",
            newArticleSubtitle: "Erstellen oder generieren Sie SEO-optimierte Fachartikel mit KI.",
            aiBoxTitle: "KI-SEO-Assistent: Vollständige Artikelerstellung",
            aiBoxSubtitle: "Geben Sie ein Thema und Ihre Zielstadt ein (z. B. 'Kanal-Klimaanlage Installation in München') und lassen Sie die KI den Artikel verfassen.",
            topicLabel: "Thema & Zielstadt",
            topicPlaceholder: "z. B. Installation einer Kanal-Klimaanlage und Wärmepumpe in München",
            generateAiBtn: "Mit KI generieren ✨",
            generatingBtn: "SEO-Artikel wird generiert...",
            generalSectionTitle: "1. Hauptinformationen & SEO",
            articleTitleLabel: "Artikeltitel (H1)",
            targetCityLabel: "Zielstadt (Lokales SEO)",
            introLabel: "Einleitung",
            bodySectionTitle: "2. Artikelabschnitte (H2 & Inhalt)",
            addSectionBtn: "+ Abschnitt hinzufügen",
            sectionHeadingLabel: "Zwischenüberschrift (H2)",
            sectionContentLabel: "Abschnittsinhalt",
            faqSectionTitle: "3. Strukturierte FAQ (Google Rich Snippets)",
            addQuestionBtn: "+ FAQ-Frage hinzufügen",
            questionLabel: "Frage",
            answerLabel: "Antwort",
            mediaSeoTitle: "4. Titelbild & Meta-Tags",
            coverImageLabel: "Titelbild",
            videoUrlLabel: "YouTube- / Video-URL (Optional)",
            metaDescLabel: "Google Meta-Beschreibung (Max. 160 Zeichen)",
            saveDraftBtn: "Als Entwurf speichern",
            publishBtn: "SEO-Artikel veröffentlichen",
        },
        seoPage: {
            title: "SEO-Sichtbarkeit &Technisches Live-Audit",
            subtitle: "Analysieren Sie das SEO Ihrer Webseite und optimieren Sie Ihre Google-Platzierung.",
            websiteUrlLabel: "Webseite Ihres Unternehmens",
            targetCityLabel: "Zielstadt",
            analyzeBtn: "SEO-Audit starten",
            analyzingBtn: "Analyse läuft...",
            scoreLabel: "Technischer SEO-Score",
            clicksLabel: "Geschätzte Klicks",
            impressionsLabel: "Impressionen",
            ctrLabel: "Durchschn. CTR",
            positionLabel: "Durchschn. Position",
            recommendationsTitle: "Priorisierte SEO-Empfehlungen",
            viewFixBtn: "Lösung ansehen",
            markFixedBtn: "Als erledigt markieren",
            fixedBadge: "Erledigt",
        },
        billing: {
            title: "Rechnungen & Abonnement",
            subtitle: "Verwalten Sie Ihr DuctedExpert.com-Abonnement und Ihre Rechnungen.",
            subscriptionCardTitle: "Mein Experten-Abonnement",
            commitment12Months: "12 Monate Laufzeit",
            statusActive: "Aktiv",
            startDateLabel: "Vertragsbeginn",
            anniversaryDateLabel: "Verlängerungsdatum",
            cancelScheduledTitle: "Kündigung vorgemerkt.",
            cancelScheduledText: "Ihr Abonnement endet am",
            requestCancelBtn: "Abonnement kündigen",
            cancelLockedTitle: "Option gesperrt (12 Monate Laufzeit)",
            cancelLockedText: "Die Kündigung ist ab 1 Monat vor dem Verlängerungsdatum möglich:",
            invoiceHistoryTitle: "Rechnungshistorie",
            noInvoices: "Noch keine Rechnungen vorhanden.",
            dateCol: "Datum",
            amountCol: "Betrag",
            actionCol: "PDF",
            billingPortalBadge: "Abrechnung & Aktivierung",
            subscribeTitle: "Experten-Abonnement aktivieren",
            subscribeSubtitle: "Aktivieren Sie Ihr Profil auf DuctedExpert.com für direkte Kundenanfragen und alle SEO-Tools.",
            paymentSuccessTitle: "Zahlung erfolgreich bestätigt!",
            paymentSuccessText: "Ihr Abonnement ist jetzt aktiv.",
            annualToggle: "Jährlich (12 Monate)",
            twoMonthsFree: "Vorzugspreis",
            monthlyToggle: "Monatlich",
            selectedBadge: "Ausgewählt",
            hvacFormulaBadge: "Klima- & Wärmepumpen-Paket",
            hvacPlanTitle: "Profi Klima- & Wärmepumpen-Fachbetrieb",
            hvacPlanDesc: "Für Installateure von Kanal-Klimaanlagen, Wärmepumpen und VRV/VRF.",
            hvacFeatures: [
                "Priorisierte Platzierung im Verzeichnis & auf der Karte",
                "Direkte Kundenanfragen mit 0 % Provision",
                "SEO-optimiertes Firmenprofil & Geprüfter-Experte-Badge",
                "KI-SEO-Artikelgenerator & Technisches SEO-Audit inklusive"
            ],
            selectedFormulaLabel: "Gewähltes Paket",
            stripeSecureDesc: "Sichere Zahlung über Stripe. Sofortiger PDF-Rechnungsdownload.",
            payAndSubscribeBtn: "Bezahlen & Abonnement aktivieren",
            redirectingStripe: "Weiterleitung zu Stripe...",
        }
    },
    fi: {
        sidebar: {
            proPortal: "Ammattilaisportaali",
            manageVisibility: "Hallitse näkyvyyttä & liidejä",
            administration: "Ylläpito",
            myProfile: "Oma Profiili",
            leads: "Tarjouspyynnöt / Liidit",
            media: "Mediatiedostot",
            seoArticles: "SEO-Artikkelit",
            seoVisibility: "SEO-Näkyvyys",
            invoices: "Laskut & Tilaus",
            logout: "Kirjaudu ulos",
            newPost: "Uusi artikkeli",
        },
        pendingAdmin: {
            title: "Odottavat tilien vahvistukset",
            registeredOn: "Rekisteröitynyt",
            approveBtn: "Vahvista & Aktivoi",
        },
        profile: {
            pageTitle: "Julkinen Yritysprofiili",
            pageSubtitle: "Hallitse yrityssivullasi näkyviä tietoja ja hakukoneoptimointia (SEO).",
            viewOnlineBtn: "Katso julkinen profiili",
            generalInfo: "Yleiset tiedot",
            saveChanges: "Tallenna muutokset",
            savedSuccess: "Profiili päivitetty onnistuneesti!",
            saveError: "Virhe tallennuksessa.",
            companyName: "Yrityksen nimi",
            companyId: "Y-tunnus / Yritystunnus",
            repLastName: "Edustajan sukunimi",
            repFirstName: "Edustajan etunimi",
            emailReadOnly: "Sähköposti (Ei muokattavissa)",
            phone: "Puhelinnumero",
            contactPresentation: "Yhteystiedot & Esittely",
            address: "Katuosoite",
            postalCode: "Postinumero",
            city: "Kaupunki",
            description: "Yrityksen esittely",
            website: "Verkkosivusto",
            seoTitle: "Hakukoneoptimointi (SEO)",
            aiBoosterBtn: "Orbimatic AI SEO Booster ✨",
            seoGeneratedSuccess: "SEO-tiedot luotu tekoälyllä!",
            seoHelperText: "Nämä metatiedot näkyvät Googlessa. Voit muokata niitä itse tai optimoida ne tekoälyllä.",
            metaTitleLabel: "Meta-otsikko (Enint. 60 merkkiä)",
            metaTitlePlaceholder: "Googlelle optimoitu otsikko",
            metaDescLabel: "Meta-kuvaus (Enint. 160 merkkiä)",
            metaDescPlaceholder: "Houkutteleva kuvaus hakutuloksiin",
            locationTitle: "Sijainti & Toiminta-alue",
            differentWorkshopLabel: "Toimipisteeni / asennusvarikkoni osoite poikkeaa virallisesta osoitteesta",
            workshopAddress: "Toimipisteen osoite",
            workshopPostalCode: "Postinumero (Toimipiste)",
            workshopCity: "Kaupunki (Toimipiste)",
            nationalCoverageLabel: "⚡ Valtakunnallinen palvelu (LVI-suunnittelu, laskelmat jne.)",
            radiusTitle: "Toimintasäde",
            radiusSubtitle: "Kuinka laajalla alueella palvelet?",
            enterCityForMap: "Syötä kaupunki nähdäksesi kartan",
            billingCardTitle: "Laskutus & Tilaus",
            billingCardSubtitle: "Hallitse laskuja, maksutapoja ja tilaustasi.",
            goToBillingBtn: "Siirry laskutukseen",
        },
        leads: {
            title: "Saapuneet Tarjouspyynnöt (Liidit)",
            subtitle: "Kaikki DuctedExpert.com-palvelun kautta saapuneet asiakasyhteydenotot.",
            pleaseLogin: "Kirjaudu sisään nähdäksesi tarjouspyynnöt.",
            noLeads: "Ei saapuneita tarjouspyyntöjä.",
            receivedOn: "Saapunut",
            contactHeading: "Asiakkaan tiedot",
            projectHeading: "Projektin tiedot",
            attachmentsHeading: "Liitteet",
        },
        media: {
            title: "Mediatiedostot",
            subtitle: "Hallitse profiilissasi näkyvää logoa, esittelyvideota ja kuvagalleriaa.",
            saveAll: "Tallenna kaikki",
            saving: "Tallennetaan...",
            savedSuccess: "Mediatiedostot tallennettu!",
            saveError: "Virhe tallennuksessa.",
            logoTitle: "Yrityksen logo",
            uploadLogo: "Lataa logo",
            noLogo: "Ei logoa",
            videoTitle: "Esittelyvideo",
            uploadVideo: "Lataa video",
            noVideo: "Ei videota",
            deleteVideo: "Poista video",
            galleryTitle: "Työnäytteet & Kuvagalleria",
            addPhotoBtn: "+ Lisää kuva",
            galleryHelper: "Lisää kuvia toteutetuista kanavailmastointi- ja lämpöpumppukohteista.",
            emptyGallery: "Kuvagalleria on tyhjä. Lisää kuvia referensseistäsi.",
        },
        articles: {
            title: "SEO-Artikkelit",
            subtitle: "Paranna Google-näkyvyyttäsi julkaisemalla asiantuntija-artikkeleita.",
            monthlyQuota: "Kuukausikiintiö",
            unlimited: "Rajaton",
            writeBtn: "Kirjoita artikkeli",
            loading: "Ladataan...",
            noArticlesTitle: "Ei julkaistuja artikkeleita",
            noArticlesSubtitle: "Aloita kirjoittaminen parantaaksesi paikallista hakukonenäkyvyyttä.",
            createFirstBtn: "Luo ensimmäinen SEO-artikkeli",
            statusPublished: "Julkaistu",
            statusPending: "Odottaa",
            statusRejected: "Hylätty",
            statusDraft: "Luonnos",
            shareBtn: "Jaa",
            linkCopied: "Artikkelin linkki kopioitu!",
            rejectionReason: "Syy",
            viewBtn: "Katso",
            editBtn: "Muokkaa",
            deleteConfirm: "Poistetaanko tämä artikkeli?",
            backToList: "Takaisin listaan",
            newArticleTitle: "Kirjoita uusi SEO-artikkeli",
            newArticleSubtitle: "Kirjoita tai luo tekoälyllä hakukoneoptimoitu LVI-asiantuntija-artikkeli.",
            aiBoxTitle: "Tekoälyavustaja: Koko artikkelin luonti",
            aiBoxSubtitle: "Syötä aihe ja kohdekaupunki (esim. 'Kanavailmastoinnin ja lämpöpumpun asennus Helsinki') ja anna tekoälyn luoda artikkeli.",
            topicLabel: "Artikkelin aihe & Kohdekaupunki",
            topicPlaceholder: "esim. Kanavailmastoinnin ja ilmalämpöpumpun asennus Helsinki",
            generateAiBtn: "Luo tekoälyllä ✨",
            generatingBtn: "Luodaan SEO-artikkelia...",
            generalSectionTitle: "1. Perustiedot & SEO",
            articleTitleLabel: "Artikkelin otsikko (H1)",
            targetCityLabel: "Kohdekaupunki (Paikallinen SEO)",
            introLabel: "Johdanto",
            bodySectionTitle: "2. Artikkelin osiot (H2 & Sisältö)",
            addSectionBtn: "+ Lisää osio",
            sectionHeadingLabel: "Alaotsikko (H2)",
            sectionContentLabel: "Osion sisältö",
            faqSectionTitle: "3. Usein Kysytyt Kysymykset (FAQ Schema)",
            addQuestionBtn: "+ Lisää kysymys",
            questionLabel: "Kysymys",
            answerLabel: "Asiantuntijan vastaus",
            mediaSeoTitle: "4. Kansikuva & Google Meta-kuvaus",
            coverImageLabel: "Kansikuva",
            videoUrlLabel: "YouTube- tai videolinkki (Valinnainen)",
            metaDescLabel: "Google Meta-kuvaus (Enint. 160 merkkiä)",
            saveDraftBtn: "Tallenna luonnoksena",
            publishBtn: "Julkaise SEO-artikkeli",
        },
        seoPage: {
            title: "SEO-Näkyvyys & Tekninen Auditointi",
            subtitle: "Seuraa hakukonenäkyvyyttäsi ja analysoi verkkosivustosi tekninen SEO.",
            websiteUrlLabel: "Yrityksesi verkkosivusto",
            targetCityLabel: "Kohdekaupunki",
            analyzeBtn: "Käynnistä SEO-auditointi",
            analyzingBtn: "Analysoidaan...",
            scoreLabel: "Tekninen SEO-pistemäärä",
            clicksLabel: "Arvioidut klikkaukset",
            impressionsLabel: "Näyttökerrat",
            ctrLabel: "Keskim. CTR",
            positionLabel: "Keskim. sijoitus",
            recommendationsTitle: "Tärkeimmät SEO-toimenpidesuositukset",
            viewFixBtn: "Katso korjausohje",
            markFixedBtn: "Merkitse korjatuksi",
            fixedBadge: "Korjattu",
        },
        billing: {
            title: "Laskut & Tilaus",
            subtitle: "Hallitse DuctedExpert.com-tilaustasi ja lataa kuittisi.",
            subscriptionCardTitle: "Asiantuntijatilaukseni",
            commitment12Months: "12 kk sopimuskausi",
            statusActive: "Aktiivinen",
            startDateLabel: "Aloituspäivä",
            anniversaryDateLabel: "Uusimispäivä",
            cancelScheduledTitle: "Peruutus ajastettu.",
            cancelScheduledText: "Tilauksesi päättyy",
            requestCancelBtn: "Peruuta tilaus",
            cancelLockedTitle: "Lukittu (12 kk sopimuskausi)",
            cancelLockedText: "Irtisanominen on mahdollista 1 kk ennen sopimuskauden päättymistä:",
            invoiceHistoryTitle: "Laskuhistoria",
            noInvoices: "Ei laskuja saatavilla.",
            dateCol: "Päivämäärä",
            amountCol: "Summa",
            actionCol: "PDF",
            billingPortalBadge: "Laskutus & Tilin Aktivointi",
            subscribeTitle: "Aktivoi Asiantuntijatilauksesi",
            subscribeSubtitle: "Aktivoi yritysprofiilisi vastaanottaaksesi suoria tarjouspyyntöjä ja käyttääksesi SEO-työkaluja.",
            paymentSuccessTitle: "Maksu vahvistettu!",
            paymentSuccessText: "Tilauksesi on nyt aktiivinen.",
            annualToggle: "Vuositilaus (12 kk)",
            twoMonthsFree: "Etuhinta",
            monthlyToggle: "Kuukausitilaus",
            selectedBadge: "Valittu",
            hvacFormulaBadge: "LVI- & Ilmastointipaketti",
            hvacPlanTitle: "Pro LVI- & Lämpöpumppuasiantuntija",
            hvacPlanDesc: "Kanavailmastoinnin, lämpöpumppujen ja VRV/VRF-järjestelmien asentajille.",
            hvacFeatures: [
                "Ensisijainen näkyvyys LVI-hakemistossa ja kartalla",
                "Suorat tarjouspyynnöt 0 % provisiolla",
                "SEO-optimoitu yritysprofiili ja Varmennettu Asiantuntija -merkki",
                "Tekoälypohjainen SEO-artikkelityökalu ja tekninen SEO-auditointi"
            ],
            selectedFormulaLabel: "Valittu paketti",
            stripeSecureDesc: "Turvallinen Stripe-maksu. PDF-kuitti ladattavissa heti.",
            payAndSubscribeBtn: "Maksa & Aktivoi tilaus",
            redirectingStripe: "Siirrytään Stripeen...",
        }
    },
    es: {
        sidebar: {
            proPortal: "Área Pro",
            manageVisibility: "Gestione su visibilidad y leads",
            administration: "Administración",
            myProfile: "Mi Perfil",
            leads: "Solicitudes / Leads",
            media: "Mis Medios",
            seoArticles: "Artículos SEO",
            seoVisibility: "Visibilidad SEO",
            invoices: "Facturas y Suscripción",
            logout: "Cerrar sesión",
            newPost: "Nuevo Artículo",
        },
        pendingAdmin: {
            title: "Validaciones de cuenta pendientes",
            registeredOn: "Registrado el",
            approveBtn: "Validar y Activar",
        },
        profile: {
            pageTitle: "Mi Perfil Público",
            pageSubtitle: "Gestione la información y el SEO que aparecen en su ficha de empresa.",
            viewOnlineBtn: "Ver mi ficha pública",
            generalInfo: "Información General",
            saveChanges: "Guardar cambios",
            savedSuccess: "¡Perfil actualizado con éxito!",
            saveError: "Error al guardar.",
            companyName: "Nombre de la empresa",
            companyId: "CIF / NIF / ID de Empresa",
            repLastName: "Apellidos del representante",
            repFirstName: "Nombre del representante",
            emailReadOnly: "Email (No modificable)",
            phone: "Teléfono",
            contactPresentation: "Datos de Contacto y Presentación",
            address: "Dirección",
            postalCode: "Código Postal",
            city: "Ciudad",
            description: "Descripción de la empresa",
            website: "Sitio Web",
            seoTitle: "Posicionamiento Web (SEO)",
            aiBoosterBtn: "Orbimatic AI SEO Booster ✨",
            seoGeneratedSuccess: "¡SEO generado con IA!",
            seoHelperText: "Estos elementos aparecen en Google. Puede personalizarlos o usar la IA para optimizarlos.",
            metaTitleLabel: "Título Meta (Máx. 60 caracteres)",
            metaTitlePlaceholder: "Título optimizado para Google",
            metaDescLabel: "Descripción Meta (Máx. 160 caracteres)",
            metaDescPlaceholder: "Descripción atractiva para mejorar los clics en Google",
            locationTitle: "Geolocalización y Zona de Intervención",
            differentWorkshopLabel: "Mi delegación / taller de intervención es diferente de mi domicilio social",
            workshopAddress: "Dirección de la delegación",
            workshopPostalCode: "Código Postal (Delegación)",
            workshopCity: "Ciudad (Delegación)",
            nationalCoverageLabel: "⚡ Cobertura nacional (Ingeniería térmica, estudios sobre planos, etc.)",
            radiusTitle: "Radio de intervención",
            radiusSubtitle: "¿Hasta qué distancia realiza instalaciones?",
            enterCityForMap: "Indique su ciudad para mostrar el mapa",
            billingCardTitle: "Facturación y Suscripción",
            billingCardSubtitle: "Gestione sus facturas, métodos de pago y suscripción.",
            goToBillingBtn: "Ir a Facturación",
        },
        leads: {
            title: "Mis Solicitudes de Presupuesto (Leads)",
            subtitle: "Encuentre aquí todas las solicitudes recibidas en DuctedExpert.com.",
            pleaseLogin: "Por favor, inicie sesión.",
            noLeads: "Aún no ha recibido ninguna solicitud.",
            receivedOn: "Recibido el",
            contactHeading: "Contacto del Cliente",
            projectHeading: "Detalles del Proyecto",
            attachmentsHeading: "Archivos Adjuntos",
        },
        media: {
            title: "Mis Medios",
            subtitle: "Gestione su logotipo, vídeo de presentación y galería de fotos.",
            saveAll: "Guardar todo",
            saving: "Guardando...",
            savedSuccess: "¡Sus archivos multimedia han sido guardados!",
            saveError: "Error al guardar.",
            logoTitle: "Logotipo de la empresa",
            uploadLogo: "Subir mi logotipo",
            noLogo: "Sin logotipo",
            videoTitle: "Vídeo de presentación",
            uploadVideo: "Subir un vídeo",
            noVideo: "Sin vídeo",
            deleteVideo: "Eliminar vídeo",
            galleryTitle: "Galería de Fotos de Proyectos",
            addPhotoBtn: "+ Añadir foto",
            galleryHelper: "Añada fotos de sus instalaciones de aire acondicionado por conductos y aerotermia.",
            emptyGallery: "Su galería está vacía. Añada fotos para destacar su trabajo.",
        },
        articles: {
            title: "Artículos SEO",
            subtitle: "Mejore su visibilidad local e internacional publicando artículos técnicos de climatización.",
            monthlyQuota: "Cuota mensual (publicados)",
            unlimited: "Ilimitado",
            writeBtn: "Redactar artículo",
            loading: "Cargando...",
            noArticlesTitle: "Ningún artículo publicado por el momento",
            noArticlesSubtitle: "Empiece a redactar para impulsar su SEO local.",
            createFirstBtn: "Crear mi primer artículo SEO",
            statusPublished: "Publicado",
            statusPending: "En revisión",
            statusRejected: "Rechazado",
            statusDraft: "Brouillon / Borrador",
            shareBtn: "Compartir",
            linkCopied: "¡Enlace del artículo copiado!",
            rejectionReason: "Motivo",
            viewBtn: "Ver",
            editBtn: "Editar",
            deleteConfirm: "¿Eliminar este artículo?",
            backToList: "Volver a la lista",
            newArticleTitle: "Redactar un nuevo artículo SEO",
            newArticleSubtitle: "Cree o genere con IA contenido experto para posicionarse en Google.",
            aiBoxTitle: "Asistente IA SEO: Generación integral del artículo",
            aiBoxSubtitle: "Indique un tema y ciudad objetivo (ej: 'Instalación de aire acondicionado por conductos en Madrid') y la IA redactará el artículo completo.",
            topicLabel: "Tema del artículo y Ciudad objetivo",
            topicPlaceholder: "ej: Instalación de aire acondicionado por conductos y aerotermia en Madrid",
            generateAiBtn: "Generar con IA ✨",
            generatingBtn: "Generando artículo SEO...",
            generalSectionTitle: "1. Información Principal y SEO",
            articleTitleLabel: "Título del Artículo (H1)",
            targetCityLabel: "Ciudad Objetivo (SEO Local)",
            introLabel: "Introducción",
            bodySectionTitle: "2. Secciones del Artículo (H2 y Contenido)",
            addSectionBtn: "+ Añadir sección",
            sectionHeadingLabel: "Subtítulo de la sección (H2)",
            sectionContentLabel: "Contenido de la sección",
            faqSectionTitle: "3. Preguntas Frecuentes Estructuradas (FAQ Schema)",
            addQuestionBtn: "+ Añadir pregunta FAQ",
            questionLabel: "Pregunta",
            answerLabel: "Respuesta experta",
            mediaSeoTitle: "4. Imagen de Portada y Meta Descripción",
            coverImageLabel: "Imagen de portada",
            videoUrlLabel: "URL de YouTube o Vídeo (Opcional)",
            metaDescLabel: "Meta Descripción de Google (Máx. 160 caracteres)",
            saveDraftBtn: "Guardar borrador",
            publishBtn: "Publicar Artículo SEO",
        },
        seoPage: {
            title: "Visibilidad SEO y Auditoría Técnica en Directo",
            subtitle: "Analice el posicionamiento SEO de su sitio web y optimice su visibilidad en Google.",
            websiteUrlLabel: "Sitio web de su empresa",
            targetCityLabel: "Ciudad objetivo principal",
            analyzeBtn: "Iniciar Auditoría SEO",
            analyzingBtn: "Analizando...",
            scoreLabel: "Puntuación Técnica SEO",
            clicksLabel: "Clics estimados",
            impressionsLabel: "Impresiones",
            ctrLabel: "CTR medio",
            positionLabel: "Posición media",
            recommendationsTitle: "Recomendaciones Técnicas y SEO Prioritarias",
            viewFixBtn: "Ver solución",
            markFixedBtn: "Marcar como corregido",
            fixedBadge: "Corregido",
        },
        billing: {
            title: "Mis Facturas y Suscripción",
            subtitle: "Gestione su suscripción en DuctedExpert.com y descargue sus facturas.",
            subscriptionCardTitle: "Mi Suscripción Experto",
            commitment12Months: "Compromiso 12 meses",
            statusActive: "Activo",
            startDateLabel: "Inicio de suscripción",
            anniversaryDateLabel: "Fecha de renovación",
            cancelScheduledTitle: "Baja programada.",
            cancelScheduledText: "Su suscripción finalizará el",
            requestCancelBtn: "Solicitar baja",
            cancelLockedTitle: "Opción bloqueada (Compromiso 12 meses)",
            cancelLockedText: "La baja estará disponible a partir de 1 mes antes de la fecha de renovación:",
            invoiceHistoryTitle: "Historial de Facturas",
            noInvoices: "Ninguna factura disponible por el momento.",
            dateCol: "Fecha",
            amountCol: "Importe",
            actionCol: "PDF",
            billingPortalBadge: "Facturación y Activación",
            subscribeTitle: "Activar Suscripción Experto",
            subscribeSubtitle: "Active su perfil profesional en DuctedExpert.com para recibir solicitudes directas y usar las herramientas SEO.",
            paymentSuccessTitle: "¡Pago validado con éxito!",
            paymentSuccessText: "Su suscripción ya está activa.",
            annualToggle: "Anual (Compromiso 12 meses)",
            twoMonthsFree: "Tarifa Privilegio",
            monthlyToggle: "Mensual",
            selectedBadge: "Seleccionado",
            hvacFormulaBadge: "Plan Climatización y Aerotermia",
            hvacPlanTitle: "Pro Climatización y Bomba de Calor",
            hvacPlanDesc: "Para empresas instaladoras de climatización por conductos y HVAC.",
            hvacFeatures: [
                "Presencia prioritaria en el Directorio y Mapa Interactivo",
                "Solicitudes directas de clientes con 0 % de comisión",
                "Ficha de empresa optimizada para SEO y Distintivo Verificado",
                "Generador de artículos SEO con IA y Auditoría SEO en directo"
            ],
            selectedFormulaLabel: "Plan seleccionado",
            stripeSecureDesc: "Pago seguro mediante Stripe. Factura en PDF descargable al instante.",
            payAndSubscribeBtn: "Pagar y Suscribirse",
            redirectingStripe: "Redirigiendo a Stripe...",
        }
    },
    it: {
        sidebar: {
            proPortal: "Area Pro",
            manageVisibility: "Gestisci visibilità e contatti",
            administration: "Amministrazione",
            myProfile: "Il Mio Profilo",
            leads: "Richieste / Lead",
            media: "I Miei Media",
            seoArticles: "Articoli SEO",
            seoVisibility: "Visibilità SEO",
            invoices: "Fatture e Abbonamento",
            logout: "Disconnetti",
            newPost: "Nuovo Articolo",
        },
        pendingAdmin: {
            title: "Convalide account in attesa",
            registeredOn: "Registrato il",
            approveBtn: "Convalida e Attiva",
        },
        profile: {
            pageTitle: "Il Mio Profilo Pubblico",
            pageSubtitle: "Gestisci le informazioni e la SEO mostrate sulla tua pagina aziendale dedicata.",
            viewOnlineBtn: "Vedi la mia scheda online",
            generalInfo: "Informazioni Generali",
            saveChanges: "Salva modifiche",
            savedSuccess: "Profilo aggiornato con successo!",
            saveError: "Errore durante il salvataggio.",
            companyName: "Ragione Sociale / Nome Azienda",
            companyId: "Partita IVA / Codice Fiscale",
            repLastName: "Cognome Referente",
            repFirstName: "Nome Referente",
            emailReadOnly: "Email (Non modificabile)",
            phone: "Telefono",
            contactPresentation: "Recapiti e Presentazione",
            address: "Indirizzo",
            postalCode: "CAP",
            city: "Città",
            description: "Descrizione dell'azienda",
            website: "Sito Web",
            seoTitle: "Posizionamento sui Motori di Ricerca (SEO)",
            aiBoosterBtn: "Orbimatic AI SEO Booster ✨",
            seoGeneratedSuccess: "Meta tag SEO generati con l'IA!",
            seoHelperText: "Questi elementi appaiono su Google. Puoi personalizzarli o usare l'IA per ottimizzarli.",
            metaTitleLabel: "Titolo Meta (Max 60 caratteri)",
            metaTitlePlaceholder: "Titolo ottimizzato per Google",
            metaDescLabel: "Descrizione Meta (Max 160 caratteri)",
            metaDescPlaceholder: "Descrizione efficace per attirare clic su Google",
            locationTitle: "Geolocalizzazione e Zona Operativa",
            differentWorkshopLabel: "La mia sede operativa è diversa dalla sede legale",
            workshopAddress: "Indirizzo sede operativa",
            workshopPostalCode: "CAP (Sede operativa)",
            workshopCity: "Città (Sede operativa)",
            nationalCoverageLabel: "⚡ Copertura nazionale (Studi termotecnici, progettazione HVAC, ecc.)",
            radiusTitle: "Raggio d'azione",
            radiusSubtitle: "Fino a quale distanza operi?",
            enterCityForMap: "Inserisci la tua città per visualizzare la mappa",
            billingCardTitle: "Fatturazione e Abbonamento",
            billingCardSubtitle: "Gestisci le tue fatture, i metodi di pagamento e l'abbonamento.",
            goToBillingBtn: "Vai alla Fatturazione",
        },
        leads: {
            title: "Le Mie Richieste di Preventivo (Lead)",
            subtitle: "Trova qui tutte le richieste ricevute tramite DuctedExpert.com.",
            pleaseLogin: "Effettua l'accesso per visualizzare le richieste.",
            noLeads: "Nessuna richiesta ricevuta al momento.",
            receivedOn: "Ricevuto il",
            contactHeading: "Contatto Cliente",
            projectHeading: "Dettagli Progetto",
            attachmentsHeading: "Allegati",
        },
        media: {
            title: "I Miei Media",
            subtitle: "Gestisci il logo aziendale, il video di presentazione e la galleria fotografica.",
            saveAll: "Salva tutto",
            saving: "Salvataggio...",
            savedSuccess: "I tuoi file multimediali sono stati salvati!",
            saveError: "Errore durante il salvataggio.",
            logoTitle: "Logo aziendale",
            uploadLogo: "Carica il mio logo",
            noLogo: "Nessun logo",
            videoTitle: "Video di presentazione",
            uploadVideo: "Carica un video",
            noVideo: "Nessun video",
            deleteVideo: "Elimina video",
            galleryTitle: "Galleria Fotografica Realizzazioni",
            addPhotoBtn: "+ Aggiungi foto",
            galleryHelper: "Aggiungi foto dei tuoi impianti di climatizzazione canalizzata e pompe di calore.",
            emptyGallery: "La tua galleria è vuota. Aggiungi foto dei tuoi lavori.",
        },
        articles: {
            title: "Articoli SEO",
            subtitle: "Migliora la tua visibilità su Google pubblicando articoli tecnici su climatizzazione e HVAC.",
            monthlyQuota: "Quota mensile (pubblicati)",
            unlimited: "Illimitato",
            writeBtn: "Scrivi articolo",
            loading: "Caricamento...",
            noArticlesTitle: "Nessun articolo pubblicato al momento",
            noArticlesSubtitle: "Inizia a scrivere per potenziare la tua SEO locale.",
            createFirstBtn: "Crea il mio primo articolo SEO",
            statusPublished: "Pubblicato",
            statusPending: "In attesa",
            statusRejected: "Rifiutato",
            statusDraft: "Bozza",
            shareBtn: "Condividi",
            linkCopied: "Link dell'articolo copiato!",
            rejectionReason: "Motivo",
            viewBtn: "Vedi",
            editBtn: "Modifica",
            deleteConfirm: "Eliminare questo articolo?",
            backToList: "Torna alla lista",
            newArticleTitle: "Scrivi un nuovo articolo SEO",
            newArticleSubtitle: "Crea o genera con l'IA contenuti tecnici ottimizzati per Google.",
            aiBoxTitle: "Assistente IA SEO: Generazione completa dell'articolo",
            aiBoxSubtitle: "Inserisci un argomento e la città target (es. 'Installazione climatizzazione canalizzata a Milano') e lascia che l'IA scriva l'articolo.",
            topicLabel: "Argomento e Città Target",
            topicPlaceholder: "es. Installazione climatizzazione canalizzata e pompa di calore a Milano",
            generateAiBtn: "Genera con IA ✨",
            generatingBtn: "Generazione articolo SEO in corso...",
            generalSectionTitle: "1. Informazioni Principali e SEO",
            articleTitleLabel: "Titolo dell'Articolo (H1)",
            targetCityLabel: "Città Target (SEO Locale)",
            introLabel: "Introduzione",
            bodySectionTitle: "2. Sezioni dell'Articolo (H2 e Contenuto)",
            addSectionBtn: "+ Aggiungi sezione",
            sectionHeadingLabel: "Titolo della sezione (H2)",
            sectionContentLabel: "Contenuto della sezione",
            faqSectionTitle: "3. Domande Frequenti Strutturate (FAQ Schema)",
            addQuestionBtn: "+ Aggiungi domanda FAQ",
            questionLabel: "Domanda",
            answerLabel: "Risposta esperta",
            mediaSeoTitle: "4. Immagine di Copertina e Meta Tag Google",
            coverImageLabel: "Immagine di copertina",
            videoUrlLabel: "URL YouTube o Video (Opzionale)",
            metaDescLabel: "Meta Descrizione Google (Max 160 caratteri)",
            saveDraftBtn: "Salva bozza",
            publishBtn: "Pubblica Articolo SEO",
        },
        seoPage: {
            title: "Visibilità SEO e Audit Tecnico Live",
            subtitle: "Analizza la SEO del tuo sito web e migliora il posizionamento su Google.",
            websiteUrlLabel: "Sito web della tua azienda",
            targetCityLabel: "Città target principale",
            analyzeBtn: "Avvia Audit SEO",
            analyzingBtn: "Analisi in corso...",
            scoreLabel: "Punteggio Tecnico SEO",
            clicksLabel: "Clic stimati",
            impressionsLabel: "Impressioni",
            ctrLabel: "CTR medio",
            positionLabel: "Posizione media",
            recommendationsTitle: "Raccomandazioni Tecniche e SEO Prioritarie",
            viewFixBtn: "Vedi soluzione",
            markFixedBtn: "Segna come risolto",
            fixedBadge: "Risolto",
        },
        billing: {
            title: "Le Mie Fatture e Abbonamento",
            subtitle: "Gestisci il tuo abbonamento DuctedExpert.com e scarica le fatture.",
            subscriptionCardTitle: "Il Mio Abbonamento Esperto",
            commitment12Months: "Impegno 12 mesi",
            statusActive: "Attivo",
            startDateLabel: "Inizio abbonamento",
            anniversaryDateLabel: "Data di rinnovo",
            cancelScheduledTitle: "Disdetta programmata.",
            cancelScheduledText: "Il tuo abbonamento terminerà il",
            requestCancelBtn: "Richiedi disdetta",
            cancelLockedTitle: "Opzione bloccata (Impegno 12 mesi)",
            cancelLockedText: "La disdetta sarà possibile a partire da 1 mese prima della data di rinnovo:",
            invoiceHistoryTitle: "Storico Fatture",
            noInvoices: "Nessuna fattura disponibile al momento.",
            dateCol: "Data",
            amountCol: "Importo",
            actionCol: "PDF",
            billingPortalBadge: "Fatturazione e Attivazione",
            subscribeTitle: "Attiva il Tuo Abbonamento Esperto",
            subscribeSubtitle: "Attiva il tuo profilo professionale su DuctedExpert.com per ricevere richieste dirette e sbloccare gli strumenti SEO.",
            paymentSuccessTitle: "Pagamento confermato con successo!",
            paymentSuccessText: "Il tuo abbonamento è ora attivo.",
            annualToggle: "Annuale (Impegno 12 mesi)",
            twoMonthsFree: "Tariffa Privilegio",
            monthlyToggle: "Mensile",
            selectedBadge: "Selezionato",
            hvacFormulaBadge: "Piano Climatizzazione e HVAC",
            hvacPlanTitle: "Pro Climatizzazione e Pompe di Calore",
            hvacPlanDesc: "Per installatori di impianti canalizzati, pompe di calore e VRV/VRF.",
            hvacFeatures: [
                "Posizionamento prioritario nella Directory e sulla Mappa",
                "Richieste di preventivo dirette con 0% di commissione",
                "Scheda aziendale ottimizzata SEO e Badge Esperto Verificato",
                "Generatore di articoli SEO con IA e Audit Tecnico SEO inclusi"
            ],
            selectedFormulaLabel: "Piano selezionato",
            stripeSecureDesc: "Pagamento sicuro tramite Stripe. Fattura PDF scaricabile immediatamente.",
            payAndSubscribeBtn: "Paga e Abbonati",
            redirectingStripe: "Reindirizzamento a Stripe...",
        }
    }
};

export function getDashboardDictionary(locale?: string | null) {
    if (isValidLocale(locale)) {
        return DASHBOARD_DICTIONARY[locale];
    }
    return DASHBOARD_DICTIONARY[DEFAULT_LOCALE];
}
