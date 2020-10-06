import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RootState, usePokeSelector } from "../../redux/store";
export const Navigation: FC<{}> = ({ children }) => {
  const { id } = usePokeSelector((state: RootState) => ({
    id: state.pokemon?.id
  }));
  return (
    <div className="keyboard">
      <NavLink className="key" to={`/games/${id}`}>Games</NavLink>
      <NavLink className="key" to={`/varietes/${id}`}>Varietes</NavLink>
      <NavLink className="key" to={`/locations/${id}`}>Locations</NavLink>
      <NavLink className="key" to={`/evoultions/${id}`}>Evoultions</NavLink>
      <NavLink className="key" to={`/varietes/${id}`}>Games</NavLink>
      <NavLink className="key" to={`/types/${id}`}>Types</NavLink>
      <NavLink className="key" to={`/ablities/${id}`}>Ablities</NavLink>
      <NavLink className="key" to={`/moves/${id}`}>Moves</NavLink>
    </div>
  );
};
export default Navigation;
