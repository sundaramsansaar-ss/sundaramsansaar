import Icon from "../ui/Icon.jsx";

const links = ["Home", "Shop", "Categories", "Deals", "New Arrivals", "Best Sellers", "Support"];

export default function NavigationMenu() {
  return (
    <nav className="hidden h-14 border-b border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-950 lg:block" aria-label="Primary navigation">
      <div className="mx-auto grid h-full max-w-7xl grid-cols-[240px_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-accent dark:bg-white dark:text-ink" type="button">
          <Icon name="grid" size={17} strokeWidth={2} />
          Browse Categories
        </button>

        <div className="flex h-full min-w-0 items-center justify-center gap-1">
          {links.map((link, index) => (
            <a
              className={`inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition ${
                index === 0
                  ? "bg-orange-50 text-accent dark:bg-accent/15"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-ink dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              key={link}
            >
              {link}
            </a>
          ))}
        </div>

        <a className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 text-sm font-semibold text-accent transition hover:border-accent hover:bg-orange-100 dark:border-accent/25 dark:bg-accent/10" href="#deals">
          <Icon name="flame" size={16} strokeWidth={2.2} />
          Hot Offers
        </a>
      </div>
    </nav>
  );
}
