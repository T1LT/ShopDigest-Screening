import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Card({ title, description, numApps }: { title: string, description: string, numApps: number }) {
  return (
    <div className="h-[250px] p-4 flex flex-col justify-between border rounded-lg">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm text-neutral-700">{description}</p>
      </div>
      <div className="divide-y">
        <div className="flex items-center gap-2 pb-4">
          <Image src="/logos/instagram.png" alt="instagram logo" height={32} width={32} className="rounded-lg" />
          <Image src="/logos/snapchat.png" alt="snapchat logo" height={32} width={32} className="rounded-lg" />
          <Image src="/logos/twitter.png" alt="twitter logo" height={32} width={32} className="rounded-lg" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-purple-600 font-medium">{numApps} Apps</span>
          <button className="flex items-center gap-2 px-2.5 py-1.5 text-xs bg-black text-white rounded-full hover:bg-neutral-700 transition">
            Explore more
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
