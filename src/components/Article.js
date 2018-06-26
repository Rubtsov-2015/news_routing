import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import request from "../lib/request";

const urlComments = 'https://jsonplaceholder.typicode.com/comments?postId=';

export default class Article extends Component {

	constructor(props){
		super(props);
		this.state = {
			articleComments: []
		}
	}

	componentDidMount() {
		request(`${urlComments}${this.props.match.params.id}`)
			.then((articleComments) => {
				this.setState(
					{articleComments}
				)
			});
	}

	render(){
		return (
			<div>
				<div>Comments of {this.state.articleComments.title}</div>
					{this.state.articleComments.map((comment, index) =>
						<p key={comment.id}>
							<b>Comment:{index+1}</b><br/>
							{comment.name} <br/><br/>
							{comment.body}
						</p>
					)}
				<Link to='/articles'>Back</Link>
			</div>
		)
	}
}