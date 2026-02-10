import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { HowItWorks } from "./_components/how-it-works";
import { Testimonials } from "./_components/testimonials";
import { FrequentlyAsked } from "./_components/frequently-asked";
import { ArticleSection } from "./_components/article-section";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Article Section */}
      <ArticleSection />

      {/* FAQ Section */}
      <FrequentlyAsked />
    </div>
  );
}
