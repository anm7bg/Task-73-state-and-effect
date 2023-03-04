import "./App.css";
import React, { useState, useEffect } from "react";


function App() {

  const [counter, setCounter] = useState(1);


  useEffect(() => {

    document.title = `Count (${counter})`

  });

  // console.log(title);



  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          {/* <p class="title">{counter}</p> */}
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <button
              onClick={() => {
                  setCounter(counter+1)
                  console.log("Count-2 ", counter);
              }}
              >
                  Count ({counter})
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
