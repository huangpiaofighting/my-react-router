import React from 'react';
function testable(target) {
  target.isTestable = true;
}
@testable
class MyTestableClass {
  // ...
}


export default class TES6 extends React.Component {
	//装饰器
	TChapter21(){
		console.log(MyTestableClass.isTestable);
	}
	//解构
	TChapter3 (){
		let [a,b,c] = [1,2,3];
		console.log(a,b,c);
	}
    render() {
    	this.TChapter3();
    	this.TChapter21();
    	return (
    		<div id="index" style={{"width":"37px","height":"50px"}}>
    			TES6
    		</div>
    	)
    	
    }
}