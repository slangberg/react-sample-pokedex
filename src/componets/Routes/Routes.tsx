import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Ablities from "../../views/Ablities/Ablities";
import Evoultions from "../../views/Evoultions/Evoultions";
import Games from "../../views/Games/Games";
import Locations from "../../views/Locations/Locations";
import Moves from "../../views/Moves/Moves";
import { Types } from "../../views/Types/Types";
import Varietes from "../../views/Varietes/Varietes";
export const Routes: FC<{}> = ({ children }) => {
  return (
    <Switch>
      <Route path="/moves/:id">
        <Moves />
      </Route>
      <Route path="/ablities/:id">
        <Ablities />
      </Route>
      <Route path="/games/:id">
        <Games />
      </Route>
      <Route path="/varietes/:id">
        <Varietes />
      </Route>
      <Route path="/types/:id">
        <Types />
      </Route>
      <Route path="/evoultions/:id">
        <Evoultions />
      </Route>
      <Route path="/locations/:id">
        <Locations />
      </Route>
      <Route exact path="/">
        <div className="empty">IS Empty</div>
      </Route>
    </Switch>
  );
};
export default Routes;
