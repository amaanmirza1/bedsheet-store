import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/featured";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section
        id="featured"
        className="px-4 sm:px-6 md:px-10 lg:px-16 py-20"
      >
        <Featured />
      </section>

    </main>
  );
}