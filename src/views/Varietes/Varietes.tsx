import React, { FC } from "react";
import { useParams } from "react-router-dom";
import List from "../../componets/List/List";
import { getVarietes } from "../../redux/selectors";
import { RootState, usePokeSelector } from "../../redux/store";
export const Varietes: FC<{}> = () => {
  const { varietes } = usePokeSelector((state: RootState) => ({
    varietes: state.pokemon ? getVarietes(state.pokemon) : null,
  }));
  return (
    <div>
      <div className="title-block">Varietes</div>
      <List items={varietes}/>
    </div>
  );
};
export default Varietes;
