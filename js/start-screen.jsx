var React = require('react');
var connect = require('react-redux').connect;
var Input = require('./input').Container;
var actions = require('./actions');

var StartScreen = React.createClass({

	onSubmit: function() {
		this.props.dispatch(actions.startGame());
	},

	render: function() {
		if (!this.props.introScreen) {
  			return null;
  		};

		return ( 
			<div className='start-screen'>
				<Input onInput={this.onSubmit} inputValue={this.props.inputValue}/>
				<p>{this.props.feedback}</p>
			</div>
		);
	}
});

var mapStateToProps = function(state, props) {
	return {
		inputValue: state.inputValue,
		introScreen: state.introScreen,
		feedback: state.feedback

	};
};

var Container = connect(mapStateToProps)(StartScreen);

exports.StartScreen = StartScreen;
exports.Container = Container;