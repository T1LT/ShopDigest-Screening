export default function Home() {
  return (
    <div className="px-20 py-12 flex flex-col gap-6">
      {/* top section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">Top shopify collections</h1>
          <p className="text-sm text-neutral-700">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        </div>
        <a href="#" className="text-sm text-blue-500 hover:underline underline-offset-2 transition">See all</a>
      </div>
    </div>
  );
}
