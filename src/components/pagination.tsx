"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

export default function Pagination() {
  // ideally this state comes in from the parent
  const [page, setPage] = useState<number>(1);

  const decrementPage = () => {
    if (page === 1) return;
    setPage(prev => prev - 1);
  };

  const incrementPage = () => {
    // use max number of pages here instead of 100
    if (page === 100) return;
    setPage(prev => prev + 1);
  };

  return (
    <div className="p-4 flex items-center justify-center sm:justify-between border rounded-lg text-sm">
      {/* left */}
      <p className="hidden sm:block">Showing <span className="font-bold">1-10</span> of <span className="font-bold">1000</span></p>

      {/* middle */}
      <div className="hidden md:block">
        <button 
          className="w-[80px] px-3 py-1.5 border-t border-b border-l rounded-l-lg hover:bg-neutral-100 transition"
          onClick={decrementPage}
        >
          Previous
        </button>
        <button 
          className="w-[80px] px-3 py-1.5 border rounded-r-lg hover:bg-neutral-100 transition"
          onClick={incrementPage}
        >
          Next
        </button>
      </div>

      {/* right */}
      <div className="flex items-center">
        <button 
          className="px-3 py-1.5 border-t border-b border-l rounded-l-lg hover:bg-neutral-100 transition"
          onClick={decrementPage}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          className={clsx("px-3 py-1.5 border-t border-b border-l hover:bg-neutral-100 transition", page === 1 && "border-b-blue-500 bg-blue-200/50")}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button 
          className={clsx("px-3 py-1.5 border-t border-b border-l hover:bg-neutral-100 transition", page === 2 && "border-b-blue-500 bg-blue-200/50")}
          onClick={() => setPage(2)}
        >
          2
        </button>
        <button 
          className={clsx("px-3 py-1.5 border-t border-b border-l hover:bg-neutral-100 transition", page === 3 && "border-b-blue-500 bg-blue-200/50")}
          onClick={() => setPage(3)}
        >
          3
        </button>
        <button className="px-3 py-1.5 border-t border-b border-l cursor-default">...</button>
        <button 
          className={clsx("px-3 py-1.5 border-t border-b border-l hover:bg-neutral-100 transition", page === 100 && "border-b-blue-500 bg-blue-200/50")}
          onClick={() => setPage(100)}
        >
          100
        </button>
        <button 
          className="px-3 py-1.5 border rounded-r-lg hover:bg-neutral-100 transition"
          onClick={incrementPage}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
