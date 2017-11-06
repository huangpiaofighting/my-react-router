import React from 'react';

export default class Header extends React.Component {
    render() {
        let {name,value} =  this.props;
    	return (
    		<div>
    			<h2>{name}</h2>
    			<div>{value}</div>
    		</div>
    	)
    	
    }
}