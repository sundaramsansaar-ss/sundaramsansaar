import Icon from "../ui/Icon.jsx";

const services = [
  { title: "Fast shipping", text: "Free express delivery on qualified orders.", icon: "truck" },
  { title: "Easy returns", text: "30-day return window with clear tracking.", icon: "rotate" },
  { title: "Secure payments", text: "PCI-ready checkout flow for future APIs.", icon: "card" },
  { title: "Live support", text: "Responsive help entry points across devices.", icon: "headphones" }
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, text, icon }) => (
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5" key={title}>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-accent dark:bg-accent/15">
              <Icon name={icon} size={22} strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
