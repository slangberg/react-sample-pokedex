import React, { FC } from "react";
import { getImage } from "../../../redux/selectors";
import { RootState, usePokeSelector } from "../../../redux/store";
import "./Display.scss";
export const Display: FC<{}> = () => {
  const { image, name, loading, pokemon, error } = usePokeSelector(
    (state: RootState) => ({
      image: state.pokemon ? getImage(state.pokemon) : null,
      name: state.pokemon?.name,
      loading: state.loading,
      pokemon: state.pokemon,
      error: state.error,
    })
  );

  return (
    <div className="display-wrapper">
      <div className="top-in">
        <div className="red-in" />
        <div className="green-in" />
      </div>
      <div className={`display ${image ? " active" : ""}`}>
        {!loading && (
          <>
            <div className="pokemon-name">{name}</div>
            <div
              className="display-content"
              style={image ? { backgroundImage: `url(${image})` } : undefined}
            >
              {(!pokemon || error) && (
                <div className="no-content">
                  <h2> Search For Pokemon</h2>
                  <div className="o-pokeball"></div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <i className="speaker fa fa-bars" aria-hidden="true"></i>
    </div>
  );
};
export default Display;
