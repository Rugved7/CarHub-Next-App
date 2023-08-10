import { Car, Filter, Hero, Search } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/utils";

export default async function Home() {
  // importing the results form the API

  const allCars = await fetchCars();
  // before fetching the data , we need to know that data is empty
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      {/* cars catalogue section  */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl">Cars Catalogue</h1>
          <p>Explore the cars you might desire...</p>
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

        {/* Fetching the Actual data */}
        {!isDataEmpty ? (
          <section> 
            {/* bringing actual cars */}
            <div>
              {allCars?.map((car) => (
                <Car car={car}/>   // render the car Card component (we named it as Car.tsx)
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-component">
            <h2 className="text-black text-xl font-bold">OPPS ! no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
