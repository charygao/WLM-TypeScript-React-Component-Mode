import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Proxy from "wolfy87-eventemitter";

interface IState {
  proxyText: string;
}

interface IProps {
  proxy: Proxy;
}

class ChildCompsP extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      proxyText: "",
    };
  }

  public componentDidMount() {
    this.props.proxy.on("ChildCompsP", (result: string) => {
      this.setState({
        proxyText: result,
      });
    });
  }

  public render() {
    const { proxyText } = this.state;
    return (
      <div>
        <Typography>
          Child Node ChildCompsP Proxy: { proxyText }
        </Typography>
      </div>
    );
  }
}

export default ChildCompsP;
