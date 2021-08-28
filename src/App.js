import "./styles.css";

const handleClick = () => {
  import('@banyudu/hello-wasm').then(wasm => {
    wasm.greet()
  })
}

export default function App() {
  return (
    <div className="App">
      <button onClick={handleClick}>Click Me to say Hello Wasm in console</button>
    </div>
  );
}
