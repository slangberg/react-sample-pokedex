import React, { FC } from "react";
import "./DexLeft.scss";
import Header from "./Header/Header";
import Display from "./Display/Display";
import { PokemonResponse } from "../../interfaces/API";
export const DexLeft: FC<{ pokemon: PokemonResponse }> = ({ pokemon }) => {
  const { name } = pokemon;
 
  return (
    <div className="dex-info-container dex-base metal">
      <Header />
      <div id="dex-info-body">
        <Display />
      </div>
    </div>
  );
};
export default DexLeft;
