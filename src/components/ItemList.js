import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <span>
        {items.map((item) => (
          <div key={item.card.info.id} className="m-0 flex justify-between">
            <div className="p-4 text-left border-b-2 border-black">
              <span className="font-bold"> {item.card.info.name}</span>
              <div>
                <span className="font-light">
                  ₹
                  {item.card.info.price / 100
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <div className="text-xs">
                <span> {item.card.info.description}</span>
              </div>
            </div>
            <div className="w-36 shadow-lg">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="object-cover rounded-lg size-24 "
              />
              <button className="bg-green-500 text-white absolute">
                Add +
              </button>
            </div>
          </div>
        ))}
      </span>
    </div>
  );
};
export default ItemList;
