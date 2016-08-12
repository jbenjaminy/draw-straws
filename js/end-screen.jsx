var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');

var EndScreen = React.createClass({

	onRestart: function() {
    	this.props.dispatch(actions.newGame());
  	},

	render: function() {
		if (!this.props.endScreen) {
  			return null;
  		};

		return (
			<div className='end-screen'>
				<p>{this.props.feedback}</p>
				<img src='short-straw.png'/>
				<div className='button'>
					<button onClick={this.onRestart}>Play Again</button>
				</div>
			</div>
		);
	}
});

var mapStateToProps = function(state, props) {
	return {
		feedback: state.feedback,
		endScreen: state.endScreen
	};
};

var Container = connect(mapStateToProps)(EndScreen);

exports.EndScreen = EndScreen;
exports.Container = Container;