import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/useData";

const Country = () => {
  const { countries } = useContext(DataContext);
  const { pageId } = useParams();
  const currentCountry = countries.find((country) => country.name === pageId);
  console.log(currentCountry);
  return (
    <>
      <section className="viewPageContainer h-screen flex flex-col">
        <div className="h-1/6 items-center ml-10  md:ml-20 flex">
          <div className="shadow-xl w-28 h-10 flex justify-center items-center">
            <i class="uil uil-arrow-left"></i> Back
          </div>
        </div>
        <main className="w-auto flex flex-col lg:flex-row h-auto ml-10 md:items-center lg:ml-20
         lg:items-center">
          <div className="imageContainer flex lg:mr-10 h-full w-1/2 ">
            <img
              className="flagImg h-full w-full"
              src={currentCountry?.flag}
            />
          </div>
          <div className=" h-full w-1/2 lg:mr-20  flex flex-col">
            <div className="h-20 w-72 pt-6 lg:pt-0">{currentCountry?.name}</div>
            <div className="flex flex-col lg:flex-row  h-48">
              <div className="w-72  lg:w-1/2">
                <p className="font-bold leading-6">
                  Native Name:{" "}
                  <span className="font-normal">
                    {currentCountry?.nativeName}
                  </span>
                </p>
                <p className="font-bold leading-6">
                  Population:{" "}
                  <span className="font-normal">
                    {currentCountry?.population}
                  </span>
                </p>
                <p className="font-bold leading-6">
                  Region:{" "}
                  <span className="font-normal">{currentCountry?.region}</span>
                </p>
                <p className="font-bold leading-6">
                  Sub Region:{" "}
                  <span className="font-normal">
                    {currentCountry?.subregion}
                  </span>
                </p>
                <p className="font-bold leading-6">
                  Capital:{" "}
                  <span className="font-normal">{currentCountry?.capital}</span>
                </p>
              </div>
              <div className=" mt-4 w-72 lg:mt-0 lg:w-1/2">
                <p className="font-bold leading-6">
                  Top Level Domain:{" "}
                  <span className="font-normal">
                    {currentCountry?.topLevelDomain[0]}
                  </span>
                </p>
                <p className="font-bold leading-6">
                  Currencies:{" "}
                  <span className="font-normal">
                    {currentCountry?.currencies !== undefined && currentCountry?.currencies[0].name}
                  </span>
                </p>
                <p className="font-bold leading-6">
                  Languages:{" "}
                  <span className="font-normal">
                    {currentCountry?.languages.map((lang, index) =>
                      index + 1 === currentCountry?.languages.length
                        ? ` ${lang.name}`
                        : `${lang.name}, `
                    )}
                  </span>
                </p>
              </div>
            </div>
            <div className="h-auto flex flex-col md:flex-row mt-4">
              <div className=" md:h-full w-80 md:w-1/4 flex items-center font-bold">Border Countries:</div>
              <div className="flex md:flex-wrap">
               {currentCountry?.borders !== undefined && currentCountry?.borders.map((country) => <div className=" w-32 mr-2 flex items-center"><span className="shadow w-full h-15
               flex items-center justify-center">{country}</span></div>)}
               </div>
              </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Country;
