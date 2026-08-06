import Icon from "../ui/Icon.jsx";

const actionClass =
  "relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200";

export default function Header({ isDark, onToggleTheme }) {
  const iconSize = 19;

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/92 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/90">
      
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-4 lg:grid-cols-[240px_minmax(420px,1fr)_240px]">
          <div className="flex items-center gap-3">
            <button className={actionClass + " lg:hidden"} type="button" aria-label="Open menu">
              <Icon name="menu" size={iconSize} strokeWidth={2} />
            </button>
            <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Sundaram Sansaar home">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent text-lg font-black text-white shadow-lg shadow-orange-500/20">
                <img src="src\public\image\SUNDARAM SANSAAR (1).jpg"/>
              </span>
              
              <span className="truncate text-xl font-semibold tracking-tight">Sundaram Sansaar</span>
            </a>
          </div>

          <form className="hidden h-12 min-w-0 items-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-50 shadow-sm transition focus-within:border-accent focus-within:bg-white focus-within:ring-4 focus-within:ring-orange-100 lg:flex dark:border-white/10 dark:bg-white/5 dark:focus-within:bg-white/10 dark:focus-within:ring-orange-500/10">
            <select className="h-full w-44 border-r border-neutral-200 bg-transparent px-5 text-sm font-medium text-neutral-600 outline-none dark:border-white/10 dark:text-neutral-300" aria-label="Search category">
              <option>All Categories</option>
              <option>Audio</option>
              <option>Wearables</option>
              <option>Home Studio</option>
              <option>Travel</option>
            </select>
            <input className="h-full min-w-0 flex-1 bg-transparent px-5 text-sm outline-none placeholder:text-neutral-400" type="search" placeholder="Search headphones, bags, watches..." aria-label="Search products" />
            <button className="mr-1 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-accent dark:bg-white dark:text-ink" type="submit" aria-label="Search">
              <Icon name="search" size={16} strokeWidth={2.2} />
              <span>Search</span>
            </button>
          </form>

          <div className="flex items-center justify-end gap-2">
            <button className={actionClass} type="button" onClick={onToggleTheme} aria-label="Toggle dark mode" title="Theme">
              {isDark ? <Icon name="sun" size={iconSize} strokeWidth={2} /> : <Icon name="moon" size={iconSize} strokeWidth={2} />}
            </button>
            <a className={`${actionClass} hidden sm:inline-flex`} href="#wishlist" aria-label="Wishlist" title="Wishlist">
              <Icon name="heart" size={iconSize} strokeWidth={2} />
            </a>
            <a className={`${actionClass} hidden md:inline-flex`} href="#account" aria-label="Account" title="Account">
              <Icon name="user" size={iconSize} strokeWidth={2} />
            </a>
            <a className={actionClass} href="#cart" aria-label="Cart" title="Cart">
              <Icon name="bag" size={iconSize} strokeWidth={2} />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-xs font-bold text-white">2</span>
            </a>
          </div>
        </div>

        <form className="mt-4 flex h-12 items-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-50 shadow-sm lg:hidden dark:border-white/10 dark:bg-white/5">
          <input className="h-full min-w-0 flex-1 bg-transparent px-5 text-sm outline-none placeholder:text-neutral-400" type="search" placeholder="Search products..." aria-label="Search products" />
          <button className="mr-1 inline-flex h-10 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white dark:bg-white dark:text-ink" type="submit" aria-label="Search">
            <Icon name="search" size={16} />
            <span className="hidden sm:inline">Search</span>
          </button>
        </form>
      </div>
    </header>
  );
}
