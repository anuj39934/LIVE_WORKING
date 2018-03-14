export default function ({dispatch}){
	return next => action => {
		debugger;
		//if the action does not have payload property
		if(!action.payload || !action.payload.then){
			debugger;
			return next(action);
		}

		//Make sure that the actions promise is resolved
		action.payload.
		then(function(response){
			debugger;
			console.log(response);
			const newAction =  {...action, payload : response};
			dispatch(newAction);
		});
	};
}