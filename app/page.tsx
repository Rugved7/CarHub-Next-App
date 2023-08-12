import { Car, Filter, Hero, Search } from "@/components";

import { fetchCars } from "@/utils";

export default async function Home({searchParams}) {
  // importing the results form the API

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit:searchParams.limit || 10,
    model:searchParams.model || '',
  });
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
