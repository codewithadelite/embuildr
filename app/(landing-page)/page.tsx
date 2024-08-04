import Navbar from "@/components/ui/navbar";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="background-black">
      <div className="relative flex flex-col  mx-auto background-black  h-min-screen max-w-7xl  px-4">
        <Navbar />
        <div className="flex-1">
          <div className="h-full w-full flex items-center justify-center">
            <div>
              <Hero />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
