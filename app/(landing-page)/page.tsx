import Navbar from "@/components/ui/navbar";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="background-black">
      <div className="flex flex-col mx-auto min-h-screen max-w-7xl  px-4">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div>
            <Hero/>
            <Footer/>
          </div>
        </div>
        
      </div>
    </main>
  );
}
