import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";
import GlobalResetCSS from "./reset.css";
import AuthoringTool from "./screens/AuthoringTool";
import { AppProvider } from "./screens/AuthoringTool/app-context";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AuthoringTool />
      </AppProvider>
      <GlobalResetCSS />
    </ThemeProvider>
  );
}
const ui = <App />;
const container = document.getElementById("root");

ReactDOM.render(ui, container);

// enable hot module replacement
if (module.hot) {
  module.hot.accept(() => {
    const NextApp = <App />;
    ReactDOM.render(NextApp, container);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
