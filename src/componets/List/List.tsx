import React, { FC } from "react";
export const List: FC<{
  items: string[] | null;
  onClick?: (index: number) => void;
}> = ({ items, onClick }) => {
  const interactive = onClick ? "interactive" : "";


  return (
    <div className={`list-wrap ${interactive}`}>
      {items?.map((item, index) => (
        <div
          key={item}
          className="ui-item"
          onClick={onClick ? () => onClick(index) : undefined}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
export default List;
