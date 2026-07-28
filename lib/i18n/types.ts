export type Dictionary = {
  meta: {
    titleDefault: string;
    titleTemplate: string;
    description: string;
  };
  nav: {
    services: string;
    caseStudies: string;
    insights: string;
    about: string;
    aiReadiness: string;
    technology: string;
    industries: string;
    vpsHosting: string;
    viewHosting: string;
    bookConsultation: string;
    bookConsultationShort: string;
    toggleMenu: string;
    toggleServices: string;
    exploreHeading: string;
    servicesMenu: {
      coreHeading: string;
      licensedHeading: string;
      licensedActivities: string;
      vpsPlans: string;
      cloud: string;
      managedIt: string;
      ai: string;
      software: string;
      erp: string;
      itConsultancy: string;
      technologySupply: string;
      energySystems: string;
      softwareTraining: string;
    };
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  logoStrip: {
    label: string;
    sectors: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    body: string;
    explorePlans: string;
    items: {
      id: string;
      tag: string;
      title: string;
      outcome: string;
      portalLink: boolean;
      href?: string;
      learnMore?: string;
      points: string[];
    }[];
  };
  valueStack: {
    eyebrow: string;
    title: string;
    body: string;
    layers: { name: string; desc: string }[];
  };
  readiness: {
    eyebrow: string;
    title: string;
    body: string;
    meta: string;
    start: string;
    back: string;
    next: string;
    seeReport: string;
    analyzing: string;
    readinessLabel: string;
    nextSteps: string;
    discuss: string;
    retake: string;
    error: string;
    tryAgain: string;
    questions: {
      id: string;
      dimension: string;
      prompt: string;
      options: string[];
    }[];
  };
  why: {
    eyebrow: string;
    title: string;
    reasons: { title: string; body: string }[];
  };
  caseTeaser: {
    eyebrow: string;
    title: string;
    body: string;
    viewAll: string;
    readStudy: string;
  };
  tech: {
    eyebrow: string;
    title: string;
    body: string;
    groups: { group: string; items: string[] }[];
  };
  industries: {
    eyebrow: string;
    title: string;
    body: string;
    items: { id: string; name: string; hint: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    location: string;
  };
  footer: {
    tagline: string;
    blurb: string;
    location: string;
    trust: {
      tradeLicense: string;
      trn: string;
      phone: string;
      whatsapp: string;
      email: string;
    };
    products: string;
    services: string;
    company: string;
    links: {
      vps: string;
      portal: string;
      status: string;
      cloud: string;
      managedIt: string;
      ai: string;
      software: string;
      erp: string;
      itConsultancy: string;
      technologySupply: string;
      energySystems: string;
      softwareTraining: string;
      about: string;
      caseStudies: string;
      insights: string;
      industries: string;
      readiness: string;
      contact: string;
    };
    privacy: string;
    terms: string;
    rights: string;
  };
  chat: {
    title: string;
    subtitle: string;
    close: string;
    open: string;
    openLabel: string;
    closeLabel: string;
    greeting: string;
    thinking: string;
    placeholder: string;
    send: string;
    disclaimer: string;
    quick: string[];
    fallback: string;
  };
  stackLabels: string[];
  caseStudiesPage: {
    eyebrow: string;
    title: string;
    description: string;
    discuss: string;
    tryAssessment: string;
    onThisPage: string;
    challenge: string;
    approach: string;
    outcomes: string;
    engagement: string;
    duration: string;
    servicesLabel: string;
    techStack: string;
    nextEyebrow: string;
    nextTitle: string;
    nextBody: string;
    book: string;
    backHome: string;
    badgeProduction: string;
    badgeDemonstrator: string;
    badgeResearchBacked: string;
  };
  insightsPage: {
    eyebrow: string;
    title: string;
    description: string;
    readArticle: string;
    related: string;
    allInsights: string;
    nextEyebrow: string;
    nextTitle: string;
    nextBody: string;
    book: string;
    backHome: string;
  };
  caseStudies: {
    slug: string;
    title: string;
    clientDescriptor: string;
    industry: string;
    services: string[];
    duration: string;
    engagementType: "production" | "demonstrator";
    researchBacked?: boolean;
    summary: string;
    challenge: string;
    approach: string;
    outcomes: { value: string; label: string; detail?: string }[];
    stack: { category: string; items: string[] }[];
  }[];
  legal: {
    privacyTitle: string;
    privacyDescription: string;
    termsTitle: string;
    termsDescription: string;
    lastUpdated: string;
    questions: string;
    backHome: string;
    privacy: {
      intro: string;
      sections: { title: string; html: string }[];
    };
    terms: {
      intro: string;
      sections: { title: string; html: string }[];
    };
  };
  language: {
    en: string;
    ar: string;
    switchTo: string;
  };
  theme: {
    label: string;
    dark: string;
    light: string;
  };
};
