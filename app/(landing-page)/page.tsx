
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="background-black">
      <div className=" mx-auto background-black  h-screen max-w-7xl  px-4">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
