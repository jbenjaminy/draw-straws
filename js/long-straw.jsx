var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');

var LongStraw = React.createClass({

	onButtonClick: function() {
    	this.props.dispatch(actions.pickStraw());
  	},

	render: function() {
		return (
			<li><input type="image" src="straw.png" key={this.props.strawKey} id={this.props.strawId} onClick={this.onButtonClick} /></li>
			
		);
	}
});

var Container = connect()(LongStraw);

exports.LongStraw = LongStraw;
exports.Container = Container;