import Button from "@/components/button";

export default function Home() {
  return (
    <div>
      <div className="bg-white flex items-center justify-between border-b px-8 py-4 sticky top-0">
        {/* navbar left side */}
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-2xl text-purple-700">ShopDigest</h1>
          <p className="text-neutral-200 font-light">|</p>
          <select className="font-semibold text-neutral-600">
            <option value="shopify">Shopify</option>
            <option value="wordpress">Wordpress</option>
            <option value="bigcommerce">Bigcommerce</option>
          </select>
        </div>

        {/* navbar middle */}
        <div className="flex items-center gap-8 font-semibold text-neutral-700">
          <a href="#" className="hover:text-purple-600">Features</a>
          <a href="#" className="hover:text-purple-600">Marketplace</a>
          <a href="#" className="hover:text-purple-600">Company</a>
          <a href="#" className="hover:text-purple-600">Team</a>
          <a href="#" className="hover:text-purple-600">Contact</a>
        </div>

        {/* navbar right side */}
        <div className="flex gap-3">
          <Button label="Login" type="primary" />
          <Button label="Add post" type="secondary" />
        </div>
      </div>
    </div>
  );
}
