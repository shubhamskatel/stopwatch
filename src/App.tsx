import { Provider } from "react-redux";
import "./App.css";
import Stopwatch from "./stopwatch/Stopwatch";
import { store } from "./Redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Stopwatch />
      </Provider>
    </>
  );
}

export default App;
