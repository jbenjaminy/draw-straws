var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');

var ShortStraw = React.createClass({

	onButtonClick: function() {
    	this.props.dispatch(actions.endGame());
  	},

	render: function() {
		return (
			<li><input type="image" src="straw.png" key={this.props.strawKey} id={this.props.strawId} onClick={this.onButtonClick} /></li>
			
		);
	}
});

var Container = connect()(ShortStraw);

exports.ShortStraw = ShortStraw;
exports.Container = Container;