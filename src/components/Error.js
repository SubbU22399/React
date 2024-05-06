import { useRouteError } from "react-router-dom";
const Error = () => {
	const err = useRouteError();
	console.log(err);
	return (
		<div>
			<h1>!!!!!!!!!!!!!!!Oops!!!!!!!!!!!!!!!!</h1>
			<h2> Something went worng please Fix</h2>
			<h3>{err.status}</h3>
		</div>
	);
};

export default Error;
