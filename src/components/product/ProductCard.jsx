import Icon from "../ui/Icon.jsx";
import Rating from "./Rating.jsx";

export default function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/10 dark:border-white/10 dark:bg-white/5">
      <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-white/10">
        <img className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={product.image} alt={product.name} />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">{product.discount}</span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">{product.badge}</span>
        </div>
        <button className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-neutral-700 shadow-sm transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40" type="button" aria-label={`Add ${product.name} to wishlist`}>
          <Icon name="heart" size={18} strokeWidth={2} />
        </button>
        <button className="absolute inset-x-4 bottom-4 inline-flex h-11 translate-y-2 items-center justify-center gap-2 rounded-2xl bg-ink text-sm font-semibold text-white opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent/40 dark:bg-white dark:text-ink" type="button">
          <Icon name="eye" size={17} strokeWidth={2} />
          Quick View
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{product.category}</p>
        <h3 className="mt-2 min-h-12 text-base font-semibold leading-6">{product.name}</h3>
        <div className="mt-3"><Rating value={product.rating} reviews={product.reviews} /></div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="flex min-w-0 flex-wrap items-baseline gap-x-2">
            <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
            <span className="text-sm text-neutral-400 line-through">${product.oldPrice.toFixed(2)}</span>
          </p>
          <button className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-accent/40" type="button">
            <Icon name="card" size={16} strokeWidth={2.2} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
