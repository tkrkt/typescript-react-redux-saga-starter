import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {add, addLater} from '../actions/action';

// props of action-creator
interface DispatchProps {
  add: typeof add;
  addLater: typeof addLater;
}

// props from parent element
interface OwnProps {
  num: number;
  delay?: number;
}

class AddButton extends React.Component<DispatchProps & OwnProps, {}> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {num, delay, add, addLater} = this.props;
    delay ? addLater({num, delay}) : add({num});
  }

  render() {
    const {num, delay} = this.props;
    return (
      <button onClick={this.handleClick}>Add {num}{delay && ` (delay ${delay}ms)`}</button>
    );
  }
}

export default connect<{}, DispatchProps, OwnProps>(
  null,
  (dispatch): DispatchProps => bindActionCreators({add, addLater}, dispatch),
)(AddButton);
