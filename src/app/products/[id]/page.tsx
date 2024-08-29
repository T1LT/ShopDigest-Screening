import { ChevronDown, ChevronRight, CircleDollarSign, House, Info, SlidersHorizontal, Square, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({ params }: { params: { id: number } }) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  // ideally, proper checks for product + skeletons
  // suspense is a good alternative
  if (!product) return <></>;

  const ratingInWords = (rating: number) => {
    if (rating >= 4.0) return "Excellent";
    else if (rating >= 2.6) return "Good";
    else if (rating >= 2.0) return "Average";
    else if (rating < 2.0) return "Bad";
  };

  return (
    <div>
      <div className="flex flex-col gap-4 md:gap-6">
        {/* breadcrumbs */}
        <div className="px-8 pt-4 xl:px-20 xl:pt-12 flex items-center gap-2">
          <House className="h-4 w-4 min-h-4 min-w-4" />
          <ChevronRight className="h-4 w-4 min-h-4 min-w-4" />
          <Link href="/" className="font-medium text-sm hover:underline transition">Products</Link>
          <ChevronRight className="h-4 w-4 min-h-4 min-w-4" />
          <span className="font-medium text-sm text-neutral-500 truncate">{product.title}</span>
        </div>

        {/* header */}
        <div className="px-8 xl:px-20 flex flex-col gap-2">
          <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm text-neutral-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec velit dictum, maximus ligula vitae, tempor diam. Mauris sodales dui nec libero eleifend lacinia sed at eros. Nam id mollis nunc, vel aliquam enim. Phasellus mattis posuere auctor. Aenean facilisis, lectus sed feugiat tincidunt, orci mi dignissim sem, vitae sollicitudin felis augue eu ante. Maecenas ut sagittis est. Integer porta dapibus orci id placerat.</p>
        </div>

        {/* filters */}
        <div className="flex justify-center border-y py-4 font-semibold">
          <div className="w-[90%] md:w-[80%] flex items-center justify-end gap-4 md:gap-0 md:justify-between">
            {/* left group */}
            <div className="flex gap-4">
              <button className="px-3 py-1 flex items-center gap-1 rounded-full border-2 hover:bg-neutral-100 transition">
                <SlidersHorizontal className="h-4 w-4" />
                <span>All filters</span>
              </button>

              <button className="hidden md:flex px-3 py-1 items-center gap-1 rounded-full border-2 border-purple-600 text-white bg-purple-600 hover:bg-purple-700 hover:border-purple-700 transition">
                <span>People</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <button className="hidden md:flex px-3 py-1 items-center gap-1 rounded-full border-2 border-purple-600 text-white bg-purple-600 hover:bg-purple-700 hover:border-purple-700 transition">
                <span>Locations</span>
                <span className="px-1.5 font-normal text-sm bg-white text-black rounded-full">2</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <button className="hidden lg:flex px-3 py-1 items-center gap-1 rounded-full border-2 hover:bg-neutral-100 transition">
                <Square className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span>Seniority</span>
              </button>

              <div className="hidden xl:flex items-center rounded-full border-2 divide-x-2">
                <span className="pl-3 pr-2 py-1 hover:bg-neutral-100 transition rounded-l-full cursor-pointer">1st</span>
                <span className="px-2 py-1 hover:bg-neutral-100 transition cursor-pointer">2nd</span>
                <span className="pl-2 pr-3 py-1 hover:bg-neutral-100 transition rounded-r-full cursor-pointer">3rd+</span>
              </div>

              <button className="hidden 2xl:flex px-3 py-1 items-center gap-1 rounded-full border-2 hover:bg-neutral-100 transition">
                <span>Current company</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="hidden md:block border"></div>

              <button className="hidden md:block">Reset</button>
            </div>

            {/* right group */}
            <button className="px-3 py-1 flex items-center gap-1 rounded-full border-2 hover:bg-neutral-100 transition">
              <span>Order by</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* product card */}
        <div className="flex justify-center">
          <div className="w-[90%] md:w-[80%] flex flex-col gap-2">
            <div className="p-4 lg:p-6 flex flex-col lg:flex-row justify-between gap-6 border rounded-md">
              <center className="min-w-[200px] h-auto flex items-center justify-center">
                {/* show blurred image while loading */}
                {/* ideally the image width and height come in through the api for the image to not jump upon load */}
                <Image src={product.image} alt={product.title} width={200} height={300} />
              </center>
              {/* middle section */}
              <div className="lg:px-6 flex flex-col justify-between gap-6">
                {/* product header */}
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-xl">{product.title}</h1>
                  <p className="text-sm text-neutral-700">{product.description}</p>
                </div>

                <div>
                  {/* pricing plans */}
                  <div className="flex flex-col gap-2 divide-y">
                    <div className="pb-4">
                      <p className="flex items-center gap-2 mb-2">
                        <CircleDollarSign className="h-5 w-5 text-green-500" />
                        <span className="font-semibold text-sm">Pricing plans</span>3
                      </p>

                      <div className="flex items-center gap-2 font-semibold text-sm">
                        <span className="px-2 py-1 bg-neutral-100 text-neutral-700 border rounded-md">{`$${Math.round(product.price / 6)} / month`}</span>
                        <span className="px-2 py-1 bg-neutral-100 text-neutral-700 border rounded-md">{`$${Math.round(product.price / 5)} / month`}</span>
                        <span className="px-2 py-1 bg-neutral-100 text-neutral-700 border rounded-md">{`$${Math.round(product.price / 4)} / month`}</span>
                      </div>
                    </div>

                    {/* market details */}
                    <div className="flex justify-between pt-4">
                      <div>
                        <h2 className="flex items-center gap-1 font-semibold text-sm">
                          Points
                          <Info className="h-4 w-4 text-blue-500" />
                        </h2>
                        <p>{product.rating.count}</p>
                      </div>
                      <div>
                        <h2 className="font-semibold text-sm">Market Share</h2>
                        <p>10%</p>
                      </div>
                      <div>
                        <h2 className="font-semibold text-sm">Launch Date</h2>
                        <p>{(new Date()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "2-digit" })}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t lg:border-l"></div>

              {/* right section */}
              <div className="w-full min-w-[200px] md:w-auto flex justify-between md:justify-center py-2">
                <div className="w-full flex flex-row lg:flex-col justify-between items-center gap-4">
                  {/* reviews/rating */}
                  <div className="w-[50%] lg:w-full flex justify-center items-center gap-2 lg:gap-4">
                    <div className="w-full text-right">
                      <h2 className="font-semibold">{ratingInWords(product.rating.rate)}</h2>
                      <p className="text-neutral-700 text-xs">{product.rating.count} reviews</p>
                    </div>
                    <h1 className="w-full flex items-center gap-2 font-bold text-2xl md:text-3xl">
                      {product.rating.rate.toFixed(1)}
                      <Star className="h-6 w-6 md:h-8 md:w-8 fill-yellow-300" />
                    </h1>
                  </div>

                  {/* buttons */}
                  <div className="w-[50%] lg:w-full flex flex-col gap-2">
                    <button className="lg:w-full py-1.5 font-semibold text-white bg-purple-600 rounded-lg border-purple-700 hover:bg-purple-700 hover:border-purple-700 transition">
                      People
                    </button>
                    <button className="lg:w-full py-1.5 font-semibold border rounded-lg hover:bg-neutral-100 transition">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
