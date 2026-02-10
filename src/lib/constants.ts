export const homeSections = {
  hero: "hero",
  features: "features",
  howItWorks: "how-it-works",
  testimonials: "testimonials",
  frequentlyAsked: "faq",
} as const;

export const homeLinks = {
  hero: "#" + homeSections.hero,
  features: "#" + homeSections.features,
  howItWorks: "#" + homeSections.howItWorks,
  testimonials: "#" + homeSections.testimonials,
  frequentlyAsked: "#" + homeSections.frequentlyAsked,
  home: "/",
  terms: "/terms",
  privacy: "/privacy",
  contact: "/contact",
} as const;
