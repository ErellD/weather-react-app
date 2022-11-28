import Search from "./Search";
import City from "./City";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <City />
        <Weather />
      </div>
    </div>
  );
}
