import "./styles.css";
import React from "react";
import { useState } from "react";

export type Person = {
  name: String;
  height: number;
  birth_year: String;
};

export const App = () => {
  const [persons, setPersons] = useState<Person[]>();

  function fetchData() {
    console.log("Clicked!!!");
    fetch("https://swapi.dev/api/people")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        console.log(res);
        setPersons(res.results);
      });
  }

  function clearData() {
    setPersons([]);
  }

  return (
    <>
      <div className="App">
        <button onClick={fetchData}>Fetch</button>
        <button onClick={clearData}>Clear</button>
        {persons ? (
          persons.map((person, i) => (
            <div>
              <span>{person.name} </span>
              <span>Height: {person.height} </span>
              <span>Birth year: {person.birth_year}</span>
            </div>
          ))
        ) : (
          <div>Waiting</div>
        )}
      </div>
    </>
  );
};

export default App;
