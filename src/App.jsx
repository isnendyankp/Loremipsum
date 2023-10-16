import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => { 
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;

// progress:
// - s7-219:Cr8 count state value
// - s7-219:Change h2 to section @return
// - s7-219:Add cN section-center to section
// - s7-219:Add h4 to section
// - s7-219:Add form base structure to section
// - s7-219:Change action to cN lorem-form @section>form
// - s7-219:Add label to form
// - s7-219:Add amount for htmlFor @form>label
// - s7-219:Add text paragraph to label
// - s7-219:Add input base to form
// - s7-219:change type number to input
// - s7-219:Add name "amount" to input
// - s7-219:Add id "amount" to input form
// - s7-219:Add min "1" to input form
// - s7-219:Add step "1" to input form
// - s7-219:Add max "8" to input form
// - s7-219:Add value count to input form
// - s7-219:Add onChange for setCount to input form
// - s7-219:Add button  generate to form
// - s7-219:Add cN btn to button generate
// - s7-219:Add type submit to button generate
// - s7-219:import useState from react
// - s7-219:import data from data.js
// - s7-219:Add text state value to useState []
// - s7-220:Add handleSubmit base function
// - s7-220:Add handleSubmit to form
// - s7-220:Add e.preventDefault to handleSubmit
// - s7-220:Add amount equal to parseInt count
// - s7-220:Add setText to data slice(array slice method)
// - s7-220:Add article base to section
// - s7-220:Add text.map to article
// - s7-220:pass item, index to text.map @article
// - s7-220:Add p with key index to return @article
// - s7-220:pass item to p @article


