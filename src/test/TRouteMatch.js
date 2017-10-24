import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

class A extends React.Component {
	render(){
		return (
			<div>
				<h2>{this.props.match.params.id}</h2>
				<Link to="/TRouteMatch/B">B</Link>
			</div>
		)
	}
}
export default class TReactLoading extends React.Component {
	constructor(props) {
        super(props);  
        console.log(props)     
    } 
    render() {
    	return (
    		<div id="index">
    		<Route path={`${this.props.match.url}/:id`} component={A} />
    			<ul>
    				<li>
    					<Link to={`${this.props.match.url}/A`}>A</Link>
    				</li>
    				<li>
    					<Link to={`${this.props.match.url}/B`}>B</Link>
    				</li>
    				<li>
    					<Link to={`${this.props.match.url}/C`}>C</Link>
    				</li>
    			</ul>
    			
    		</div>
    	)
    	
    }
}