import React, { FC } from "react";
import List from "../../componets/List/List";
import { RootState, usePokeDispatch, usePokeSelector } from "../../redux/store";
import { getPokemonThunk } from "../../redux/thunks";
export const History: FC<{}> = () => {
  const { history, names } = usePokeSelector((state: RootState) => ({
    history: state.history,
    names: state.history.map(item => item.name)
  }));
  const dispatch = usePokeDispatch();


  return (
    <div>
      <div className="title-block">History</div>
      <List items={names} onClick={(index) => dispatch(getPokemonThunk(history[index].name))}/>
    </div>
  );
};
export default History;
