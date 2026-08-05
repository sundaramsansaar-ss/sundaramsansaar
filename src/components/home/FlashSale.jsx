import ProductCard from "../product/ProductCard.jsx";

export default function FlashSale({ products }) {
  return (
    <section id="deals" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-neutral-800 p-6 text-white shadow-xl shadow-neutral-900/15 sm:p-8 dark:from-white dark:to-neutral-200 dark:text-ink">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Flash sale</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Limited offers with clear urgency</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300 dark:text-neutral-700">Countdown-ready section for future inventory, discount, and promotion API data.</p>
          </div>
          <div className="flex gap-2 text-center">
            {["12h", "24m", "36s"].map((time) => (
              <span className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold dark:bg-black/5" key={time}>{time}</span>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
