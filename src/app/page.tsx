import Button from "@/components/button";

export default function Home() {
  return (
    <div className="flex items-center justify-between border-b px-8 py-4">
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
        <h2>Features</h2>
        <h2>Marketplace</h2>
        <h2>Company</h2>
        <h2>Team</h2>
        <h2>Contact</h2>
      </div>

      {/* navbar right side */}
      <div className="flex gap-3">
        <Button label="Login" type="primary" />
        <Button label="Add post" type="secondary" />
      </div>
    </div>
  );
}
