import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import MapComp from "@/components/Map";
import { data } from "autoprefixer";
import { format } from "date-fns";
import React, { Suspense } from "react";

async function page({ params, searchParams }) {
  const { location, startDate, endDate, guests } = searchParams;
  const formatedStartDate = format(new Date(startDate), "dd MMMM");
  const formatedEndDate = format(new Date(endDate), "dd MMMM");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  const searchResults = await getData();

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {guests} guest(s)
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="custom-button">Cancelation Flexibilty</p>
            <p className="custom-button">Type of Place</p>
            <p className="custom-button">Price</p>
            <p className="custom-button">Rooms and Beds</p>
            <p className="custom-button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <Suspense
                  fallback={<h2 className="text-2xl">loading...</h2>}
                  key={img}
                >
                  <InfoCard
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                </Suspense>
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Suspense fallback={<h2 className="text-2xl">Loading ....</h2>}>
            <MapComp searchResults={searchResults} />
          </Suspense>
        </section>
      </main>

      <Footer />
    </div>
  );
}

async function getData() {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS", {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
}

export default page;
