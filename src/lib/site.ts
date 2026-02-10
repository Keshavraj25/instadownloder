import { Metadata } from "next";

export const siteConfig = {
  name: "GramGrabberz Pro",
  domain: "gram-grabberz.vercel.com",
  shortName: "GramGrabberz",
  creator: "riad-azz",
  description:
    "The ultimate professional Instagram video downloader. Save Reels, Videos, and Stories in high definition (1080p) instantly. No login required, fast, and 100% free.",
  ogDescription:
    "Download Instagram Videos & Reels in HD with GramGrabberz Pro. Fast, free, and secure downloader for all your Instagram content saving needs.",
  url: "https://gram-grabberz.vercel.com",
};

export const siteMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    creator: siteConfig.creator,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/webmanifest.json",
};
