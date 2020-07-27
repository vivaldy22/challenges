import React from "react";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

const LoadingPage = () => {
  return (
    <div>
      <Segment>
        <Dimmer active style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      </Segment>
    </div>
  );
};

export default LoadingPage;
