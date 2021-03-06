import * as React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import { hot } from "react-hot-loader";
import { IStoreState } from "./global/types";
import { setGlobalSyncId } from "./global/actions";
import ReduxPage from "./pages/Redux";
import ReactPage from "./pages/ReactComponent";
import IMmutable from "./pages/Immutable";
import Communication from "./pages/Communication";
import styles from "./style.css";
import { IAppComponentProps } from "./types";

const onLineImage: string = "http://images.w3crange.com/welearnmore.png";

class AppComponent extends React.Component<IAppComponentProps, {}> {
  constructor(props: IAppComponentProps) {
    super(props);
  }

  public handleGlobal = () => {
    this.props.dispatch(setGlobalSyncId());
  }

  public render() {
    return (
      <div className={styles["container"]}>
        <Router>
          <div className={styles["content-container"]}>
            <div className={styles["header-container"]}>
              <div className={styles["header-box"]}>
                <img className={styles["header-logo"]} src={onLineImage} />
              </div>
                {/* layout struct(like nav, sidebar...) */}
              <div className={styles["nav-container"]}>
                <NavLink exact to="/">React Component</NavLink>
                <NavLink to="/communication">React Communication</NavLink>
                <NavLink to="/redux">Redux</NavLink>
                <NavLink to="/immutable">immutable</NavLink>
              </div>
            </div>
            {/* register routes */}
            <div className={styles["route-container"]}>
              <Route exact path="/" component={ReactPage} />
              <Route path="/communication" component={Communication} />
              <Route path="/redux" component={ReduxPage} />
              <Route path="/immutable" component={IMmutable} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { global } = state;
  return {
    global,
  };
};

const App = connect(mapStateToProps)(AppComponent);
export default hot(module)(App);
