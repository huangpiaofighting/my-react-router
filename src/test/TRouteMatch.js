import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

export class TestA extends React.Component {
	render(){
		return (
			<div>
				{this.props.match.params.id !== 'Bb' ?<h2>{this.props.match.params.id}</h2>:null}
				{this.props.match.params.id !== 'Bb' ? <Link to="/TRouteMatch/Bb">Bb</Link> : null}
				
			</div>
		)
	}
}

export class TestB extends React.Component {
	render(){
		return (
			<div>
				<Redirect to="/error"/>
			</div>
		)
	}
}
export default class TRouteMatch extends React.Component {
	constructor(props) {
        super(props);  
        console.log(props)     
    } 
    render() {
    	return (
    		<div id="index">
    		<Switch>
    		<Route path={`${this.props.match.url}/Bb`} component={TestB} />
    		<Route path={`${this.props.match.url}/:id`} component={TestA} />
    		
    		</Switch>
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