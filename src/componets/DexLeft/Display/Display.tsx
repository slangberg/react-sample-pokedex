import React, { FC } from "react";
import { getImage } from "../../../redux/selectors";
import { RootState, usePokeSelector } from "../../../redux/store";
import "./Display.scss";
export const Display: FC<{}> = () => {
  const { image, name } = usePokeSelector((state: RootState) => ({
    image: state.pokemon ? getImage(state.pokemon) : null,
    name: state.pokemon?.name,
  }));
  return (
    <div className="display-wrapper">
      <div className="top-in">
        <div className="red-in" />
        <div className="green-in" />
      </div>
      <div className={`display ${image ? " active" : ""}`}>
        <div className="pokemon-name">{name}</div>
        <div
          className="display-content"
          style={image ? { backgroundImage: `url(${image})` } : undefined}
        >
          {!image && (
            <div className="no-content">
              <h2>Please Search</h2>
              <div className="o-pokeball"></div>
            </div>
          )}
        </div>
      </div>
      <i className="speaker fa fa-bars" aria-hidden="true"></i>
    </div>
  );
};
export default Display;
