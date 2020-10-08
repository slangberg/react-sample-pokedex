import React, { useEffect } from "react";
import "./App.css";
import DexLeft from "./componets/DexLeft/DexLeft";
import DexRight from "./componets/DexRight/DexRight";
import { MOCK_POKEMON } from "./mocks/mock";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./componets/Routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PokemonResponse } from "./interfaces/API";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="dex-container">
          <DexLeft />
          <DexRight>
            <Routes />
          </DexRight>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
