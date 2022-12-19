import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney" />
      </div>{" "}
      <footer>
        This project was coded by Erell Delesvaux and is open-sourced on{" "}
        <a
          href="https://github.com/ErellD/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://lively-zabaione-801227.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
