const App = () => {
  const [count, setCount] = useState(1);
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum</h4>
      <form className="lorem-form">
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
        <button>
          generate
        </button>
      </form>
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


