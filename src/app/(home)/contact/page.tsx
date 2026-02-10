import React from "react";
import { useTranslations } from "next-intl";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    const t = useTranslations("pages.contact");

    return (
        <div className="container mx-auto px-4 py-24 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl neon-text">
                        {t("title")}
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-card p-8 rounded-2xl space-y-6">
                            <h2 className="text-2xl font-bold text-primary">{t("info.title")}</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">{t("info.emailLabel")}</p>
                                        <p className="text-foreground">support@gramgrabberz.pro</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">{t("info.responseLabel")}</p>
                                        <p className="text-foreground">{t("info.responseTime")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8 rounded-2xl">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">
                                    {t("form.nameLabel")}
                                </label>
                                <Input
                                    placeholder={t("form.namePlaceholder")}
                                    className="glass-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">
                                    {t("form.emailLabel")}
                                </label>
                                <Input
                                    type="email"
                                    placeholder={t("form.emailPlaceholder")}
                                    className="glass-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">
                                    {t("form.messageLabel")}
                                </label>
                                <Textarea
                                    placeholder={t("form.messagePlaceholder")}
                                    className="glass-input min-h-[150px]"
                                />
                            </div>
                            <Button className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-6 rounded-xl shadow-lg shadow-primary/20 group">
                                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                {t("form.submitButton")}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
