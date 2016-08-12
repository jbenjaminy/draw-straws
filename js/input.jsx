var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');

var Input = React.createClass({

  onFormSubmit: function(event) {
    event.preventDefault();
    this.props.onInput();
  },

  onInputChanged: function(event) {
    this.props.dispatch(actions.changeValue(event.target.value));
  },
  render: function() {
  return (
    <form onSubmit={this.onFormSubmit}>
      <input type="text" placeholder="Enter Number of Players" ref="guessValue" value={this.props.inputValue} onChange={this.onInputChanged}/>
      <button type="submit">Submit</button>
    </form>
  );
  }
});

var Container = connect()(Input);

exports.Input = Input;
exports.Container = Container;