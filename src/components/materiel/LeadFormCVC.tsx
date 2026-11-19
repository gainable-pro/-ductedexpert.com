"use client";

import { useState } from "react";
import {
  Loader2,
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Thermometer,
  Home,
  Wrench,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { Locale, withLocalePath } from "@/lib/i18n";

interface LeadFormCVCProps {
  productRef?: string;
  productTitle?: string;
}

const FORM_I18N: Record<Locale, {
  freeBadge: string;
  title: string;
  forProduct: string;
  benefits: string[];
  lastName: string;
  lastNamePh: string;
  firstName: string;
  firstNamePh: string;
  email: string;
  phone: string;
  zip: string;
  city: string;
  projectDetails: string;
  housingType: string;
  housingOptions: { val: string; label: string }[];
  surface: string;
  surfaceOptions: { val: string; label: string }[];
  workType: string;
  workOptions: { val: string; label: string }[];
  budget: string;
  budgetOptions: { val: string; label: string }[];
  message: string;
  messagePh: string;
  submit: string;
  submitting: string;
  privacy: string;
  privacyLink: string;
  successTitle: string;
  successDesc: string;
  successBadge: string;
  errorMsg: string;
  selectOption: string;
}> = {
  en: {
    freeBadge: "Free & No Obligation Quote",
    title: "Get an HVAC Installation Quote",
    forProduct: "For:",
    benefits: ["Response within 24h", "Certified HVAC Expert", "Competitive Direct Pricing", "Quality Warranty"],
    lastName: "Last Name *",
    lastNamePh: "Your last name",
    firstName: "First Name",
    firstNamePh: "Your first name",
    email: "Email *",
    phone: "Phone *",
    zip: "Postal Code *",
    city: "City *",
    projectDetails: "Your HVAC Project Details",
    housingType: "Building Type",
    housingOptions: [
      { val: "maison", label: "Single-Family Home / Villa" },
      { val: "appartement", label: "Apartment / Flat" },
      { val: "local_commercial", label: "Commercial Premises" },
      { val: "bureau", label: "Offices / Tertiary" },
      { val: "autre", label: "Other" },
    ],
    surface: "Surface Area (m²)",
    surfaceOptions: [
      { val: "moins_30", label: "Under 30 m²" },
      { val: "30_50", label: "30 – 50 m²" },
      { val: "50_80", label: "50 – 80 m²" },
      { val: "80_120", label: "80 – 120 m²" },
      { val: "120_200", label: "120 – 200 m²" },
      { val: "plus_200", label: "Over 200 m²" },
    ],
    workType: "Requested Service",
    workOptions: [
      { val: "fourniture_pose", label: "Equipment + Installation (Turnkey)" },
      { val: "pose_seule", label: "Installation only (I have the equipment)" },
      { val: "entretien_sav", label: "Maintenance / Servicing" },
      { val: "remplacement", label: "Replacement of existing unit" },
      { val: "multi_split", label: "Multi-Split installation" },
      { val: "gainable", label: "Ducted concealed system" },
    ],
    budget: "Estimated Budget",
    budgetOptions: [
      { val: "", label: "Not defined" },
      { val: "moins_2000", label: "Under €2,000" },
      { val: "2000_5000", label: "€2,000 – €5,000" },
      { val: "5000_10000", label: "€5,000 – €10,000" },
      { val: "10000_20000", label: "€10,000 – €20,000" },
      { val: "plus_20000", label: "Over €20,000" },
    ],
    message: "Additional Details",
    messagePh: "Describe your project: property type, ceiling constraints, timeline...",
    submit: "Send My Quote Request",
    submitting: "Sending...",
    privacy: "🔒 Secure data — No spam. A qualified HVAC expert will contact you.",
    privacyLink: "Privacy Policy",
    successTitle: "Request Sent!",
    successDesc: "A verified DuctedExpert professional will contact you within 24 business hours.",
    successBadge: "Your request has been registered",
    errorMsg: "An error occurred. Please try again or contact us by email.",
    selectOption: "Select...",
  },
  de: {
    freeBadge: "Kostenloses & Unverbindliches Angebot",
    title: "Angebot für Klima- / Wärmepumpen-Installation",
    forProduct: "Für:",
    benefits: ["Antwort innerhalb 24h", "Zertifizierter Fachbetrieb", "Direkte Fachbetriebspreise", "Garantie & Fachmontage"],
    lastName: "Nachname *",
    lastNamePh: "Ihr Nachname",
    firstName: "Vorname",
    firstNamePh: "Ihr Vorname",
    email: "E-Mail *",
    phone: "Telefon *",
    zip: "Postleitzahl *",
    city: "Stadt *",
    projectDetails: "Details zu Ihrem Projekt",
    housingType: "Gebäudetyp",
    housingOptions: [
      { val: "maison", label: "Einfamilienhaus / Villa" },
      { val: "appartement", label: "Wohnung / Apartment" },
      { val: "local_commercial", label: "Gewerberäume / Laden" },
      { val: "bureau", label: "Bürogebäude" },
      { val: "autre", label: "Sonstiges" },
    ],
    surface: "Zu klimatisierende Fläche (m²)",
    surfaceOptions: [
      { val: "moins_30", label: "Unter 30 m²" },
      { val: "30_50", label: "30 – 50 m²" },
      { val: "50_80", label: "50 – 80 m²" },
      { val: "80_120", label: "80 – 120 m²" },
      { val: "120_200", label: "120 – 200 m²" },
      { val: "plus_200", label: "Über 200 m²" },
    ],
    workType: "Gewünschte Leistung",
    workOptions: [
      { val: "fourniture_pose", label: "Lieferung + Montage (schlüsselfertig)" },
      { val: "pose_seule", label: "Nur Montage (Gerät vorhanden)" },
      { val: "entretien_sav", label: "Wartung / Kundendienst" },
      { val: "remplacement", label: "Austausch einer Altanlage" },
      { val: "multi_split", label: "Multi-Split-Installation" },
      { val: "gainable", label: "Kanal-Klimasystem" },
    ],
    budget: "Geschätztes Budget",
    budgetOptions: [
      { val: "", label: "Nicht festgelegt" },
      { val: "moins_2000", label: "Unter 2.000 €" },
      { val: "2000_5000", label: "2.000 – 5.000 €" },
      { val: "5000_10000", label: "5.000 – 10.000 €" },
      { val: "10000_20000", label: "10.000 – 20.000 €" },
      { val: "plus_20000", label: "Über 20.000 €" },
    ],
    message: "Zusätzliche Angaben",
    messagePh: "Beschreiben Sie Ihr Projekt: Gebäudeart, Deckenaufbau, gewünschter Termin...",
    submit: "Kostenloses Angebot anfordern",
    submitting: "Wird gesendet...",
    privacy: "🔒 Sichere Daten — Kein Spam. Ein Fachbetrieb meldet sich innerhalb von 24h.",
    privacyLink: "Datenschutzerklärung",
    successTitle: "Anfrage gesendet!",
    successDesc: "Ein geprüfter Fachbetrieb von DuctedExpert kontaktiert Sie innerhalb von 24 Arbeitsstunden.",
    successBadge: "Ihre Anfrage wurde erfolgreich übermittelt",
    errorMsg: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    selectOption: "Auswählen...",
  },
  fi: {
    freeBadge: "Ilmainen & Sitoumukseton Tarjous",
    title: "Pyydä Tarjous Ilmastointi- tai Lämpöpumppuasennuksesta",
    forProduct: "Tuotteelle:",
    benefits: ["Vastaus 24h kuluessa", "Sertifioitu LVI-ammattilainen", "Suora Urakkahinta", "Takuu & Laatuasennus"],
    lastName: "Sukunimi *",
    lastNamePh: "Sukunimesi",
    firstName: "Etunimi",
    firstNamePh: "Etunimesi",
    email: "Sähköposti *",
    phone: "Puhelinnumero *",
    zip: "Postinumero *",
    city: "Kaupunki / Paikkakunta *",
    projectDetails: "Hankkeesi Yksityiskohdat",
    housingType: "Kiinteistötyyppi",
    housingOptions: [
      { val: "maison", label: "Omakotitalo / Huvila" },
      { val: "appartement", label: "Kerrostaloasunto / Huoneisto" },
      { val: "local_commercial", label: "Liiketila" },
      { val: "bureau", label: "Toimistotilat" },
      { val: "autre", label: "Muu" },
    ],
    surface: "Käsiteltävä Pinta-ala (m²)",
    surfaceOptions: [
      { val: "moins_30", label: "Alle 30 m²" },
      { val: "30_50", label: "30 – 50 m²" },
      { val: "50_80", label: "50 – 80 m²" },
      { val: "80_120", label: "80 – 120 m²" },
      { val: "120_200", label: "120 – 200 m²" },
      { val: "plus_200", label: "Yli 200 m²" },
    ],
    workType: "Toivottu Palvelu",
    workOptions: [
      { val: "fourniture_pose", label: "Laitteet + Asennus (Avaimet käteen)" },
      { val: "pose_seule", label: "Pelkkä asennus (laitteet valmiina)" },
      { val: "entretien_sav", label: "Huolto / Kunnossapito" },
      { val: "remplacement", label: "Vanhan laitteen korvaaminen" },
      { val: "multi_split", label: "Multi-Split-asennus" },
      { val: "gainable", label: "Kanavailmastointijärjestelmä" },
    ],
    budget: "Arvioitu Budjetti",
    budgetOptions: [
      { val: "", label: "Ei määritelty" },
      { val: "moins_2000", label: "Alle 2 000 €" },
      { val: "2000_5000", label: "2 000 – 5 000 €" },
      { val: "5000_10000", label: "5 000 – 10 000 €" },
      { val: "10000_20000", label: "10 000 – 20 000 €" },
      { val: "plus_20000", label: "Yli 20 000 €" },
    ],
    message: "Lisätietoja Projektista",
    messagePh: "Kuvaile hankettasi: tilat, toivottu aikataulu, erityistoiveet...",
    submit: "Lähetä Tarjouspyyntö",
    submitting: "Lähetetään...",
    privacy: "🔒 Suojatut tiedot — Ei roskapostia. LVI-asiantuntija vastaa 24h sisällä.",
    privacyLink: "Tietosuojaseloste",
    successTitle: "Tarjouspyyntö Lähetetty!",
    successDesc: "Varmennettu DuctedExpert-urakoitsija ottaa yhteyttä 24 arkityötunnin sisällä.",
    successBadge: "Pyyntösi on vastaanotettu",
    errorMsg: "Tapahtui virhe. Yritä uudelleen tai ota yhteyttä sähköpostitse.",
    selectOption: "Valitse...",
  },
  es: {
    freeBadge: "Presupuesto Gratuito y Sin Compromiso",
    title: "Solicitar Presupuesto de Instalación HVAC",
    forProduct: "Para:",
    benefits: ["Respuesta en 24h", "Instalador Certificado", "Precios Directos de Instalador", "Garantía y Calidad"],
    lastName: "Apellidos *",
    lastNamePh: "Sus apellidos",
    firstName: "Nombre",
    firstNamePh: "Su nombre",
    email: "Email *",
    phone: "Teléfono *",
    zip: "Código Postal *",
    city: "Ciudad *",
    projectDetails: "Detalles de su Proyecto de Climatización",
    housingType: "Tipo de Inmueble",
    housingOptions: [
      { val: "maison", label: "Vivienda Unifamiliar / Chalet" },
      { val: "appartement", label: "Piso / Apartamento" },
      { val: "local_commercial", label: "Local Comercial" },
      { val: "bureau", label: "Oficinas" },
      { val: "autre", label: "Otro" },
    ],
    surface: "Superficie a Tratar (m²)",
    surfaceOptions: [
      { val: "moins_30", label: "Menos de 30 m²" },
      { val: "30_50", label: "30 – 50 m²" },
      { val: "50_80", label: "50 – 80 m²" },
      { val: "80_120", label: "80 – 120 m²" },
      { val: "120_200", label: "120 – 200 m²" },
      { val: "plus_200", label: "Más de 200 m²" },
    ],
    workType: "Servicio Deseado",
    workOptions: [
      { val: "fourniture_pose", label: "Suministro + Instalación (Llave en mano)" },
      { val: "pose_seule", label: "Solo instalación (ya dispongo del equipo)" },
      { val: "entretien_sav", label: "Mantenimiento / Servicio Técnico" },
      { val: "remplacement", label: "Sustitución de equipo existente" },
      { val: "multi_split", label: "Instalación Multi-Split" },
      { val: "gainable", label: "Sistema por conductos" },
    ],
    budget: "Presupuesto Estimado",
    budgetOptions: [
      { val: "", label: "No definido" },
      { val: "moins_2000", label: "Menos de 2.000 €" },
      { val: "2000_5000", label: "2.000 – 5.000 €" },
      { val: "5000_10000", label: "5.000 – 10.000 €" },
      { val: "10000_20000", label: "10.000 – 20.000 €" },
      { val: "plus_20000", label: "Más de 20.000 €" },
    ],
    message: "Detalles Adicionales",
    messagePh: "Describa su proyecto: tipo de vivienda, falsos techos, plazos deseados...",
    submit: "Enviar Solicitud de Presupuesto",
    submitting: "Enviando...",
    privacy: "🔒 Datos protegidos — Sin spam. Un instalador cualificado le contactará en 24h.",
    privacyLink: "Política de Privacidad",
    successTitle: "¡Solicitud Enviada!",
    successDesc: "Un instalador verificado de DuctedExpert le contactará en menos de 24 horas laborables.",
    successBadge: "Su solicitud ha sido registrada correctamente",
    errorMsg: "Ha ocurrido un error. Por favor inténtelo de nuevo.",
    selectOption: "Seleccionar...",
  },
  it: {
    freeBadge: "Preventivo Gratuito e Senza Impegno",
    title: "Richiedi un Preventivo per Impianto HVAC",
    forProduct: "Per:",
    benefits: ["Risposta entro 24h", "Installatore Certificato", "Prezzi Diretti da Installatore", "Garanzia e Qualità"],
    lastName: "Cognome *",
    lastNamePh: "Il tuo cognome",
    firstName: "Nome",
    firstNamePh: "Il tuo nome",
    email: "Email *",
    phone: "Telefono *",
    zip: "Codice Postale *",
    city: "Città *",
    projectDetails: "Dettagli del Progetto Termotecnico",
    housingType: "Tipo di Immobile",
    housingOptions: [
      { val: "maison", label: "Casa Indipendente / Villa" },
      { val: "appartement", label: "Appartamento" },
      { val: "local_commercial", label: "Locale Commerciale" },
      { val: "bureau", label: "Uffici" },
      { val: "autre", label: "Altro" },
    ],
    surface: "Superficie da Trattare (m²)",
    surfaceOptions: [
      { val: "moins_30", label: "Meno di 30 m²" },
      { val: "30_50", label: "30 – 50 m²" },
      { val: "50_80", label: "50 – 80 m²" },
      { val: "80_120", label: "80 – 120 m²" },
      { val: "120_200", label: "120 – 200 m²" },
      { val: "plus_200", label: "Oltre 200 m²" },
    ],
    workType: "Servizio Richiesto",
    workOptions: [
      { val: "fourniture_pose", label: "Fornitura + Installazione (Chiavi in mano)" },
      { val: "pose_seule", label: "Solo installazione (materiale già disponibile)" },
      { val: "entretien_sav", label: "Manutenzione / Assistenza" },
      { val: "remplacement", label: "Sostituzione impianto esistente" },
      { val: "multi_split", label: "Installazione Multi-Split" },
      { val: "gainable", label: "Impianto Canalizzato" },
    ],
    budget: "Budget Stimato",
    budgetOptions: [
      { val: "", label: "Non definito" },
      { val: "moins_2000", label: "Meno di 2.000 €" },
      { val: "2000_5000", label: "2.000 – 5.000 €" },
      { val: "5000_10000", label: "5.000 – 10.000 €" },
      { val: "10000_20000", label: "10.000 – 20.000 €" },
      { val: "plus_20000", label: "Oltre 20.000 €" },
    ],
    message: "Dettagli Aggiuntivi",
    messagePh: "Descrivi il tuo progetto: tipologia immobile, controsoffitti, tempistiche...",
    submit: "Invia Richiesta di Preventivo",
    submitting: "Invio in corso...",
    privacy: "🔒 Dati protetti — Nessuno spam. Un esperto qualificato ti ricontatterà entro 24h.",
    privacyLink: "Informativa sulla Privacy",
    successTitle: "Richiesta Inviata!",
    successDesc: "Un professionista verificato DuctedExpert ti contatterà entro 24 ore lavorative.",
    successBadge: "La tua richiesta è stata registrata con successo",
    errorMsg: "Si è verificato un errore. Per favore riprova.",
    selectOption: "Seleziona...",
  },
  ar: {
    freeBadge: "عرض سعر مجاني وبدون التزام",
    title: "طلب عرض سعر تركيب أنظمة تكييف CVC",
    forProduct: "بخصوص:",
    benefits: ["الرد خلال 24 ساعة", "مقاول معتمد ومرخص", "أسعار مباشرة من المقاول", "ضمان جودة معتمد"],
    lastName: "اسم العائلة *",
    lastNamePh: "اسم العائلة",
    firstName: "الاسم الأول",
    firstNamePh: "الاسم الأول",
    email: "البريد الإلكتروني *",
    phone: "رقم الجوال *",
    zip: "الرمز البريدي / صندوق البريد",
    city: "المدينة *",
    projectDetails: "تفاصيل مشروع التكييف الخاص بك",
    housingType: "نوع المنشأة",
    housingOptions: [
      { val: "maison", label: "فيلا / منزل مستقل" },
      { val: "appartement", label: "شقة سكنية" },
      { val: "local_commercial", label: "محل تجاري / معرض" },
      { val: "bureau", label: "مكاتب إدارية" },
      { val: "autre", label: "أخرى" },
    ],
    surface: "المساحة التقريبية (م²)",
    surfaceOptions: [
      { val: "moins_30", label: "أقل من 30 م²" },
      { val: "30_50", label: "30 – 50 م²" },
      { val: "50_80", label: "50 – 80 م²" },
      { val: "80_120", label: "80 – 120 م²" },
      { val: "120_200", label: "120 – 200 م²" },
      { val: "plus_200", label: "أكثر من 200 م²" },
    ],
    workType: "نوع الخدمة المطلوبة",
    workOptions: [
      { val: "fourniture_pose", label: "توريد + تركيب (تسليم مفتاح)" },
      { val: "pose_seule", label: "تركيب فقط (المعدات متوفرة لدي)" },
      { val: "entretien_sav", label: "صيانة دورية / إصلاح أعطال" },
      { val: "remplacement", label: "استبدال وتجديد أجهزة قديمة" },
      { val: "multi_split", label: "تركيب نظام مالتي سبليت" },
      { val: "gainable", label: "نظام تكييف مركزي مخفي (داكت)" },
    ],
    budget: "الميزانية المقدرة",
    budgetOptions: [
      { val: "", label: "غير محدد" },
      { val: "moins_2000", label: "أقل من 2,000 يورو" },
      { val: "2000_5000", label: "2,000 – 5,000 يورو" },
      { val: "5000_10000", label: "5,000 – 10,000 يورو" },
      { val: "10000_20000", label: "10,000 – 20,000 يورو" },
      { val: "plus_20000", label: "أكثر من 20,000 يورو" },
    ],
    message: "ملاحظات إضافية",
    messagePh: "صف مشروعك بالتفصيل: نوع البناء، مواصفات الأسقف المستعارة، الموعد المطلوب...",
    submit: "إرسال طلب عرض السعر",
    submitting: "جاري الإرسال...",
    privacy: "🔒 بياناتك محمية ومشفرة — لا رسائل مزعجة. يتواصل معك خبير معتمد.",
    privacyLink: "سياسة الخصوصية",
    successTitle: "تم استلام طلبك بنجاح!",
    successDesc: "سيتواصل معك خبير معتمد من شبكة DuctedExpert في غضون 24 ساعة عمل.",
    successBadge: "تم تسجيل طلبك وتوجيهه للمختصين",
    errorMsg: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.",
    selectOption: "اختر...",
  },
};

export default function LeadFormCVC({ productRef, productTitle }: LeadFormCVCProps) {
  const { locale } = useLanguage();
  const f = FORM_I18N[locale] || FORM_I18N.en;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("type", "particulier");
    if (productRef) formData.append("productRef", productRef);
    if (productTitle) formData.append("productTitle", productTitle);

    const msg = formData.get("message");
    if (!msg || String(msg).trim() === "") {
      formData.set(
        "message",
        `Quote request for: ${productTitle ?? productRef ?? "HVAC System"}`
      );
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Erreur");
      setSubmitted(true);
    } catch {
      alert(f.errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-10 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {f.successTitle}
        </h3>
        <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
          {f.successDesc}
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
          <CheckCircle className="h-3.5 w-3.5" />
          {f.successBadge}
        </div>
      </div>
    );
  }

  return (
    <section
      className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
      aria-labelledby="lead-form-title"
    >
      {/* Header */}
      <div className="bg-[#1F2D3D] px-8 py-6">
        <p className="text-xs font-bold text-[#D59B2B] uppercase tracking-widest mb-1">
          {f.freeBadge}
        </p>
        <h2
          id="lead-form-title"
          className="text-xl md:text-2xl font-bold text-white"
        >
          {f.title}
        </h2>
        {productTitle && (
          <p className="text-slate-400 text-sm mt-1">
            {f.forProduct}{" "}
            <span className="text-[#D59B2B] font-semibold">{productTitle}</span>
          </p>
        )}
        {/* Quick Benefits */}
        <div className="flex flex-wrap gap-4 mt-4">
          {f.benefits.map((v) => (
            <span
              key={v}
              className="inline-flex items-center gap-1.5 text-[11px] text-slate-300 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D59B2B] inline-block" />
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
        {productRef && (
          <input type="hidden" name="productRef" value={productRef} />
        )}
        {productTitle && (
          <input type="hidden" name="productTitle" value={productTitle} />
        )}

        {/* Identity */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label
              htmlFor="cvc-lastName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              <User className="inline h-3 w-3 mr-1" />
              {f.lastName}
            </label>
            <input
              id="cvc-lastName"
              name="lastName"
              type="text"
              placeholder={f.lastNamePh}
              required
              className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="cvc-firstName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              {f.firstName}
            </label>
            <input
              id="cvc-firstName"
              name="firstName"
              type="text"
              placeholder={f.firstNamePh}
              className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="cvc-email"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              <Mail className="inline h-3 w-3 mr-1" />
              {f.email}
            </label>
            <input
              id="cvc-email"
              name="email"
              type="email"
              placeholder="you@domain.com"
              required
              className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="cvc-phone"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              <Phone className="inline h-3 w-3 mr-1" />
              {f.phone}
            </label>
            <input
              id="cvc-phone"
              name="phone"
              type="tel"
              placeholder="+44 20 1234 5678"
              required
              className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="cvc-zip"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              <MapPin className="inline h-3 w-3 mr-1" />
              {f.zip}
            </label>
            <input
              id="cvc-zip"
              name="zip"
              type="text"
              placeholder="10115"
              required
              className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="cvc-city"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              {f.city}
            </label>
            <input
              id="cvc-city"
              name="city"
              type="text"
              placeholder="Berlin, London, Helsinki..."
              required
              className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* HVAC Project Details */}
        <div className="border-t border-slate-100 pt-6">
          <p className="text-xs font-bold text-[#D59B2B] uppercase tracking-widest mb-4 flex items-center gap-1.5">
            <Thermometer className="h-3.5 w-3.5" />
            {f.projectDetails}
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {/* Housing Type */}
            <div className="space-y-1.5">
              <label
                htmlFor="cvc-housingType"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
              >
                <Home className="inline h-3 w-3 mr-1" />
                {f.housingType}
              </label>
              <div className="relative">
                <select
                  id="cvc-housingType"
                  name="housingType"
                  className="w-full h-11 px-4 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all appearance-none"
                >
                  <option value="">{f.selectOption}</option>
                  {f.housingOptions.map((opt) => (
                    <option key={opt.val} value={opt.val}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Surface */}
            <div className="space-y-1.5">
              <label
                htmlFor="cvc-surface"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
              >
                {f.surface}
              </label>
              <div className="relative">
                <select
                  id="cvc-surface"
                  name="surface"
                  className="w-full h-11 px-4 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all appearance-none"
                >
                  <option value="">{f.selectOption}</option>
                  {f.surfaceOptions.map((opt) => (
                    <option key={opt.val} value={opt.val}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Service Type */}
            <div className="space-y-1.5">
              <label
                htmlFor="cvc-workType"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
              >
                <Wrench className="inline h-3 w-3 mr-1" />
                {f.workType}
              </label>
              <div className="relative">
                <select
                  id="cvc-workType"
                  name="workType"
                  className="w-full h-11 px-4 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all appearance-none"
                >
                  <option value="">{f.selectOption}</option>
                  {f.workOptions.map((opt) => (
                    <option key={opt.val} value={opt.val}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-1.5">
              <label
                htmlFor="cvc-budget"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
              >
                {f.budget}
              </label>
              <div className="relative">
                <select
                  id="cvc-budget"
                  name="budget"
                  className="w-full h-11 px-4 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all appearance-none"
                >
                  {f.budgetOptions.map((opt) => (
                    <option key={opt.val} value={opt.val}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="cvc-message"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            {f.message}
          </label>
          <textarea
            id="cvc-message"
            name="message"
            rows={4}
            placeholder={
              productRef
                ? `Quote request for ${productRef}...`
                : f.messagePh
            }
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#D59B2B] focus:bg-white transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-13 py-3.5 flex items-center justify-center gap-2 bg-[#D59B2B] hover:bg-amber-400 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-amber-300/40 hover:shadow-xl"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                {f.submitting}
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                {f.submit}
              </>
            )}
          </button>
          <p className="text-center text-[11px] text-slate-400 mt-3 leading-relaxed">
            {f.privacy}
            <br />
            <a href={withLocalePath("/politique-confidentialite", locale)} className="underline hover:text-slate-600">
              {f.privacyLink}
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}
