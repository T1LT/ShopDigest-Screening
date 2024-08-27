import clsx from "clsx";

export default function Button({ label, type }: { label: string, type: "primary" | "secondary" }) {
  return (
    <button
      className={clsx(
        "px-5 py-1.5 font-semibold border border-purple-600 rounded-lg text-purple-600 transition",
        type === "primary" ? "hover:bg-purple-100/75" : "bg-purple-600 text-white hover:bg-purple-700",
      )}
    >
      {label}
    </button>
  );
}
