import React, { Component } from "react";

export default class AuthorDetail extends Component {
	render() {
		const auth = this.props.selectedAuth;
		const name = auth.first_name + " " + auth.last_name
		const imgURL = auth.imageUrl 
		const books = auth.books 


		return (
			<div className="author col-xs-10">
				<div>
					<h3>{name}</h3>
					<img
						src={imgURL}
						className="img-thumbnail"
					/>
				</div>
				<table className="mt-3 table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Authors</th>
							<th>Color</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{books[0].title}</td>
							<td>{name}</td>
							<td>
								<button
									className="btn btn-outline-dark"
									style={{ backgroundColor: books[0].color }}
								/>
							</td>
						</tr>
						<tr>
							<td>{books[1].title}</td>
							<td>
								{name}
							</td>
							<td>
								<button
									className="btn btn-outline-dark"
									style={{ backgroundColor: books[1].color }}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
