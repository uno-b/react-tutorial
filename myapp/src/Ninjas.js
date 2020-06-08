import React from "react";

// We create functions as the following when we don't need a state
// and when we are only concerned with the UI
const Ninjas = ({ ninjas, deleteNinja }) => {
  // Conditional output
  /*
  const ninjaList = ninjas.map((ninja) => {
    if (ninja.age > 20) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
        </div>
      );
    } else {
      return null;
    }
    */

  // Conditional output (ternary operator)
  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete ninja
        </button>
      </div>
    ) : null;
  });

  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
