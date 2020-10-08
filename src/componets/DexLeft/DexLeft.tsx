import React, { FC, useState } from "react";
import "./DexLeft.scss";
import Header from "./Header/Header";
import Display from "./Display/Display";
import { PokemonResponse } from "../../interfaces/API";
import { usePokeDispatch } from "../../redux/store";
import { getPokemonThunk } from "../../redux/thunks";
import { NavLink } from "react-router-dom";
export const DexLeft: FC<{}> = () => {
  const [name, setName] = useState<string>("");
  const dispatch = usePokeDispatch();

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(getPokemonThunk(name));
    }
  };

  return (
    <div className="dex-info-container dex-base metal">
      <Header />
      <div id="dex-info-body">
        <div className="input-wrap">
          <div
            className="search-btn"
            onClick={() => {
              dispatch(getPokemonThunk(name));
            }}
          >
            <i className="fa fa-search" />
          </div>
          <input
            className="search-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={onKeyDown}
          />
        </div>
        <Display />
      </div>
      <div className="left-nav">
        <NavLink className="key" to={`/history`}>
          History
        </NavLink>
      </div>
    </div>
  );
};
export default DexLeft;
