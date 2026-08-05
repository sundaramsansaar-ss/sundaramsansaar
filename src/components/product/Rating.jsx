import Icon from "../ui/Icon.jsx";

export default function Rating({ value, reviews }) {
  return (
    <div className="flex items-center gap-2 text-sm" aria-label={`${value} out of 5 stars from ${reviews} reviews`}>
      <span className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon key={index} name="star" size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <span className="font-medium">{value}</span>
      <span className="text-neutral-500 dark:text-neutral-400">({reviews})</span>
    </div>
  );
}
