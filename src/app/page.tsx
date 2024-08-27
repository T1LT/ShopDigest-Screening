import { ArrowRight } from "lucide-react";
import Image from "next/image";

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

      {/* cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {Array.from(Array(20).keys()).map((_, idx) => (
          <div className="h-[250px] p-4 flex flex-col justify-between border rounded-lg" key={idx}>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Lorem Ipsum</h1>
              <p className="text-sm text-neutral-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed vestibulum turpis. Duis luctus gravida.</p>
            </div>
            <div className="divide-y">
              <div className="flex items-center gap-2 pb-4">
                <Image src="/logos/instagram.png" alt="instagram logo" height={32} width={32} className="rounded-lg" />
                <Image src="/logos/snapchat.png" alt="snapchat logo" height={32} width={32} className="rounded-lg" />
                <Image src="/logos/twitter.png" alt="twitter logo" height={32} width={32} className="rounded-lg" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-purple-600 font-medium">104 Apps</span>
                <button className="flex items-center gap-2 px-2.5 py-1.5 text-xs bg-black text-white rounded-full hover:bg-neutral-700 transition">
                  Explore more
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
