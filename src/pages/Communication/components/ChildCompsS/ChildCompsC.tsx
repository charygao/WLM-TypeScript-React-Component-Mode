import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { MyContext } from "../../context";

class ChildCompsC extends React.Component {
  public render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          return (
            <Typography>
              Child Node ChildCompsC Context: {value}
            </Typography>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default ChildCompsC;
