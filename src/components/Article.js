import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import request from "../lib/request";

const urlComments = 'https://jsonplaceholder.typicode.com/comments?postId=';

export default class Article extends Component {

	constructor(props){
		super(props);

		this.state = {
			articles: []
		}

	}

	componentDidMount() {
		request(`${urlComments}${this.props.match.params.id}`)
			.then((articles) => {
				this.setState(
					articles
					)
			});
	}


	render(){

		console.log(this.props.match.params.id)
		// const articleId = parseInt(props.match.params.number, 10);
		return (
			<div>
				{/*<h1>{article.name} (#{article.number})</h1>*/}
				{/*<h2>Position: {article.position}</h2>*/}
				<Link to='/articles'>Back</Link>
				asdasdasd
			</div>
		)
	}

}