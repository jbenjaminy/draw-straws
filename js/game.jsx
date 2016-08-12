var React = require('react');
var ReactDOM = require('react-dom');

var StartScreen = require('./start-screen').Container;
var StrawContainer = require('./straw-container').Container;
var EndScreen = require('./end-screen').Container;

var Game = React.createClass({

	render: function() {
		return (
			<div>
				<StartScreen />
				<StrawContainer />
				<EndScreen />
			</div>
			
		);
	}
});

module.exports = Game;