import React from "react";
import { Component } from "react";
class ContactClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				name: "dummy",
				location: "dummy",
			},
		};
	}
	// For making the API call and get the data. we use (ComponentDidMount)
	async componentDidMount() {
		const data = await fetch(" https://api.github.com/users/Subbu22399");
		const json = await data.json();
		console.log(json);
		this.setState({
			userInfo: json,
		});
	}
	render() {
		const { name, location, followers, public_repos, id, updated_at } =
			this.state.userInfo;
		return (
			<div className="ContactInfo">
				<h1>Name: {name}</h1>
				<h3>followers: {followers}</h3>
				<h3>public_repos : {public_repos}</h3>
				<h4>ID : {id}</h4>
				<h4>location: {location}</h4>
				<h4>Update time: {updated_at}</h4>
			</div>
		);
	}
}
export default ContactClass;
