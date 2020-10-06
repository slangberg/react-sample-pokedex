import React, { FC } from "react";
import { useParams } from "react-router-dom";
import List from "../../componets/List/List";
import { getTypes } from "../../redux/selectors";
import { RootState, usePokeSelector } from "../../redux/store";
export const Types: FC<{}> = () => {
  const { types } = usePokeSelector((state: RootState) => ({
    types: state.pokemon ? getTypes(state.pokemon) : null,
  }));
  return (
    <div>
      <div className="title-block">Types</div>
      <List items={types}/>
    </div>
  );
};
export default Types;
