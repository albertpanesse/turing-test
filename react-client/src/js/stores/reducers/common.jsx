import * as actionTypes from '../actionTypes';

const initialState = {title: ''};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_TITLE:
			return {
				...state,
				title: action.payload
			};
		default:
			return state;
	}
};


export default reducer;
