import {
	FETCH_ITEMS
} from './type';
//import axios from 'axios';
import {data} from '../../data/data';

export function fetchItems(){
	debugger;
	const request = data;//axios.get('https://jsonplaceholder.typicode.com/photos');
	return {
		type : FETCH_ITEMS,
		payload : request
	};
}