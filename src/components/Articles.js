import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'


const Articles = (props) =>{
	console.log(props.articles)
	return(
		<Fragment>
			<ul>
				{props.articles.map( article =>
					<li key={article.id}>
						<Link to={`/articles/${article.id}`}>{article.id}</Link>
						{/*<Link to="/">{article.id}</Link>*/}
					</li>
				)}
			</ul>
		</Fragment>
	)
}

export default Articles;