import React, { PropTypes } from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="row vertical-padded">
        <div className="col-xs-12">
          <h1 className="text-center">Live Order Board</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
