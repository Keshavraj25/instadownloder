import React from "react";

import { useTranslations } from "next-intl";

import { ArrowDown } from "lucide-react";

import { homeLinks, homeSections } from "@/lib/constants";
import { InstagramForm } from "@/components/instagram-form";

export function Hero() {
  const t = useTranslations("pages.home.hero");

  return (
    <section
      id={homeSections.hero}
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-12 md:py-24 lg:py-32"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl neon-text">
              {t("title")}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[700px] text-lg md:text-2xl leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="w-full max-w-2xl glass-card p-4 md:p-8 rounded-[2rem] neon-glow">
            <InstagramForm className="max-w-none" />
          </div>

          <div className="pt-8">
            <a href={homeLinks.howItWorks} className="group flex flex-col items-center gap-4 transition-all hover:translate-y-1">
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                {t("learnMore")}
              </span>
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
