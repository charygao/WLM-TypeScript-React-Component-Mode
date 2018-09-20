import * as React from "react";
import Proxy from "wolfy87-eventemitter";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {
  ICommunicationProps,
  ICommunicationState,
} from "./types";
import ChildComp from "./components/ChildComp";
import ChildCompsQ from "./components/ChildCompsS";
import ChildCompsR from "./components/ChildCompsS/ChildCompsR";
import ChildCompsP from "./components/ChildCompsS/ChildCompsP";
import ChildCompsC from "./components/ChildCompsS/ChildCompsC";
import { MyContext } from "./context";

const TabContainer: React.SFC = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

const proxy = new Proxy();

class Communication extends React.Component<ICommunicationProps, ICommunicationState> {
  public childCompProps: string;
  constructor(props: ICommunicationProps) {
    super(props);
    this.state = {
      value: 0,
      brothersText: "",
      contextsText: "",
    };
    this.childCompProps = "icepy";
  }

  public handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    this.setState({ value });
  }

  public emptyHandler = (result: string) => {
    alert(`child component click + ${result}`);
  }

  public handlerChildCompsR = (result: string) => {
    this.setState({
      brothersText: result,
    });
  }

  public handlerChildCompsC = (result: string) => {
    this.setState({
      contextsText: result,
    });
  }

  public render() {
    const { value, brothersText, contextsText } = this.state;
    return (
      <div>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="普通 Props 传递" />
          <Tab label="组件通信" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <ChildComp text={this.childCompProps} handler={this.emptyHandler} />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <ChildCompsR
              handler={this.handlerChildCompsR}
              proxy={proxy}
              handlerChildCompsC={this.handlerChildCompsC}
            />
            <ChildCompsQ text={brothersText} />
            <ChildCompsP proxy={proxy} />
            <MyContext.Provider value={contextsText}>
              <ChildCompsC />
            </MyContext.Provider>
          </TabContainer>
        )}
      </div>
    );
  }
}

export default Communication;
