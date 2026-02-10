"use client";

import React from "react";

import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-is-mobile";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { LogoImage, LogoText } from "@/components/logo";
import { LocaleDropdown } from "@/features/i18n/locale-dropdown";
import { ThemeToggleButton } from "@/features/theme/theme-toggle-button";

import { Menu } from "lucide-react";
import Link from "next/link";
import { homeLinks } from "@/lib/constants";

export function Header() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  const t = useTranslations("layouts.home.header");

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: homeLinks.home, label: t("links.home") },
    { href: homeLinks.features, label: t("links.features") },
    { href: homeLinks.howItWorks, label: t("links.howItWorks") },
    { href: homeLinks.frequentlyAsked, label: t("links.frequentlyAsked") },
  ];

  const extraLinks = [
    { href: homeLinks.contact, label: t("links.contact") },
    { href: homeLinks.privacy, label: t("links.privacy") },
    { href: homeLinks.terms, label: t("links.terms") },
  ];

  React.useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/80">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              scrollUp();
            }
          }}
        >
          <LogoImage className="neon-glow rounded-lg" />
          <LogoText className="hidden sm:block" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <div className="border-border flex items-center gap-2 border-l pl-4">
            <LocaleDropdown />
            <ThemeToggleButton />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 ml-2">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] border-l bg-background/95 backdrop-blur-xl"
              >
                <SheetHeader className="mb-6 border-b pb-4">
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <LogoImage className="h-6 w-6" />
                      <LogoText />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigation</p>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Legal & Support</p>
                    {extraLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-auto border-t pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("themeLabel")}</span>
                      <ThemeToggleButton variant="outline" size="sm" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("localeLabel")}</span>
                      <LocaleDropdown variant="outline" size="sm" />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* Mobile Navigation Trigger - Always visible on mobile */}
        <div className="ml-auto flex items-center md:hidden gap-2">
          <LocaleDropdown variant="ghost" size="sm" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[350px] bg-background/95 backdrop-blur-xl"
            >
              <SheetHeader className="mb-6 border-b pb-4">
                <SheetTitle>
                  <div className="flex items-center gap-2">
                    <LogoImage className="h-6 w-6" />
                    <LogoText />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-8">
                <nav className="flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">Main Menu</p>
                  {[...navLinks, ...extraLinks].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-2 py-2 text-xl font-medium transition-colors hover:text-primary border-b border-border/40"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-4 bg-secondary/20 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{t("themeLabel")}</span>
                    <ThemeToggleButton variant="outline" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
