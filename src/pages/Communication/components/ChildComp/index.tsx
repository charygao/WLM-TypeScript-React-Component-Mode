import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "./style.css";

interface IProps {
  text: string;
  handler?: (result: string) => void;
}

class ChildComp extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public handlerClick = () => {
    const { handler } = this.props;
    if (handler) {
      handler("ChildComp");
    }
  }

  public render() {
    const {
      text,
      handler,
    } = this.props;
    return (
      <React.Fragment>
        <Typography>
          Props Text Value: { text }
        </Typography>
        { handler && (
          <Typography>
            Props handler function 到父组件:
            <span className={styles.cons}>
              <Button variant="outlined" onClick={this.handlerClick} color="primary">
                确定
              </Button>
            </span>
          </Typography>
        )}
      </React.Fragment>

    );
  }
}

export default ChildComp;
