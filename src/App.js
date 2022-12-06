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
      </div>{" "}
      <footer>
        This project was coded by{" "}
        <mailto email="edelesvaux@gmail.com">Erell Delesvaux </mailto>and is
        open-sourced on{" "}
        <a href="https://github.com/ErellD/weather-react-app">Github</a>
        and hosted on{" "}
        <a href="https://lively-zabaione-801227.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
