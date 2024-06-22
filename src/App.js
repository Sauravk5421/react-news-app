import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import NewsApi from "./components/NewsApi";
import DetailsPage from "./components/DetailsPage";
import { useState } from "react";
import LikedPage from "./components/LikedPage";

function App() {
  const [SearchText, setSearchText] = useState("");

  function handleDataFromSearch(data) {
    setSearchText(data);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar sendData={handleDataFromSearch}/>
        
        <Routes>
          <Route path="/"element={<NewsApi key="general" category="general" SearchText={SearchText}/>}

          />
          <Route path="Entertainment" element={<NewsApi key="entertainment" category="entertainment" SearchText={SearchText}/>}/>
          {/* <Route path="Entertainment/:content" element={<DetailsPage />}/> */}
          <Route
            path="/Technology" element={<NewsApi key="technology" category="technology" SearchText={SearchText}/>}
          />
          <Route
            path="/Sports" element={<NewsApi key="sports" category="sports" SearchText={SearchText}/>}
          />
          <Route
            path="/Business" element={<NewsApi key="business" category="business" SearchText={SearchText}/>}
          />
          <Route
            path="/Health" element={<NewsApi key="health" category="health" SearchText={SearchText}/>}
          />
          <Route
            path="/Science" element={<NewsApi key="science" category="science" SearchText={SearchText}/>}
          />
           <Route
            path="/Details" element={<DetailsPage />}
          />
          <Route
            path="/Favorites" element={<LikedPage SearchText={SearchText}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
