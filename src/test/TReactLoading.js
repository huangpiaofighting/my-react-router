import React from 'react';
import ReactLoading from 'react-loading';

export default class TReactLoading extends React.Component {
    render() {
    	return (
    		<div id="index" style={{"width":"37px","height":"50px"}}>
    			<ReactLoading type="spinningBubbles" color="#ff00ff" height='50px' width='50px' />
    		</div>
    	)
    	
    }
}