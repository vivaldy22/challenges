import React from "react";
import { Container, Header, Button, Icon, Segment } from "semantic-ui-react";

const HomePage = () => {
  const { onArrowBtnClick } = this.props;

  return (
    <Segment textAlign="center" style={{ padding: "1em 0em" }} vertical>
      <Container text className="home-container">
        <Header
          as="h1"
          content="Welcome to Goods and Warehouse Management App"
          style={{
            fontSize: "3em",
            fontWeight: "normal",
            marginBottom: 0,
            // marginTop: "3.5em",
          }}
        />
        <Header
          as="h2"
          content="Don't forget to always smile!"
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />
        <Button name="goods" primary size="large" onClick={onArrowBtnClick}>
          See Goods List
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
