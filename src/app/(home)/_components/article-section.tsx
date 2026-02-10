"use client";

import React from "react";
import { useTranslations } from "next-intl";

export function ArticleSection() {
  const t = useTranslations("pages.home.article");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-medium">
            {t("badge")}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl neon-text">
            {t("title")}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto mb-16">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl shadow-[0_0_30px_rgba(255,100,200,0.05)] border-primary/10">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {t("intro.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("intro.content")}
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl shadow-[0_0_30px_rgba(255,100,200,0.05)] border-primary/10">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {t("features.title")}
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">{t("features.p1")}</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">{t("features.p2")}</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">{t("features.p3")}</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl shadow-[0_0_30px_rgba(255,100,200,0.05)] border-primary/10 h-full">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              {t("stepByStep.title")}
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                <p className="text-muted-foreground leading-relaxed italic">{t("stepByStep.p1")}</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                <p className="text-muted-foreground leading-relaxed italic">{t("stepByStep.p2")}</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                <p className="text-muted-foreground leading-relaxed italic">{t("stepByStep.p3")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Detailed Guide Section */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-12 rounded-[3rem] border-primary/20 shadow-[0_0_50px_rgba(255,100,200,0.1)]">
            <h3 className="text-3xl font-bold mb-8 text-center neon-text italic">
              {t("guide.title")}
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto md:mx-0">
                  <span className="font-bold">Pro</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("guide.p1")}</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto md:mx-0">
                  <span className="font-bold">Fast</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("guide.p2")}</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto md:mx-0">
                  <span className="font-bold">Safe</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("guide.p3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
