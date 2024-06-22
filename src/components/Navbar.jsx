// Components/NavBar1.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NewsApi from "./NewsApi";

function NavBar({sendData }) {

  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  function inputHandler(e) {
    setInputText(e.target.value);
    sendData(inputText);
  }

  return (
    <>
      <div className="">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand px-4" href="#" onClick={()=>navigate("/")}>
            NewsWeb
          </a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              placeholder="Search"
              onChange={inputHandler}
            />
          </form>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`/`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Entertainment`}>
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Technology`}>
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Sports`}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Business`}>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Health`}>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Science`}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Favorites`}>
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
