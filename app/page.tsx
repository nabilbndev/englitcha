import Advert from "./_components/homepage/Advert";
import Hero from "./_components/homepage/Hero";
import Support from "./_components/homepage/Support";
import Time from "./_components/homepage/Time";


export default function Home() {
  return (
    <main className="py-5 flex flex-col gap-10 mx-auto max-w-7xl px-5">
      <Hero />
      <Time />
      <Support />
      <Advert />
    </main>
  );
}

