import React, { FC } from "react";
export const List: FC<{ items: string[] | null }> = ({items}) => {
  return (
    <div className="list-wrap">
      {items?.map((item) => (
        <div key={item} className="ui-item">{item}</div>
      ))}
    </div>
  );
};
export default List;
