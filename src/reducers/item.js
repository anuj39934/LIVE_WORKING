import {
	FETCH_ITEMS
} from '../actions/type';

export default function(state = [], action){
	switch (action.type){
		case FETCH_ITEMS:
		debugger;
			return [...state, ...action.payload.data];
	}
	debugger;
	return state;
}