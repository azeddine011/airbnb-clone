import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { data } from "autoprefixer";
import { format } from "date-fns";
import React from "react";

function page({ params, searchParams }) {
  const { location, startDate, endDate, guests } = searchParams;
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
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
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default page;
