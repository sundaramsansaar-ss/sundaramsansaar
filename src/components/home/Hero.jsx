import { heroBanner } from "../../data/banners";
import { categories } from "../../data/categories";
import Icon from "../ui/Icon.jsx";

export default function Hero() {
  return (
    <section id="home" className="border-b border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-950">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-8">
        <aside className="hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/5 lg:block">
          <div className="border-b border-neutral-200 px-3 py-3 dark:border-white/10">
            <p className="text-sm font-semibold">Shop by category</p>
          </div>
          <div className="mt-2 space-y-1">
            {categories.map((category) => (
              <a className="group flex items-center gap-3 rounded-2xl p-3 transition hover:bg-neutral-50 dark:hover:bg-white/10" href="#categories" key={category.id}>
                <img className="h-12 w-12 rounded-xl object-cover" src={category.image} alt="" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold group-hover:text-accent">{category.name}</span>
                  <span className="block truncate text-xs text-neutral-500 dark:text-neutral-400">{category.productCount} products</span>
                </span>
                <Icon name="chevronRight" className="text-neutral-300 transition group-hover:text-accent" size={16} strokeWidth={2} />
              </a>
            ))}
          </div>
        </aside>

        <div className="relative min-h-[460px] overflow-hidden rounded-2xl bg-neutral-100 shadow-xl shadow-neutral-900/10 dark:bg-white/5">
          <img className="absolute inset-0 h-full w-full object-cover object-center" src={heroBanner.image} alt="Premium lifestyle collection" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/20 dark:from-neutral-950 dark:via-neutral-950/82 dark:to-neutral-950/10" />
          <div className="relative flex min-h-[460px] max-w-2xl flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">{heroBanner.eyebrow}</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[56px]">
              {heroBanner.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
              {heroBanner.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-6 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-accent/40" href="#trending-now">
                {heroBanner.primaryCta}
                <Icon name="chevronRight" size={17} strokeWidth={2.2} />
              </a>
              <a className="inline-flex h-12 items-center justify-center rounded-2xl border border-neutral-300 bg-white/75 px-6 text-sm font-semibold backdrop-blur transition hover:border-accent hover:text-accent dark:border-white/10 dark:bg-neutral-950/60" href="#new-arrivals">
                {heroBanner.secondaryCta}
              </a>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
              {heroBanner.stats.map((stat) => (
                <div className="rounded-2xl border border-neutral-200 bg-white/80 p-4 backdrop-blur dark:border-white/10 dark:bg-neutral-950/60" key={stat.label}>
                  <strong className="block text-xl font-semibold">{stat.value}</strong>
                  <span className="mt-1 block text-xs text-neutral-500 dark:text-neutral-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
