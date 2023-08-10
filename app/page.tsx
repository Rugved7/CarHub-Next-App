import { Filter, Hero, Search } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      {/* cars catalogue section  */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl">Cars Catalogue</h1>
          <p>Explore the cars you might like and desire like share and subscribe...</p>
        </div>
          
        {/* Create The Filters */}
        <div className="home__filter">
          {/* Include the Search component for the search bar */}
          <Search />

          <div className="home__filter-container">
            {/* Ṭitle is passed as props here */}
            <Filter title="fuel" />
            <Filter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
