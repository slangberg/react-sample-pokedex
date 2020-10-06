import React, { FC } from "react";
import List from "../../componets/List/List";
import { getMoves } from "../../redux/selectors";
import { RootState, usePokeSelector } from "../../redux/store";
import { usePageRefresh } from "../../utils/usePageRefresh";
export const Moves: FC<{}> = () => {
  const { moves } = usePokeSelector((state: RootState) => ({
    moves: state.pokemon ? getMoves(state.pokemon) : null
  }));
  usePageRefresh();
  return (
    <div>
      <div className="title-block">Moves</div>
      <List items={moves}/>
    </div>
  );
};
export default Moves;
