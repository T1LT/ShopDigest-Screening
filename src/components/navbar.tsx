"use client";

import { useState } from "react";
import { Menu, CircleUserRound, ChevronDown } from "lucide-react";
import Button from "./button";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white flex flex-col border-b px-4 xl:px-8 py-4 sticky top-0">
      <div className="flex items-center justify-between">
        {/* navbar left side */}
        <div className="flex items-center gap-2">
          {open ? (
              <ChevronDown 
                className="h-5 w-5 inline-block xl:hidden hover:cursor-pointer mr-2" 
                onClick={() => setOpen(false)} 
              />
            ) : (
              <Menu
                className="h-5 w-5 inline-block xl:hidden hover:cursor-pointer mr-2"
                onClick={() => setOpen(true)}
              />
            )
          }
          <h1 className="hidden xl:block font-bold text-2xl text-purple-600">ShopDigest</h1>
          <h1 className="block xl:hidden font-bold text-2xl text-purple-600">SD</h1>
          <p className="text-neutral-200 font-light">|</p>
          <select className="text-sm xl:text-base font-semibold text-neutral-600 focus:outline-0">
            <option value="shopify">Shopify</option>
            <option value="wordpress">Wordpress</option>
            <option value="bigcommerce">Bigcommerce</option>
          </select>
        </div>

        {/* navbar middle */}
        <div className="hidden xl:flex items-center gap-8 font-semibold text-neutral-700">
          <NavLinks />
        </div>

        {/* navbar right side */}
        <div className="hidden xl:flex xl:gap-3">
          <Button label="Login" type="primary" />
          <Button label="Add post" type="secondary" />
        </div>
        <div className="flex items-center gap-3 xl:hidden">
          <Button label="Add post" type="secondary" />
          <CircleUserRound className="h-7 w-7 text-purple-600" />
        </div>
      </div>
      <div className={clsx("px-4 pt-4 flex flex-col gap-4 xl:hidden font-semibold text-neutral-700", open ? "flex" : "hidden")}>
        <NavLinks />
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <a href="#" className="hover:text-purple-600 transition">Features</a>
      <a href="#" className="hover:text-purple-600 transition">Marketplace</a>
      <a href="#" className="hover:text-purple-600 transition">Company</a>
      <a href="#" className="hover:text-purple-600 transition">Team</a>
      <a href="#" className="hover:text-purple-600 transition">Contact</a>
    </>
  );
}
