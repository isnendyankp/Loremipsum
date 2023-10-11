const App = () => {
  const [count, setCount] = useState(1);
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum</h4>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" />
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

