import React from 'react';
import {Map,List} from 'immutable';
import Header from './../common/Header';

export default class TImmutable extends React.Component {
	
	constructor(props) {
        super(props);  
        console.log(props);
    }
    //list 
	Tlist(){
		let obj ={}
		// Construction  构造 & Static methods
		let plainArray = List([ 0,1,2,3,4 ]);
		// let isplainArray = List.isList(plainArray); // false or true
		// List.of(1,2,3,4) //创建list元素
		// plainArray.size; // list 的大小长度
		//PersistentChanges
		//返回一个新的内容 原数据不变
		let plainArray1 = plainArray.set(1,"abc"); //返回一个新的内容 原数据不变
		let plainArray2 = plainArray.delete(2);
		let plainArray3 = plainArray.insert(2,'a');
		plainArray.clear();
		plainArray.push("a"); //增
		plainArray.unshift("b");//增
		plainArray.pop();
		plainArray.shift();
		return plainArray2;
	}
	
	TMap(){
		let obj ={}
		const map1 = Map({ a: 1, b: 2, c: 3 })
		const map2 = map1.set('b', 50)
		const map3 = map1.get('b') + " vs. " + map2.get('b') // 2 vs. 50
		obj.map1 = map1;
		obj.map2 = map2;
		obj.map3 = map3;
		return obj;
	}
	// es 6
	TSymbol(){
		let obj = {};
		let test = Symbol("test");//Symbol 变成了唯一值
		let test1 = Symbol("test");
		obj[test] = "test"
		obj[test1] = "test1"
		return obj[test];
	}
    render() {
		const {map1,map2,map3} = this.TMap();
		const plainArray = this.Tlist();
		const tSymbol = this.TSymbol();
    	return (
    		<div id="index" style={{"width":"37px","height":"50px"}}>
    			<Header name="Map" value={map1} />
    			<Header name="Map" value={map2} />
    			<Header name="Map" value={map3} />
    			<Header name="List" value={plainArray} />
    			<Header name="Symbol" value={tSymbol} />
    		</div>
    	)
    	
    }
}