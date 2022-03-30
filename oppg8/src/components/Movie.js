import Movie from "./Movie";
import React, { useState, useEffect } from "react";

/*
Eksempel useState 1 fra fullstækk:
const initialState = {
  age: 45,
  name: 'Zara',
  exams: 0
}

export default function Student() {
  const [state, setState] = useSate(initialState)
  /*
    setValue => brukes til å sette / oppdatere state (oppdatere value)
    'Initial Value' er verdien du starter med når komponenten brukes
  
  return (...)
}*/

/*
Eksempel 2 useState fra fullstækk
// components/DefaultState.js
import { useState } from "react";

export default function DefaultState() {
  // klargjør useState hook. Setter startverdien til å være "default"
  const [name, setName] = useState("default");

  function handleChange(e) {
    // oppdaterer verdien 'name' med det vi har skrevet i inputfeltet
    setName(e.target.value);
  }

  return (
    <>
      { Bruker onChange event til å trigge handleChange hver gang verdien oppdateres}
      <input autoFocus onChange={handleChange} value={name} />
      { Første gang komponenten vises vil teksten være Name: default }
      <h1>Name: {name}</h1>
    </>
  );
}

*/

export default function Movies({ title, actor }) {
  return (
    <div>
      <h1>Movies</h1>
      <h3>{title}</h3>
      <h3>{actor}</h3>
      <button onClick={useEffect}>Klikk her</button>
    </div>
    //useEffect(()
  );
}
