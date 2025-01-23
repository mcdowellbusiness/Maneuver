import HomePageBackground from "@/atoms/background/Home";
import Hero from "@/components/hero/Home";

export default function Home() {
  return (
    <main className="relative z-0">
      <HomePageBackground />
      <Hero />
      {/* <CompanyIcons /> */}
    </main>
  );
}
