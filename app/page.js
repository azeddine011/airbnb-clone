import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        </section>
      </main>
    </div>
  );
}

const getData = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
