var NEW_GAME = 'NEW_GAME';
var newGame = function() {
	return {
		type: NEW_GAME
	};
};

var CHANGE_VALUE = 'CHANGE_VALUE'
var changeValue = function(inputValue) {
	return {
		type: CHANGE_VALUE,
		inputValue: inputValue
	};
};

var START_GAME = 'START_GAME';
var startGame = function() {
    return {
        type: START_GAME
    };
};

var PICK_STRAW = 'PICK_STRAW';
var pickStraw = function() {
	return {
		type: PICK_STRAW
	};
};

var END_GAME = 'END_GAME';
var endGame = function() {
	return {
		type: END_GAME
	};
};

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.CHANGE_VALUE = CHANGE_VALUE;
exports.changeValue = changeValue;

exports.START_GAME = START_GAME;
exports.startGame = startGame;

exports.PICK_STRAW = PICK_STRAW;
exports.pickStraw = pickStraw;

exports.END_GAME = END_GAME;
exports.endGame = endGame;

