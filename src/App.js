import React, {Component, Fragment } from 'react';
import { Route, Switch,withRouter} from 'react-router-dom'
import './App.css';
import request from './lib/request';
import Home from './components/Home'
import Header from './components/Header'
import Articles from './components/Articles'
import Article from "./components/Article";
import SomePage from './components/SomePage'

const url = 'https://jsonplaceholder.typicode.com/posts/';

 class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		}
	}

	componentDidMount() {
		request(url)
			.then((articles) => {
				this.setState({articles})
			});
	}


	render() {
		const {articles} = this.state;
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/articles" render={props => <Articles {...props} articles={articles} /> }  />
					<Route path='/articles/:id' component={Article}/>
					<Route path="/somepage" component={SomePage} />
				</Switch>
			</Fragment>
		);
	}
}

export default withRouter(App)

//