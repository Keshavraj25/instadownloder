import React from "react";
import { useTranslations } from "next-intl";

export default function TermsPage() {
    const t = useTranslations("pages.terms");

    return (
        <div className="container mx-auto px-4 py-24 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl neon-text">
                        {t("title")}
                    </h1>
                    <p className="text-muted-foreground italic">
                        {t("lastUpdated")}
                    </p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">{t("section1.title")}</h2>
                        <p>{t("section1.content")}</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">{t("section2.title")}</h2>
                        <p>{t("section2.content")}</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">{t("section3.title")}</h2>
                        <p>{t("section3.content")}</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">{t("section4.title")}</h2>
                        <p>{t("section4.content")}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
