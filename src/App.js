import MainHeader from "./components/Layout/MainHeader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainHeader />

      <div style={{ padding: "220px 20px 20px 20px" }}>
        {Array(20)
          .fill(null)
          .map((_, i) => (
            <div key={i}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sem nunc, laoreet et nunc sollicitudin, tincidunt
                tincidunt velit. Aenean non rhoncus nisi, placerat vehicula
                dolor. Curabitur sed hendrerit felis. Morbi sit amet vehicula
                lorem, a fringilla nisl. Quisque a diam dapibus, egestas nisl
                eu, dignissim leo. Fusce et aliquet justo. Fusce commodo dolor
                sed eleifend rutrum. Mauris pretium urna aliquam urna rhoncus
                gravida. Vestibulum sollicitudin volutpat sem. Donec nec nunc
                sed augue accumsan ultricies. Sed eget eros nisl.
              </p>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
