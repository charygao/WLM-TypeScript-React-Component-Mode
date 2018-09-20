import * as React from "react";
import { withStyle, StyleRules, IStylesProps } from "./hoc";

const s: StyleRules = {
  width: "100px",
  height: "200px",
  backgroundColor: "#980987",
};

type IHOCProps = IStylesProps;

class HOCComponent extends React.Component<IHOCProps> {
  constructor(props: IHOCProps) {
    super(props);
  }

  public render() {
    // console.log(this.props);
    return (
      <div style={this.props.styles}>...</div>
    );
  }
}

export default withStyle(s)(HOCComponent);
