import React, { Component } from "react";
import PropTypes from "prop-types";

class SamplePropTypes extends Component {
  render() {
    return (
      <div>
        {/*My name: {this.props.name || "Valdy"}, and my age:{" "}*/}
        My name: {this.props.name}, and my age:{this.props.age}
      </div>
    );
  }
}

SamplePropTypes.defaultProps = {
  name: "Valdy",
  age: 23,
};

SamplePropTypes.propTypes = {
  name: PropTypes.string,
  // children: PropTypes.element.isRequired
};

export default SamplePropTypes;
