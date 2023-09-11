import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";

const Countries = () => {

      const [countries, setCountries] = useState([]);
      const [visitedCountry, setVisitedCountry] = useState([]);
      const [border, setBorder] = useState(false);
      const [flag, setFlag] = useState([]);
      // const [isListed, setIsListed] = useState(false);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await fetch('https://restcountries.com/v3.1/all');
                        const data = await response.json();
                        setCountries(data);
                  } catch (error) {
                        console.log(error);
                  }
            }

            fetchData();
      }, []);

      const handleAddToList = (country, isListed) => {
            // visitedCountry.filter(visitedCountry => visitedCountry !== visitedCountry.cca3);
            const newCountry = [...visitedCountry, country];
            setVisitedCountry(newCountry);
            setFlag(newCountry);
            setBorder(true);
            // setIsListed(isListed);
      }


      console.log(visitedCountry);

      return (
            <div>
                  {/* Countries.jsx */}
                  <h3 className="text-2x my-4 font-medium mt-4">Countries: {countries.length}</h3>

                  {/* Visited Countries || Country.jsx */}
                  <div className="mb-4">
                        <h3 className="text-xl font-medium mt-4">Visited Countries: {visitedCountry.length}</h3>

                        {/* Country name */}
                        <ul className={`max-w-fit mt-3 p-2 ${border && 'border border-2 bg-red-100 border-[gray]'} flex flex-wrap gap-6`}>
                              {
                                    visitedCountry.map((country) => <li className="underline font-bold text-lg" key={country.cca3}>{country.name.common}</li>)
                              }
                        </ul>

                        {/* Country Flag */}
                        <div className={`${border && 'border border-2 bg-red-100 border-[gray]'} max-w-fit flex flex-wrap gap-4 my-3 p-3`}>
                              {
                                    flag.map((flag, idx) => <img className="w-20 h-16" src={flag.flags.png} key={idx}></img>)
                              }
                        </div>

                  </div>

                  {/* Country linked  with Countries to show country in UI */}
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {
                              countries.map((country, index) => <Country
                                    key={index}
                                    country={country}
                                    handleAddToList={handleAddToList}
                                    // isListed={isListed}
                              ></Country>)
                        }
                  </div>
            </div>
      );
};

export default Countries;