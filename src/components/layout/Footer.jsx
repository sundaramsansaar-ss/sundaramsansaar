const footerGroups = [
  { title: "Shop", links: ["New Arrivals", "Best Sellers", "Flash Sale", "Gift Cards"] },
  { title: "Company", links: ["About", "Careers", "Journal", "Sustainability"] },
  { title: "Support", links: ["Contact", "Shipping", "Returns", "Size Guide"] }
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white dark:bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.35fr_2fr] lg:px-8">
        <div>
          <a className="flex items-center gap-3" href="/">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-lg font-black">S</span>
            <span className="text-xl font-semibold">Sundaram Sansaar</span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-6 text-neutral-300">
            Premium commerce UI built from reusable React sections, static data, and API-ready content boundaries.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                {group.links.map((link) => (
                  <li key={link}><a className="transition hover:text-accent" href="#footer">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-neutral-400">
        © 2026 ShopSphere. Static storefront concept, ready for dynamic integrations.
      </div>
    </footer>
  );
}
