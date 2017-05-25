import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {State} from '../reducers/reducer';
import AddButton from './addButton';

// props of redux state
interface StateProps {
  count: number;
}

class App extends React.Component<StateProps, {}> {
  render() {
    return (
      <div>
        <div>Count: {this.props.count}</div>
        <AddButton num={1} />
        <AddButton num={5} />
        <AddButton num={1} delay={1000} />
      </div>
    );
  }
}

export default connect<StateProps, {}, {}>(
  (state: State): StateProps => ({count: state.counter.count}),
)(App);
