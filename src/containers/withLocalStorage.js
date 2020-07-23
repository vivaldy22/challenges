import React, { Component } from "react";

export default function withLocalStorage(WrappedComponent, key1, key2) {
  return class extends Component {
    // state = {
    //   isLocalStorageEmpty: true,
    // };
    //
    // componentDidMount() {
    //   this.checkLocalStorage(key1, key2);
    // }
    //
    // checkLocalStorage = (key1, key2) => {
    //   if (localStorage.getItem(key1) && localStorage.getItem(key2)) {
    //     this.setState({
    //       isLocalStorageEmpty: false,
    //     });
    //   } else {
    //     this.setState({
    //       isLocalStorageEmpty: true,
    //     });
    //   }
    // };

    set = (key, data) => {
      // if (this.state.isLocalStorageEmpty) {
      localStorage.setItem(key, data);
      // }
    };

    remove = (key) => {
      // if (!this.state.isLocalStorageEmpty) {
      localStorage.removeItem(key);
      // }
    };

    render() {
      return (
        <WrappedComponent set={this.set} remove={this.remove} {...this.props} />
      );
    }
  };
}
