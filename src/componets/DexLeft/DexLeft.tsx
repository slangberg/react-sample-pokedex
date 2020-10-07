import React, { FC, useState } from "react";
import "./DexLeft.scss";
import Header from "./Header/Header";
import Display from "./Display/Display";
import { PokemonResponse } from "../../interfaces/API";
import { usePokeDispatch } from "../../redux/store";
import { getPokemonThunk } from "../../redux/thunks";
export const DexLeft: FC<{ pokemon: PokemonResponse }> = ({ pokemon }) => {
  const [name, setName] = useState<string>('')
  const dispatch = usePokeDispatch();

  return (
    <div className="dex-info-container dex-base metal">
      <Header />
      <div id="dex-info-body">
        <Display />
        <div className="key" onClick={() => {
            dispatch(getPokemonThunk(name))}
          }>
          <i className="fa fa-search" />
        </div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
    </div>
  );
};
export default DexLeft;
