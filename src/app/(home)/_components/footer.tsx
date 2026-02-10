import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("layouts.home.footer");

  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-secondary/5 py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-xl font-bold neon-text">InstaDownloader</p>
          <p className="text-muted-foreground text-sm">
            {t("copyright", { year })}
          </p>
        </div>
        <div className="flex gap-8">
          <Link
            href="/terms"
            className="text-muted-foreground text-sm hover:text-primary transition-colors font-medium"
          >
            {t("links.terms")}
          </Link>
          <Link
            href="/privacy"
            className="text-muted-foreground text-sm hover:text-primary transition-colors font-medium"
          >
            {t("links.privacy")}
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground text-sm hover:text-primary transition-colors font-medium"
          >
            {t("links.contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
