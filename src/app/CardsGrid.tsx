import Card from "@/components/card";

type Collection = {
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
  const collections = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {collections ? collections.map((collection: Collection, idx: number) => (
        <Card
          collection={collection}
          key={idx}
        />
      )) : <></>}
      {/* ideally we show skeletons while the collections are being fetched */}
    </div>
  );
}
