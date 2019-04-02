import React, { Component } from 'react';

class ListItem extends Component {

	componentDidMount() {
		setTimeout(() =>{
			console.log(this.props)
		}, 5000);
	}

	render() {

		return (
			<ul className="list-group">
				{this.props.todo_data.map((item, index) => (
					<li
						key={item.id}
						id={item.id}
						data-category={item.categoryText}
						className="list-group-item">
						<p>{item.task}</p>
						<span>
							<i
								className="far fa-trash-alt"
								id={item.id}
								onClick={((e) => this.props.handleDeleteTaskModal(e))}
								//onClick={((e) => this.props.handleDeleteTaskModal(e))}
							></i>
						</span>
						<span>
							<i className="fas fa-user-edit" edit_id={item.id}></i>
						</span>
					</li>
				)
				)}
			</ul>

		);
	}
}

export default ListItem;