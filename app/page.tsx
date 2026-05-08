import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/featured";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden min-h-screen">
      <Navbar />
      <Hero />
      <Featured />
    </main>
  );
}