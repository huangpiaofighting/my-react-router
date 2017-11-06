import React from 'react';
import ReactLoading from 'react-loading';

export default class TReactLoading extends React.Component {
	aa(){
		console.log("返回---"+this.props);
		this.props.history.goBack();
	}
    render() {
    	return (
    		<div id="index" style={{"width":"37px","height":"50px"}}>
    			is Error Page
    			<button onClick={()=> this.aa()}>返回</button>
    		</div>
    	)
    	
    }
}