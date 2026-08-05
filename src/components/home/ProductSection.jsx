import ProductCard from "../product/ProductCard.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function ProductSection({ eyebrow, title, description, products }) {
  return (
    <section id={eyebrow.toLowerCase().replaceAll(" ", "-")} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} action={{ href: "#shop", label: "View collection" }} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
