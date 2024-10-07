import FaviconHeadlineGenerator from "@/components/Generator";

// add multiple fonts, add change image, get logo instead of favicon
export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <FaviconHeadlineGenerator />
    </main>
  );
}
