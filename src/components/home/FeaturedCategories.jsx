import { categories } from "../../data/categories";
import SectionHeader from "./SectionHeader.jsx";

export default function FeaturedCategories() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Featured categories"
        title="Curated entry points for every shopper"
        description="Designed as admin-managed category cards with image, copy, and product counts."
        action={{ href: "#all-categories", label: "View all" }}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <a className="group grid grid-cols-[96px_1fr] gap-4 rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/10 dark:border-white/10 dark:bg-white/5" href="#category" key={category.id}>
            <img className="h-24 w-24 rounded-2xl object-cover" src={category.image} alt={category.name} />
            <span className="flex min-w-0 flex-col justify-center">
              <strong className="text-lg font-semibold">{category.name}</strong>
              <span className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{category.description}</span>
              <span className="mt-3 text-sm font-semibold text-accent">{category.productCount} products</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
