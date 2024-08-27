import { Menu, CircleUserRound } from "lucide-react";
import Button from "./button";

export default function Navbar() {
  return (
    <nav className="bg-white flex items-center justify-between border-b px-4 xl:px-8 py-4 sticky top-0">
      {/* navbar left side */}
      <div className="flex items-center gap-2">
        <Menu className="h-5 w-5 inline-block xl:hidden hover:cursor-pointer mr-2" />
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
        <a href="#" className="hover:text-purple-600 transition">Features</a>
        <a href="#" className="hover:text-purple-600 transition">Marketplace</a>
        <a href="#" className="hover:text-purple-600 transition">Company</a>
        <a href="#" className="hover:text-purple-600 transition">Team</a>
        <a href="#" className="hover:text-purple-600 transition">Contact</a>
      </div>

      {/* navbar right side */}
      <div className="hidden xl:flex xl:gap-3">
        <Button label="Login" type="primary" />
        <Button label="Add post" type="secondary" />
      </div>
      <div className="flex items-center gap-3 xl:hidden">
        <Button label="Add post" type="secondary" />
        <CircleUserRound className="h-6 w-6 text-purple-600" />
      </div>
    </nav>
  );
}
