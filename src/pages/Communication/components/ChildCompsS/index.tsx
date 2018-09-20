import * as React from "react";
import Typography from "@material-ui/core/Typography";

interface IProps {
  text: string;
}

class ChildCompsQ extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const {
      text,
    } = this.props;
    return (
      <div>
        <Typography>
          Child Node ChildCompsS State: { text }
        </Typography>
      </div>
    );
  }
}

export default ChildCompsQ;
