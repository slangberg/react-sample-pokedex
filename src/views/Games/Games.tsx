import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { getMoves, getAbilities, getColors } from "../../redux/selectors";
import { RootState, usePokeSelector } from "../../redux/store";
import List from "../../componets/List/List";
export const Games: FC<{}> = () => {
  const { games } = usePokeSelector((state: RootState) => ({
    games: state.pokemon ? getColors(state.pokemon) : null
  }));
  return (
    <div>
       <div className="title-block">Games</div>
        <List items={games}/>
    </div>
  );
};
export default Games;
