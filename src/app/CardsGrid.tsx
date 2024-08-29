import Card from "@/components/card";

export type Collection = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
};

export default async function CardsGrid() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const collections: Collection[] = await res.json();

  if (!collections || collections.length === 0) {
    return <div>No collections found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {collections.map((collection: Collection, idx: number) => (
        <Card collection={collection} key={idx} />
      ))}
    </div>
  );
}

// would use getStaticProps/SSG for this, but it isnt a page
