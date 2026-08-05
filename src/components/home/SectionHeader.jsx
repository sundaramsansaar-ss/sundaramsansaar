export default function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">{eyebrow}</p>}
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">{description}</p>}
      </div>
      {action && <a className="text-sm font-semibold text-accent hover:text-orange-700" href={action.href}>{action.label}</a>}
    </div>
  );
}
