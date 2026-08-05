import AnnouncementBar from "../components/layout/AnnouncementBar.jsx";
import Header from "../components/layout/Header.jsx";
import NavigationMenu from "../components/layout/NavigationMenu.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/home/Hero.jsx";
import FeaturedCategories from "../components/home/FeaturedCategories.jsx";
import Services from "../components/home/Services.jsx";
import ProductSection from "../components/home/ProductSection.jsx";
import FlashSale from "../components/home/FlashSale.jsx";
import PromotionalBanner from "../components/home/PromotionalBanner.jsx";
import { getProductsByTag } from "../services/productService.js";

export default function Home({ isDark, onToggleTheme }) {
  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <AnnouncementBar />
      <Header isDark={isDark} onToggleTheme={onToggleTheme} />
      <NavigationMenu />
      <main className="bg-paper dark:bg-neutral-950">
        <Hero />
        <FeaturedCategories />
        <Services />
        <ProductSection
          eyebrow="Trending now"
          title="Products shoppers are choosing this week"
          description="Static JSON today, ready for API filtering, sorting, and merchandising rules tomorrow."
          products={getProductsByTag("Trending").slice(0, 4)}
        />
        <FlashSale products={getProductsByTag("Flash Sale").slice(0, 4)} />
        <ProductSection
          eyebrow="New arrivals"
          title="Fresh additions for the season"
          description="Reusable product cards with sale badges, wishlist, quick view, ratings, and cart actions."
          products={getProductsByTag("New Arrival").slice(0, 4)}
        />
        <PromotionalBanner />
        <ProductSection
          eyebrow="Best sellers"
          title="Reliable favorites with premium finishing"
          description="This section can map directly to an admin-selected collection or REST endpoint."
          products={getProductsByTag("Best Seller").slice(0, 4)}
        />
      </main>
      <Footer />
    </div>
  );
}
