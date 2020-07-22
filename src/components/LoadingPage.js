import React, { Component } from "react";
import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";

class LoadingPage extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Dimmer active style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        </Segment>
      </div>
    );
  }
}

export default LoadingPage;
