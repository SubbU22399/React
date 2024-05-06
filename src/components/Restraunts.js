import { useState, useEffect } from "react";
import { ITEMS_API_START, ITEM_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const Restraunts = () => {
	const [resInfo, setResInfo] = useState([]);
	const [itemCards, setItems] = useState([]);
	const { ResId } = useParams();
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(ITEMS_API_START + ResId);
		const json = await data.json();
		console.log(json);
		setResInfo(json?.data.cards[2]?.card?.card?.info);
		setItems(
			json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
				?.card.itemCards
		);
		console.log(itemCards);
	};
	return (
		<div className="Menu">
			<h1> {resInfo.name}</h1>
			<h3> {resInfo.areaName}</h3>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((item) => (
					<li className="Menu-list" key={item.card.info.id}>
						{item.card.info.name}- {item.card.info.price / 100} -
						<img
							className="ItemImage"
							src={ITEM_URL + item.card.info.imageId}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Restraunts;
