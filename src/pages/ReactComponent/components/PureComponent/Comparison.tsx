import * as React from "react";
import Typography from "@material-ui/core/Typography";

interface IMyComparisonProps {
  text: string;
}

class MyComparison extends React.Component<IMyComparisonProps> {
  public index: number;
  constructor(props: IMyComparisonProps) {
    super(props);
    this.index = 0;
  }

  // public shouldComponentUpdate(nextProps: IMyComparisonProps) {
  //   if (this.props.text === nextProps.text) {
  //     return false;
  //   }
  //   return true;
  // }

  public render() {
    const { text } = this.props;
    this.index = this.index + 1;
    return (
      <Typography>
        Component 值：{ text } || {this.index}
      </Typography>
    );
  }
}

export default MyComparison;
