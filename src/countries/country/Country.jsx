import { useState } from "react";
import './Country.css'

const Country = ({ country, handleAddToList }) => {

      const [color, setColor] = useState(false);

      const { flags, name, population, independent, area } = country;

      const handleVisit = () => {
            setColor(!color);
      }


      return (
            <div >
                  <div className={`card card-compact bg-base-100 shadow-xl ${color && 'bg-red-200'}`}>
                        <figure><img className="h-[200px]" src={flags.png} alt="Shoes" /></figure>
                        <div className="card-body">

                              <h2 className="card-title text-2xl">{name.common}</h2>

                              <p className="font-medium">Population: {population}</p>

                              <p className="font-medium">Area: {area}</p>

                              <p className="font-medium">Is Independent: <span className="font-bold">{independent ? "true" : "false"}</span></p>

                              <p className={`font-medium ${color && 'textColor'}`}>{color ? "I have Visited it" : "I haven't visit yet this Country!"}</p>

                              <div className="card-actions justify-between mt-4">

                                    <button onClick={handleVisit} className="btn btn-neutral">{color ? "Visited" : "Visit"}</button>

                                    <button onClick={() => { handleAddToList(country, true) }} className="btn btn-outline">Add to list</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Country;