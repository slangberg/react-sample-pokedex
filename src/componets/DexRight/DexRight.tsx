import React, { FC } from "react";
import "./DexRight.scss";
import Navigation from "../Navigation/Navigation";
import { RootState, usePokeSelector } from "../../redux/store";

export const DexRight: FC<{}> = ({ children }) => {
  const { name } = usePokeSelector((state: RootState) => ({
    name: state.pokemon?.name,
  }));
  return (
    <div className="dex-input-container dex-base metal">
      <div className="hinge"></div>
      <div className="dex-right-header"></div>
      <div className="dex-info-body">
        <div className="info-dispplay-wrapper">
          <div className="display">
            {children}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};
export default DexRight;
