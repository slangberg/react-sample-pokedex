import React, { FC } from "react";

import List from "../../componets/List/List";
import { getMoves, getAbilities } from "../../redux/selectors";
import { RootState, usePokeSelector } from "../../redux/store";
export const Ablities: FC<{}> = () => {
  const { abilities } = usePokeSelector((state: RootState) => ({
    abilities: state.pokemon ? getAbilities(state.pokemon) : null
  }));
  return (
    <div>
       <div className="title-block">Ablities</div>
       <List items={abilities}/>
    </div>
  );
};
export default Ablities;
