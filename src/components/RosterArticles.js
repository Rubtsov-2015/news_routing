import React, {Component} from 'react';
import Article from './Article'
import Articles from './Articles'
import {Route, Switch} from 'react-router-dom'

console.log(this.articles);

export default class RosterArticles extends Component {
	componentDidMount(){

	}

	render() {
		return (
			<Switch>
				<Route exact path='/articles' component={Articles}/>

			</Switch>
		)

	}
}