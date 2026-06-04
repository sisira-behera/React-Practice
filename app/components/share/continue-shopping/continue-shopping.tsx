"use client";
import { useRouter } from "@/i18n/navigation";

export default function ContinueShopping({ children, href}: { children?: React.ReactNode; href?: string }) {
  const router = useRouter();

  const handleNavigation = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    // Perform any business logic here (e.g., analytics logging, local state cleanup)
    console.log("Navigating programmatically...");
    const id = "1"; // Example dynamic ID, replace with actual logic if needed

    // Execute the routing push redirect with locale support
    router.push(`/products/${id}` as any);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button
        onClick={handleNavigation}
        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
      >
         { children ? children : "Continue..." }
      </button>
    </div>
  );
}
