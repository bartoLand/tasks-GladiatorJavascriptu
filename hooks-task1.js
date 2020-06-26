import React, { useState } from 'react';

const useSetState = () => {

  const [animal, setAnimal] = useState("kot");
  const [fruit, setFruit] = useState("jabłko");

  const resetAll = () => {
    setAnimal("kot");
    setFruit("jabłko");
  }
  return (
    <div>
      <div>
        Wpisz ulubione zwierzę: <input type="text"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          id={animal}
          placeholder={"zwierzę"}
        />
      </div>

      <div>
        wpisz ulubiony owoc: <input type="text"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
          id={fruit}
          placeholder={"owoc"}
        />
      </div>

      <div>
        Twoim ulubionym zwierzęciem jest {animal}, a ulubionym owocem jest {fruit}.
      </div>

      <button onClick={resetAll}>reset</button>
    </div>
  );
}

export default useSetState;
