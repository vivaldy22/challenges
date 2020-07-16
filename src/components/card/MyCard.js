import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

class MyCard extends Component {
  render() {
    const { id, name, address, age, email } = this.props.data;
    const { onRmvBtnClick } = this.props;

    return (
      <Card className="root" variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography color="textSecondary">{age} years old</Typography>
          <Typography variant="body2" component="p">
            {address}
          </Typography>
          <Typography variant="body2" component="p">
            {email}
          </Typography>
        </CardContent>
        <CardActions className="card-remove-button">
          <Button onClick={() => onRmvBtnClick(id)} color="secondary">
            Remove
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default MyCard;
