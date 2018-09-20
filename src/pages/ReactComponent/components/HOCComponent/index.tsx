import * as React from "react";
import { withStyle, StyleRules } from "./hoc";

interface IHOCCProps {
  id: string;
  styles: StyleRules;
}

const s: StyleRules = {
  width: "100px",
  height: "200px",
  backgroundColor: "#980987",
};

class HOCComponent extends React.Component<IHOCCProps> {
  constructor(props: IHOCCProps) {
    super(props);
  }

  public render() {
    // console.log(this.props);
    return (
      <div style={this.props.styles}>...</div>
    );
  }
}

export default withStyle(s)<IHOCCProps>(HOCComponent);
