var actions = require('./actions');

var reducer = function(state, action) {
	state = state || {};
  	if(action.type === actions.NEW_GAME) {
  		return Object.assign({}, {
  			inputValue: '',
  			numPlayers: 0,
        strawsArray: [],
  			feedback: '',
  			introScreen: true,
  			gameScreen: false,
  			endScreen: false
  		});
  	} else if(action.type === actions.CHANGE_VALUE) {
    	var newState = Object.assign({}, state);
    	newState.inputValue = action.inputValue;

    	return newState;
 	} else if(action.type === actions.START_GAME) {
    	var numPlayers = parseInt(state.inputValue, 10);
   		var newState = Object.assign({}, state);
    	if (isNaN(numPlayers)) {
      		newState.feedback = 'Please enter a valid number.';
      	} else {
      		newState.numPlayers = numPlayers;
      		newState.introScreen = false;
      		newState.gameScreen = true;
      	}
      	return newState;
    } else if(action.type === actions.PICK_STRAW) {
    	var newState = Object.assign({}, state);
        newState.strawsArray = [];
        newState.numPlayers = state.numPlayers - 1;

    	return newState;
    } else if(action.type === actions.END_GAME) {
    	var newState = Object.assign({}, state);
    	newState.gameScreen = false;
    	newState.endScreen = true;
    	newState.feedback = 'You Picked The Short Straw!';

    	return newState;
    } else {

    	return state;
    }
};

exports.reducer = reducer;





