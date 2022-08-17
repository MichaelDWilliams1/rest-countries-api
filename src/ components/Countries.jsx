import React, { useContext, useState } from "react";
import { DataContext } from "../context/useData";
import { Link } from "react-router-dom";
const Countries = ({ userSearch }) => {
  
  const { countries } = useContext(DataContext);

  console.log(userSearch);

  return (
    <>
      {userSearch !== null
        ? countries
            .filter(
              (country) =>
                country?.name.includes(userSearch) ||
                country?.name.toLowerCase().includes(userSearch) ||
                userSearch === " "
            )
            .map((country, index) => (
              <Link key={index} to={`/countryPages/${country?.name}`}>
                <section
                  key={country?.alpha2Code}
                  id={country?.numericCode}
                  className="shadow-3xl flex flex-col h-80 w-80 m-3 dark:bg-slate-700 dark:shadow:dk"
                >
                  <div key={country?.alpha3Code} className="h-2/4 full">
                    <img
                      key={country?.flag}
                      className="h-full w-full object-cover"
                      src={country?.flag}
                    />
                  </div>
                  <div key={country?.area} className="h-2/4 flex flex-col ml-6">
                    <h2
                      key={country?.name}
                      className="font-bold text-xl h-2/5 pt-4"
                    >
                      {country?.name}
                    </h2>
                    <p key={country?.population} className="font-bold text-sm">
                      Population:{" "}
                      <span className="font-normal">{country?.population.toLocaleString()}</span>
                    </p>
                    <p key={country?.region} className="font-bold text-sm">
                      Region:{" "}
                      <span className="font-normal">{country?.region}</span>
                    </p>
                    <p key={country?.numericCode} className="font-bold text-sm">
                      Capital:{" "}
                      <span className="font-normal">
                        {country?.capitial !== undefined && country?.capital[0]}
                      </span>
                    </p>
                  </div>
                </section>
              </Link>
            ))
        : countries.map((country, index) => (
            <Link key={index} to={`/countryPages/${country?.name}`}>
              <section
                key={country?.alpha2Code}
                id={country?.numericCode}
                className="shadow-md flex flex-col h-80 w-80 m-3 dark:bg-slate-700 dark:shadow-dk"
              >
                <div key={country?.alpha3Code} className="h-2/4 full">
                  <img
                    key={country?.flag}
                    className="h-full w-full object-cover"
                    src={country?.flag}
                  />
                </div>
                <div key={country?.area} className="h-2/4 flex flex-col ml-6">
                  <h2
                    key={country?.name}
                    className="font-bold text-xl h-2/5 pt-4"
                  >
                    {country?.name}
                  </h2>
                  <p key={country?.population} className="font-bold text-sm">
                    Population:{" "}
                    <span className="font-normal">{country?.population.toLocaleString()}</span>
                  </p>
                  <p key={country?.region} className="font-bold text-sm">
                    Region:{" "}
                    <span className="font-normal">{country?.region}</span>
                  </p>
                  <p key={country?.numericCode} className="font-bold text-sm">
                    Capital:{" "}
                    <span className="font-normal">
                      {country?.capital}
                    </span>
                  </p>
                </div>
              </section>
            </Link>
          ))}
    </>
  );
};

export default Countries;
