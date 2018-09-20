import * as React from "react";

interface IStyleRules {
  width?: string;
  height?: string;
  backgroundColor?: string;
}

interface IStyles {
  styles: IStyleRules;
}

type AnyComponent<P = any> =
| (new (props: P) => React.Component)
| ((props: P & { children?: React.ReactNode }) => React.ReactElement<any> | null);

type WithStyle = (styles: IStyleRules) => <P extends IStyles> (Component: AnyComponent<P>) => AnyComponent<P>;

export type StyleRules = IStyleRules;

export const withStyle: WithStyle = (styles: IStyleRules) => (Component: AnyComponent) => {

  class HOC extends React.Component<{}> {
    public styles: IStyleRules;
    constructor(props: {}) {
      super(props);
      this.styles = styles;
    }
    public render() {
      return <Component styles={this.styles} />;
    }
  }

  return HOC;
};
