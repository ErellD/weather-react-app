import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="Search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control btn shadow-sm"
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              value="Search"
              className="btn w-100 shadow-sm"
            >
              Search
            </button>
          </div>
          <div className="col-3">
            <button type="submit" value="Home" className="btn w-100 shadow-sm">
              Home
            </button>{" "}
          </div>
        </div>
      </form>
    </div>
  );
}
