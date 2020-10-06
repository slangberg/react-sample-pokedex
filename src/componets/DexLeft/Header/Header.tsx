import React, { FC } from "react";
export const Header: FC<{}> = () => {
  return (
    <div className="dex-info-top-frame">
    <div className="dex-info-left metal">
      <div className="lens" />
      <div className="indicators">
        <div className="btn-red" />
        <div className="btn-yellow" />
        <div className="btn-green" />
      </div>
    </div>
    <div className="dex-info-right metal"></div>
  </div>
  );
};
export default Header;