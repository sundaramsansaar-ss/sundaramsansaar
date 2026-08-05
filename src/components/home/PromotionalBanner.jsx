import { promoBanner } from "../../data/banners";

export default function PromotionalBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-900/10 lg:grid-cols-[0.95fr_1.05fr] dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{promoBanner.eyebrow}</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{promoBanner.title}</h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-600 dark:text-neutral-300">{promoBanner.description}</p>
          <a className="mt-7 inline-flex h-12 w-fit items-center justify-center rounded-2xl bg-ink px-6 text-sm font-semibold text-white transition hover:bg-accent dark:bg-white dark:text-ink" href="#offers">
            {promoBanner.cta}
          </a>
        </div>
        <img className="h-72 w-full object-cover lg:h-full" src={promoBanner.image} alt="Premium promotional product" />
      </div>
    </section>
  );
}
