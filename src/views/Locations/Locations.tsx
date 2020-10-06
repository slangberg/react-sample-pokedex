import React, { FC } from "react";
import List from "../../componets/List/List";
import { getAPIDataNames, getMoves } from "../../redux/selectors";
import { RootState, usePokeSelector } from "../../redux/store";
import { usePageRefresh } from "../../utils/usePageRefresh";
export const Locations: FC<{}> = () => {
  const { locations } = usePokeSelector((state: RootState) => ({
    locations: state.locations ? getAPIDataNames(state.locations) : null
  }));
  usePageRefresh();
  return (
    <div>
      <div className="title-block">Locations</div>
      <List items={locations}/>
    </div>
  );
};
export default Locations;
