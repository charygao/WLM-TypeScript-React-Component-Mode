import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Proxy from "wolfy87-eventemitter";
import styles from "./style.css";

interface IProps {
  handler: (result: string) => void;
  handlerChildCompsC: (result: string) => void;
  proxy: Proxy;
}

class ChildCompsR extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  public handlerClick = () => {
    const { handler } = this.props;
    handler("ChildCompsR");
  }

  public handlerProxyClick = () => {
    this.props.proxy.emit("ChildCompsP", "ChildCompsR");
  }

  public handlerContextClick = () => {
    const { handlerChildCompsC } = this.props;
    handlerChildCompsC("Context ChildCompsR");
  }

  public render() {
    return (
      <div className={styles.container}>
        <Typography>
          <span className={styles.cons}>
            <Button variant="outlined" onClick={this.handlerClick} color="primary">
              state 操作
            </Button>
          </span>
          <span className={styles.cons}>
            <Button variant="outlined"onClick={this.handlerProxyClick} color="primary">
              观察者 操作
            </Button>
          </span>
          <span className={styles.cons}>
            <Button variant="outlined" onClick={this.handlerContextClick} color="primary">
              Context 操作
            </Button>
          </span>
        </Typography>
      </div>
    );
  }
}

export default ChildCompsR;
