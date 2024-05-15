import { useState } from "react";
import ItemList from "./ItemList";

const ItemCategory = ({ data }) => {
  const [showItemslist, SetItemslist] = useState(false);
  const handleClick = () => {
    SetItemslist(!showItemslist);
  };
  return (
    <div>
      {/* accordian header */}
      <div className="w-6/12 m-auto my-1 bg-gray-50  shadow-xl rounded-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="test-xl font-semibold">
            {data.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>{showItemslist && <ItemList items={data?.itemCards} />}</div>
      </div>
      {/* accordian Body */}
    </div>
  );
};
export default ItemCategory;
