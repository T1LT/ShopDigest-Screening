import { promises as fs } from "fs";
import Card from "@/components/card";

type Collection = {
  title: string;
  description: string;
  numApps: number;
};

export default async function CardsGrid() {
  // reading data from local json file
  // in the actual code, we use server actions or client component + useEffect to fetch collections
  const file = await fs.readFile(process.cwd() + "/public/collections.json", "utf8");
  const collections = JSON.parse(file);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {collections ? collections.map((collection: Collection, idx: number) => (
        <Card
          title={collection.title}
          description={collection.description}
          numApps={collection.numApps}
          key={idx}
        />
      )) : <></>}
      {/* ideally we show skeletons while the collections are being fetched */}
    </div>
  );
}
