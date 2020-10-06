import React, { FC } from "react";
import List from "../../componets/List/List";
import { getAPIDataNames, getMoves } from "../../redux/selectors";
import { RootState, usePokeSelector } from "../../redux/store";
import { usePageRefresh } from "../../utils/usePageRefresh";
export const Evoultions: FC<{}> = () => {
  const { evoultions } = usePokeSelector((state: RootState) => ({
    evoultions: state.evoultions ? getAPIDataNames(state.evoultions) : null
  }));
  usePageRefresh();
  return (
    <div>
      <div className="title-block">Evoultions</div>
      <List items={evoultions}/>
    </div>
  );
};
export default Evoultions;
