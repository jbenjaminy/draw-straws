var React = require('react');
var connect = require('react-redux').connect;

var ShortStraw = require('./short-straw').Container;
var LongStraw = require('./long-straw').Container;

var StrawContainer = React.createClass({
	createArray: function(strawsArray) {
		strawsArray.push(<ShortStraw key={0} strawKey={0} strawId={0}/>);
		for (var i = 1; i <= this.props.numPlayers - 1; i++) {
			strawsArray.push(<LongStraw key={i} strawKey={i} strawId={i} />);
		}
		return this.shuffleStraws(strawsArray);
	},

	shuffleStraws: function(strawsArray) {
	    var j = 0;
	    var x = 0;
	    var i = 0;
	    for (i = strawsArray.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = strawsArray[i - 1];
	        strawsArray[i - 1] = strawsArray[j];
	        strawsArray[j] = x;
	    }
	    return strawsArray;
	},

	render: function() {
		if (!this.props.gameScreen) {
  			return null;
  		};
  		var strawsArray = this.props.strawsArray;
  		this.createArray(strawsArray);

		return (
			<ul className='straw-container'>
				{strawsArray}
			</ul>
		);
	}
});

var mapStateToProps = function(state, props) {
	return {
		gameScreen: state.gameScreen,
		numPlayers: state.numPlayers,
		strawsArray: state.strawsArray
	};
};

var Container = connect(mapStateToProps)(StrawContainer);

exports.StrawContainer = StrawContainer;
exports.Container = Container;
