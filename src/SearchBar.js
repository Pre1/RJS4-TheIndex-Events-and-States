import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchBar extends Component {
	state = { query: "" };

	handleChange = event => {
		console.log("event.target.value || query: ", event.target.value);

		this.props.filteredAuthors(event.target.value);
		this.setState({ query: event.target.value });		

	};

	// handleSubmit = event => {
	// 	alert("A name was submitted: " + this.state.value);
	// 	this.props.filteredAuthors(event.target.value);
	// 	event.preventDefault();
	// };

	render() {
		return (
			<div className="form-group col-lg-6 col-12 mx-auto">
				<form >
					<div className="input-group my-3">
						
						<input
							className="form-control"
							type="text"
							value={this.state.query}
							onChange={this.handleChange}
						/>

						<div className="input-group-append">
							<span className="input-group-text">
								<FontAwesomeIcon icon={faSearch} />
							</span>
						</div>
					</div>
				</form>

			</div>
		);
	}
}